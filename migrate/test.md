# Battery Thermal Management System
---

## Overview

This code models a Battery Thermal Management System (BTMS), simulating how a battery pack’s temperature evolves over time under different types of thermal management strategies. It includes:

1. A **BatteryPack** class to represent the battery’s physical properties.  
2. A **BTMS** class that handles cooling or heating mechanisms depending on the selected system type.  
3. A **simulate_btms** function to run the simulation for a specified period.  
4. A **plot_results** function to visualize the simulation output.  
5. A **main** function to demonstrate running simulations for multiple BTMS types.

The code uses NumPy for numerical operations and Matplotlib for plotting.

---

## Code Structure

The code is organized into the following main sections:

1. **Imports**  
2. **BatteryPack Class**  
3. **BTMS Class**  
4. **Simulation Function** (`simulate_btms`)  
5. **Plotting Function** (`plot_results`)  
6. **Main Function** (`main`)

---

## 1. Imports

```python
import matplotlib.pyplot as plt
import numpy as np
```

- **matplotlib.pyplot**: for creating plots and visualizations.  
- **numpy**: for array manipulation, numerical computations, and simulation time array generation.

---

## 2. BatteryPack Class

```python
class BatteryPack:
    def __init__(self, thermal_mass, initial_temp, ambient_temp, heat_generation):
        """
        Initialize the battery pack parameters.
        
        :param thermal_mass: Thermal mass of the battery pack (J/°C)
        :param initial_temp: Initial temperature of the battery pack (°C)
        :param ambient_temp: Ambient temperature (°C)
        :param heat_generation: Heat generated by the battery (W)
        """
        self.thermal_mass = thermal_mass
        self.current_temp = initial_temp
        self.ambient_temp = ambient_temp
        self.heat_generation = heat_generation
```

### Class Responsibilities
- Represents a battery’s key thermal properties.
- Stores:
  - **thermal_mass**: The product of the battery’s mass and its specific heat capacity.  
  - **current_temp**: The battery’s starting temperature.  
  - **ambient_temp**: Surrounding environmental temperature.  
  - **heat_generation**: The battery’s internal heat generation (in Watts), e.g., from electrical losses.

### Parameters
- **thermal_mass (float)**: Measured in Joules per °C (J/°C).  
- **initial_temp (float)**: Initial battery temperature in °C.  
- **ambient_temp (float)**: Ambient or environment temperature in °C.  
- **heat_generation (float)**: Constant power output from the battery due to heat losses, in Watts (Joules per second).

---

## 3. BTMS Class

```python
class BTMS:
    def __init__(self, battery, system_type, airflow_rate, specific_heat_air=1005, efficiency=1.0):
        """
        Initialize the BTMS system.
        
        :param battery: Instance of BatteryPack
        :param system_type: Type of BTMS ('Passive', 'Active', 'HeatRecovery')
        :param airflow_rate: Airflow rate (m^3/s)
        :param specific_heat_air: Specific heat capacity of air (J/(kg·°C))
        :param efficiency: Efficiency factor for heat exchange
        """
        self.battery = battery
        self.system_type = system_type
        self.airflow_rate = airflow_rate
        self.specific_heat_air = specific_heat_air
        self.efficiency = efficiency
        
        self.air_density = 1.225  # kg/m^3 at sea level
        self.power_consumption = 0  # To be calculated for Active systems
```

### Class Responsibilities
- Orchestrates the cooling or heating mechanism applied to the battery.  
- Provides flexible approaches depending on the chosen system type (`Passive`, `Active`, or `HeatRecovery`).  
- Calculates heat transfer from the battery to the environment (and vice versa) through air flow.

### Parameters
- **battery (BatteryPack)**: An instance of the `BatteryPack` class whose temperature we manage.  
- **system_type (str)**: Specifies the cooling method to use. Must be one of:
  - `'Passive'` – uses natural or forced airflow, no additional power consumption.  
  - `'Active'` – uses higher airflow or added cooling equipment, resulting in some power consumption.  
  - `'HeatRecovery'` – reuses some of the generated heat for better efficiency, leading to moderate power usage.  
