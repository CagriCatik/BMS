"use strict";(self.webpackChunkmy_document=self.webpackChunkmy_document||[]).push([[6217],{3706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"testing_and_validation/stress-test","title":"StressTests","description":"Die Implementierung eines Stresstests mit CAPL ist ein effektiver Ansatz, um sporadische Kommunikationsabbr\xfcche in einem elektronischen Lenksystem zu untersuchen. Hier ist eine strukturierte Beschreibung, wie ein solcher Test umgesetzt werden kann:","source":"@site/docs/06_testing_and_validation/stress-test.md","sourceDirName":"06_testing_and_validation","slug":"/testing_and_validation/stress-test","permalink":"/BMS/docs/testing_and_validation/stress-test","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/BMS/edit/main/docs/06_testing_and_validation/stress-test.md","tags":[],"version":"current","frontMatter":{}}');var s=r(4848),t=r(8453);const l={},d="StressTests",h={},a=[{value:"<strong>1. Testanforderungen definieren</strong>",id:"1-testanforderungen-definieren",level:3},{value:"<strong>2. Testumgebung vorbereiten</strong>",id:"2-testumgebung-vorbereiten",level:3},{value:"<strong>3. CAPL-Skript f\xfcr Stresstest entwickeln</strong>",id:"3-capl-skript-f\xfcr-stresstest-entwickeln",level:3},{value:"<strong>Schritte im Skript:</strong>",id:"schritte-im-skript",level:4},{value:"<strong>4. Durchf\xfchrung des Tests</strong>",id:"4-durchf\xfchrung-des-tests",level:3},{value:"<strong>5. Analyse und Korrelation</strong>",id:"5-analyse-und-korrelation",level:3},{value:"<strong>6. Optimierung und Fehlerbehebung</strong>",id:"6-optimierung-und-fehlerbehebung",level:3},{value:"<strong>Ergebnis</strong>",id:"ergebnis",level:3},{value:"<strong>Vollst\xe4ndiger CAPL-Code</strong>",id:"vollst\xe4ndiger-capl-code",level:3},{value:"<strong>Erl\xe4uterungen zum Code</strong>",id:"erl\xe4uterungen-zum-code",level:3},{value:"<strong>Erweiterungen</strong>",id:"erweiterungen",level:3}];function o(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"stresstests",children:"StressTests"})}),"\n",(0,s.jsxs)(n.p,{children:["Die Implementierung eines ",(0,s.jsx)(n.strong,{children:"Stresstests mit CAPL"})," ist ein effektiver Ansatz, um sporadische Kommunikationsabbr\xfcche in einem elektronischen Lenksystem zu untersuchen. Hier ist eine strukturierte Beschreibung, wie ein solcher Test umgesetzt werden kann:"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"1-testanforderungen-definieren",children:(0,s.jsx)(n.strong,{children:"1. Testanforderungen definieren"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ziel: Reproduzieren und Identifizieren von Kommunikationsabbr\xfcchen."}),"\n",(0,s.jsxs)(n.li,{children:["Umfang:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Belastung der CAN-Kommunikation durch hohe Datenlast und sporadische Nachrichtenmuster."}),"\n",(0,s.jsx)(n.li,{children:"Beobachtung der Reaktion des Systems unter stressigen Bedingungen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"2-testumgebung-vorbereiten",children:(0,s.jsx)(n.strong,{children:"2. Testumgebung vorbereiten"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hardware"}),": HiL-System, Steuerger\xe4t (ECU), CAN-Bus mit notwendiger Peripherie."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Software"}),": CAPL-Skript f\xfcr CANalyzer oder CANoe."]}),"\n",(0,s.jsxs)(n.li,{children:["Sicherstellen, dass:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Kommunikationsschnittstellen \xfcberwacht werden k\xf6nnen."}),"\n",(0,s.jsx)(n.li,{children:"Log-Daten erfasst und gespeichert werden."}),"\n",(0,s.jsx)(n.li,{children:"Fehlerdetektionsmechanismen wie ACK-Fehler, Bus-Off-Zust\xe4nde oder Frame-Drops aktiviert sind."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"3-capl-skript-f\xfcr-stresstest-entwickeln",children:(0,s.jsx)(n.strong,{children:"3. CAPL-Skript f\xfcr Stresstest entwickeln"})}),"\n",(0,s.jsx)(n.h4,{id:"schritte-im-skript",children:(0,s.jsx)(n.strong,{children:"Schritte im Skript:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Initialisierung"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Definiere CAN-Kan\xe4le, zu testende Nachrichten und Priorit\xe4ten."}),"\n",(0,s.jsx)(n.li,{children:"Initialisiere Timer f\xfcr zeitgesteuerte Nachrichten\xfcbertragung."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-capl",children:"variables {\n    message 0x100 msgHighPriority;\n    message 0x200 msgLowPriority;\n    timer stressTimer;\n}\n\non start {\n    setTimer(stressTimer, 10); // Starte den Timer f\xfcr Stress-Simulation.\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Stress-Szenarien erzeugen"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sende Nachrichten mit hoher Frequenz."}),"\n",(0,s.jsx)(n.li,{children:"Variiere Botschaftsintervallen (z. B. von 1 ms bis 100 ms)."}),"\n",(0,s.jsx)(n.li,{children:"Integriere zuf\xe4llige Dateninhalte, um die Datenlast zu erh\xf6hen."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-capl",children:"on timer stressTimer {\n    // Sende Nachrichten mit hoher Frequenz\n    msgHighPriority.Data[0] = rand(0, 255); // Zufallsdaten\n    output(msgHighPriority);\n    \n    msgLowPriority.Data[0] = rand(0, 255); \n    output(msgLowPriority);\n    \n    setTimer(stressTimer, 1 + rand(0, 10)); // Zuf\xe4llige Zeitintervalle\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Fehler provozieren"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Simuliere Bus-St\xf6rungen (z. B. Bus-Off-Szenarien)."}),"\n",(0,s.jsx)(n.li,{children:"Teste Grenzbedingungen wie vollst\xe4ndige Bus\xfcberlastung."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-capl",children:"on key 'F1' { // Manuelle St\xf6rung aktivieren\n    output(msgHighPriority); \n    overload(10); // Simuliere hohe Last f\xfcr 10 ms\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Loggen von Daten und Fehlern"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Erfasse CAN-Fehler wie Frame-Drops, ACK-Fehler oder Bus-Off-Zust\xe4nde."}),"\n",(0,s.jsx)(n.li,{children:"Log-Daten speichern und mit Zeitstempeln versehen."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-capl",children:'on busError {\n    write("BusError: %d", this.errorCode);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"4-durchf\xfchrung-des-tests",children:(0,s.jsx)(n.strong,{children:"4. Durchf\xfchrung des Tests"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Test mit verschiedenen Konfigurationen wiederholen:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unterschiedliche Nachrichtenpriorit\xe4ten."}),"\n",(0,s.jsx)(n.li,{children:"Variierende Buslast (50 %, 80 %, 100 %)."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Simuliere reale Fahrsituationen, um zu pr\xfcfen, ob Fehler reproduziert werden k\xf6nnen."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"5-analyse-und-korrelation",children:(0,s.jsx)(n.strong,{children:"5. Analyse und Korrelation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Logs analysieren"}),": Fehler und Zeitstempel mit Testprotokollen korrelieren."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fehlerursache eingrenzen"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Identifiziere, welche Nachricht (ID, Frequenz, Priorit\xe4t) zu den Kommunikationsabbr\xfcchen f\xfchrt."}),"\n",(0,s.jsx)(n.li,{children:"Pr\xfcfe Timer-Synchronisation oder andere softwarebedingte Fehlerquellen."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"6-optimierung-und-fehlerbehebung",children:(0,s.jsx)(n.strong,{children:"6. Optimierung und Fehlerbehebung"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Auf Basis der Testergebnisse:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Software-Updates einspielen (z. B. Timer-Interrupt-Synchronisation anpassen)."}),"\n",(0,s.jsx)(n.li,{children:"Systemintegrit\xe4t durch erneute Tests validieren."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ergebnis",children:(0,s.jsx)(n.strong,{children:"Ergebnis"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Erfolgreiche Reproduktion der sporadischen Fehler."}),"\n",(0,s.jsx)(n.li,{children:"Optimiertes CAPL-Testkonzept, das als Basis f\xfcr \xe4hnliche Projekte dient."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dieses Vorgehen zeigt ein systematisches und strukturiertes Vorgehen bei der Implementierung von Stresstests, das zuverl\xe4ssig sporadische Fehler aufdecken kann."}),"\n",(0,s.jsxs)(n.p,{children:["Hier ist ein vollst\xe4ndiges Beispiel f\xfcr ein ",(0,s.jsx)(n.strong,{children:"CAPL-Skript"}),", das einen ",(0,s.jsx)(n.strong,{children:"Stresstest f\xfcr ein elektronisches Lenksystem"})," implementiert. Dieses Skript simuliert eine hohe CAN-Buslast, zuf\xe4llige Nachrichtenintervalle und loggt auftretende Fehler:"]}),"\n",(0,s.jsx)(n.h3,{id:"vollst\xe4ndiger-capl-code",children:(0,s.jsx)(n.strong,{children:"Vollst\xe4ndiger CAPL-Code"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-capl",children:'/* Stresstest f\xfcr CAN-Kommunikation\n   Ziel: Sporadische Kommunikationsabbr\xfcche reproduzieren */\n\nvariables {\n    // Definiere Nachrichten (IDs und Daten)\n    message 0x100 msgHighPriority;  // Hohe Priorit\xe4t\n    message 0x200 msgLowPriority;   // Niedrige Priorit\xe4t\n\n    timer stressTimer;              // Timer f\xfcr Stress-Simulation\n    timer errorInjectionTimer;      // Timer f\xfcr Fehlersimulation\n    int overloadCounter = 0;        // Z\xe4hler f\xfcr Overload-Simulation\n}\n\n// Initialisierung beim Start des Skripts\non start {\n    // Initialisiere Nachrichten-Daten\n    msgHighPriority.DataLength = 8; // Nachrichtenl\xe4nge 8 Bytes\n    msgLowPriority.DataLength = 8;\n\n    // Timer starten\n    setTimer(stressTimer, 10);      // Start mit 10 ms Intervall\n    write("Stresstest gestartet...");\n}\n\n// Haupttimer: Simuliert hohe Buslast mit zuf\xe4lligen Daten\non timer stressTimer {\n    // Zufallsdaten f\xfcr Nachricht mit hoher Priorit\xe4t\n    msgHighPriority.Data[0] = rand(0, 255);\n    msgHighPriority.Data[1] = rand(0, 255);\n    msgHighPriority.Data[2] = rand(0, 255);\n    msgHighPriority.Data[3] = rand(0, 255);\n    output(msgHighPriority);\n\n    // Zufallsdaten f\xfcr Nachricht mit niedriger Priorit\xe4t\n    msgLowPriority.Data[0] = rand(0, 255);\n    msgLowPriority.Data[1] = rand(0, 255);\n    msgLowPriority.Data[2] = rand(0, 255);\n    msgLowPriority.Data[3] = rand(0, 255);\n    output(msgLowPriority);\n\n    // Timer erneut setzen (zuf\xe4lliges Intervall zwischen 1 ms und 10 ms)\n    setTimer(stressTimer, 1 + rand(0, 10));\n}\n\n// Tastensteuerung: Manuelle St\xf6rung simulieren\non key \'F1\' {\n    write("Manuelle \xdcberlastung aktiviert...");\n    overloadCounter = 10;  // Simuliere 10 Zyklen hoher Buslast\n    setTimer(errorInjectionTimer, 1);  // Timer f\xfcr Fehler-Simulation\n}\n\n// Fehler-Simulation: \xdcberlastung des Busses\non timer errorInjectionTimer {\n    if (overloadCounter > 0) {\n        msgHighPriority.Data[0] = rand(0, 255);\n        output(msgHighPriority);  // Nachricht senden\n        setTimer(errorInjectionTimer, 1);  // N\xe4chstes Intervall (1 ms)\n        overloadCounter--;\n    } else {\n        write("Manuelle \xdcberlastung beendet.");\n    }\n}\n\n// Fehlerbehandlung: Bus-Fehler loggen\non busError {\n    write("Busfehler erkannt: ErrorCode=%d", this.errorCode);\n}\n\n// Aufzeichnung von CAN-Nachrichten\non message * {\n    write("Empfangene Nachricht: ID=%x, Data=[%x %x %x %x %x %x %x %x]",\n        this.id,\n        this.data[0], this.data[1], this.data[2], this.data[3],\n        this.data[4], this.data[5], this.data[6], this.data[7]);\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"erl\xe4uterungen-zum-code",children:(0,s.jsx)(n.strong,{children:"Erl\xe4uterungen zum Code"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hauptfunktionen"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stress-Simulation"}),": Der ",(0,s.jsx)(n.code,{children:"stressTimer"})," erzeugt Nachrichten mit zuf\xe4lligen Daten und zuf\xe4lligen Intervallen, um den CAN-Bus zu belasten."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Manuelle \xdcberlastung"}),": Mit der ",(0,s.jsx)(n.code,{children:"F1"}),"-Taste wird eine simulierte \xdcberlastung des Busses f\xfcr 10 Zyklen ausgel\xf6st."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fehlerprotokollierung"}),": ",(0,s.jsx)(n.code,{children:"on busError"})," loggt auftretende Busfehler wie ACK-Fehler oder Bus-Off-Zust\xe4nde."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Variablen"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Nachrichten (",(0,s.jsx)(n.code,{children:"message"}),") werden definiert, um gezielt hohe und niedrige Priorit\xe4ten zu testen."]}),"\n",(0,s.jsxs)(n.li,{children:["Timer (",(0,s.jsx)(n.code,{children:"timer"}),") steuern zeitliche Abl\xe4ufe f\xfcr die Simulation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Logging"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Nachrichten und Fehler werden in der CANoe-Konsole ausgegeben."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Flexibilit\xe4t"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Intervalle und Datenmuster k\xf6nnen leicht angepasst werden."}),"\n",(0,s.jsxs)(n.li,{children:["Die Fehlersimulation ist flexibel \xfcber die ",(0,s.jsx)(n.code,{children:"F1"}),"-Taste aktivierbar."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"erweiterungen",children:(0,s.jsx)(n.strong,{children:"Erweiterungen"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Statistische Analyse"}),": Log-Dateien analysieren, um zeitliche Muster von Fehlern zu erkennen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Automatische Trigger"}),": Simuliere zus\xe4tzliche Bedingungen (z. B. Bus-Auslastung \xfcber 90 %)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dieses Skript bildet eine solide Grundlage f\xfcr Stresstests und kann je nach Systemanforderungen erweitert werden."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var i=r(6540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);