- **airflow_rate (float)**: The volumetric flow rate of air (m³/s).  
- **specific_heat_air (float)**: Specific heat capacity of air (J/(kg·°C)); defaults to 1005 J/(kg·°C).  
- **efficiency (float)**: Represents how effectively the BTMS can transfer heat (0–1). Defaults to 1.0 (100%).

### Internal Attributes
- **air_density (float)**: Set to 1.225 kg/m³ (density of air at sea level).  
- **power_consumption (float)**: Tracks how much power the active system type consumes (in Watts).

---

### 3.1. `calculate_heat_transfer` Method

```python
def calculate_heat_transfer(self, delta_temp):
    """
    Calculate the heat transfer based on airflow and temperature difference.
    
    :param delta_temp: Temperature difference between battery and air (°C)
    :return: Heat transfer rate (W)
    """
    mass_flow_rate = self.air_density * self.airflow_rate  # kg/s
    heat_transfer = mass_flow_rate * self.specific_heat_air * delta_temp * self.efficiency
    return heat_transfer
```

**Functionality**:  
- Computes the heat transfer from battery to ambient air (or vice versa) using the formula:  
  \[
    \dot{Q} = \dot{m} \times c_p \times \Delta T \times \eta
  \]  
  where:
  - \(\dot{m}\) is the mass flow rate of air (\(\mathrm{kg/s}\)).  
  - \(c_p\) is the specific heat capacity of air (\(\mathrm{J/(kg \cdot ^{\circ}C)}\)).  
  - \(\Delta T\) is the temperature difference between battery and ambient air (\(^{\circ}\mathrm{C}\)).  
  - \(\eta\) is the efficiency factor.

**Parameters**:
- **delta_temp (float)**: The difference in temperature (\(\mathrm{^{\circ}C}\)) between the battery and the ambient environment.

**Returns**:
- **heat_transfer (float)**: Heat transfer rate in Watts (\(\mathrm{J/s}\)).

---

### 3.2. `update_temperature` Method

```python
def update_temperature(self, time_step):
    """
    Update the battery temperature based on heat generation and heat transfer.
    
    :param time_step: Time step for the simulation (s)
    """
    # Determine the temperature difference
    delta_temp = self.battery.current_temp - self.battery.ambient_temp

    # Calculate heat transfer based on system type
    if self.system_type == 'Passive':
        heat_transfer = self.calculate_heat_transfer(delta_temp)
    elif self.system_type == 'Active':
        self.power_consumption = 100  # Example power consumption in Watts
        heat_transfer = self.calculate_heat_transfer(delta_temp) * 1.5  # Assume higher efficiency
    elif self.system_type == 'HeatRecovery':
        heat_transfer = self.calculate_heat_transfer(delta_temp) * 1.2
        self.power_consumption = 80  # Lower power consumption due to heat recovery
    else:
        raise ValueError("Invalid system type. Choose 'Passive', 'Active', or 'HeatRecovery'.")

    # Net heat added to the battery
    net_heat = self.battery.heat_generation - heat_transfer  # W

    # Update temperature
    delta_T = (net_heat * time_step) / self.battery.thermal_mass
    self.battery.current_temp += delta_T

    return heat_transfer, self.power_consumption
```

**Functionality**:  
1. **Temperature difference (`delta_temp`)**: Finds how much hotter or cooler the battery is compared to the ambient temperature.  
2. **Heat transfer**:  
   - If `system_type` is:
     - **`Passive`**: Uses normal airflow-based heat transfer.  
     - **`Active`**: Consumes a fixed amount of power (100 W) and multiplies heat transfer by 1.5 to simulate stronger cooling.  
     - **`HeatRecovery`**: Increases heat transfer by a factor of 1.2 and sets power consumption to 80 W to simulate partial heat recovery.  
3. **Net heat**: Calculates how much heat remains in the battery after subtracting the heat transfer.  
4. **Temperature update**:  
   - Applies:  
     \[
       \Delta T = \frac{(\dot{Q}_{net}) \times \Delta t}{C_{thermal}}
     \]  
     to find how much the battery temperature changes in the time step.  
   - Updates the battery’s temperature with the new value.

**Parameters**:
- **time_step (float)**: The duration (in seconds) of each simulation step.

**Returns**:
- **heat_transfer (float)**: The amount of heat (in Watts) transferred out of the battery during this time step.  
- **power_consumption (float)**: The power consumption of the chosen BTMS in Watts (will be 0 for `Passive`).

---

## 4. `simulate_btms` Function

```python
def simulate_btms(system_type, total_time=3600, time_step=1):
    """
    Simulate the BTMS over a period of time.
    
    :param system_type: Type of BTMS ('Passive', 'Active', 'HeatRecovery')
    :param total_time: Total simulation time in seconds
    :param time_step: Time step in seconds
    :return: Time array, Temperature array, Heat transfer array, Power consumption array
    """
    # Initialize battery and BTMS parameters
    battery = BatteryPack(
        thermal_mass=500000,      # Example thermal mass in J/°C
        initial_temp=25.0,        # Initial temperature in °C
        ambient_temp=25.0,        # Ambient temperature in °C
        heat_generation=200       # Heat generation in W
    )

    btms = BTMS(
        battery=battery,
        system_type=system_type,
        airflow_rate=0.05          # Example airflow rate in m^3/s
    )

    # Initialize arrays to store simulation data
    time_array = np.arange(0, total_time, time_step)
    temp_array = []
    heat_transfer_array = []
    power_consumption_array = []

    for t in time_array:
        # Record the current temperature
        temp_array.append(btms.battery.current_temp)

        # Update temperature and get heat transfer & power usage
        heat_transfer, power = btms.update_temperature(time_step)

        # Store simulation data
        heat_transfer_array.append(heat_transfer)
        power_consumption_array.append(power)

    return time_array, np.array(temp_array), np.array(heat_transfer_array), np.array(power_consumption_array)
```

**Functionality**:
1. **Sets up** a `BatteryPack` and a `BTMS` instance with user-defined or default parameters:
   - `thermal_mass`, `initial_temp`, `ambient_temp`, etc.  
2. **Time array**: Creates a NumPy array from 0 to `total_time` in increments of `time_step`.  
3. **Simulation loop**: Iterates through each time step, updating battery temperature.  
4. **Data recording**: Stores temperature, heat transfer rate, and power consumption at each time step.  
5. **Returns** the arrays with simulation results:
   - **time_array**: The array of time points.  
   - **temp_array**: The battery temperature at each time step.  
   - **heat_transfer_array**: The heat transfer values at each time step.  
   - **power_consumption_array**: The power consumption at each time step.

**Parameters**:
- **system_type (str)**: `'Passive'`, `'Active'`, or `'HeatRecovery'`.  
- **total_time (int)**: Total simulation duration in seconds; default 3600 seconds (1 hour).  
- **time_step (int)**: Simulation time step (in seconds), default is 1 second.

**Returns**:
- **time_array (np.ndarray)**: Time points of the simulation.  
- **temp_array (np.ndarray)**: Recorded temperatures of the battery.  
- **heat_transfer_array (np.ndarray)**: Heat transfer rates from battery to environment.  
- **power_consumption_array (np.ndarray)**: System power usage if applicable.

---

## 5. `plot_results` Function

```python
def plot_results(time, temp, heat_transfer, power, system_type):
    """
    Plot the simulation results.
    
    :param time: Time array
    :param temp: Temperature array
    :param heat_transfer: Heat transfer array
    :param power: Power consumption array
    :param system_type: Type of BTMS for labeling
    """
    fig, ax1 = plt.subplots(figsize=(12,6))

    color = 'tab:red'
    ax1.set_xlabel('Time (s)')
    ax1.set_ylabel('Battery Temperature (°C)', color=color)
    ax1.plot(time, temp, color=color, label='Battery Temperature')
    ax1.tick_params(axis='y', labelcolor=color)
    ax1.legend(loc='upper left')

    ax2 = ax1.twinx()  # instantiate a second axes that shares the same x-axis

    color = 'tab:blue'
    ax2.set_ylabel('Heat Transfer (W)', color=color)
    ax2.plot(time, heat_transfer, color=color, label='Heat Transfer')
    ax2.tick_params(axis='y', labelcolor=color)
    ax2.legend(loc='upper right')

    plt.title(f'BTMS Simulation - {system_type} System')
    plt.show()

    # Plot power consumption if applicable
    if np.any(power > 0):
        plt.figure(figsize=(12,4))
        plt.plot(time, power, color='tab:green', label='Power Consumption (W)')
        plt.xlabel('Time (s)')
        plt.ylabel('Power Consumption (W)')
        plt.title(f'Power Consumption - {system_type} System')
        plt.legend()
        plt.show()
```

**Functionality**:
1. Plots the **battery temperature** over time on one axis (left y-axis).  
2. Plots the **heat transfer** over time on a second axis (right y-axis).  
3. If there is a nonzero power consumption in the array, it plots that on a separate figure.  
4. **Labels** the axes and adds legends for clarity.

**Parameters**:
- **time (np.ndarray)**: Time steps used in the simulation.  
- **temp (np.ndarray)**: Battery temperature data.  
- **heat_transfer (np.ndarray)**: Heat transfer rates.  
- **power (np.ndarray)**: Power consumption values.  
- **system_type (str)**: Used in plot titles and labels (e.g., “Passive”, “Active”, “HeatRecovery”).

---

## 6. `main` Function

```python
def main():
    systems = ['Passive', 'Active', 'HeatRecovery']
    for system in systems:
        time, temp, heat_transfer, power = simulate_btms(system_type=system, total_time=7200, time_step=1)
        plot_results(time, temp, heat_transfer, power, system)

if __name__ == "__main__":
    main()
```

**Functionality**:
1. Defines a list of systems: `'Passive'`, `'Active'`, and `'HeatRecovery'`.  
2. Calls `simulate_btms` for each system over 7200 seconds (2 hours).  
3. Visualizes each system’s simulation data via `plot_results`.  

**Usage**:  
- When the script is run directly, it executes `main()`, generating three sets of results (one for each BTMS type) and displaying the plots.

---

## How to Use

1. **Clone or copy** the script into your Python workspace.  
2. **Install requirements** (if needed):  
   ```bash
   pip install matplotlib numpy
   ```  
3. **Run the script**:
   ```bash
   python script_name.py
   ```  
   - It will produce three simulation plots for the different BTMS systems.  

4. **Customize**:
   - Adjust the battery parameters (thermal mass, initial temperature, etc.) in `simulate_btms`.  
   - Modify airflow rate, `system_type`, or heat generation.  
   - Change `time_step` and `total_time` to explore different simulation timescales.

---

## Potential Extensions

- **Variable Heat Generation**: Implement time-dependent heat generation for more realistic battery load cycles.  
- **Advanced Cooling Models**: Extend the `BTMS` class to model liquid cooling, phase-change materials, or advanced heat pipes.  
- **Power Optimization**: Include logic to determine the optimal power consumption required to maintain temperature within desired limits.  
- **GUI Integration**: Integrate this simulation into a GUI application for dynamic parameter tuning.

---

## Conclusion

This code provides a straightforward yet flexible foundation for simulating a Battery Thermal Management System. By adjusting parameters and extending class functionality, you can investigate thermal responses under various conditions and system types. The included plots help visualize how the battery temperature, heat transfer, and power consumption evolve over time, providing valuable insight for design and optimization.