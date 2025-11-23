/**
 * PhotoHaul - Internationalization (i18n) System
 * Supports: English, Italiano, Español, Français, Deutsch, Русский
 * Auto-detects user language from browser with localStorage persistence
 */

const i18n = {
    en: {
        brandSub: "Free photo organizer for humans, not clouds.",
        langLabel: "Language",
        adsPlaceholder: "728x90 ad slot – connect your Google AdSense code here.",
        eyebrow: "Take back control of your memories.",
        heroTitleMain: "All your photos, finally not a mess.",
        heroSubtitle: "PhotoHaul is a free Windows app that grabs all your scattered photos from disks, phones and old backups and turns them into a clean, date-based archive with no duplicates and zero cloud dependency.",
        bullet1: "Automatic folders by date (year / month / day) so you can finally find your life again.",
        bullet2: "Smart duplicate detection: same photo, different place? It keeps one, you keep the space.",
        bullet3: "Works on your own hard disk. No tracking, no account, no \"AI on the cloud\".",
        downloadBtn: "Download PhotoHaul for Windows",
        downloadInstallerBtn: "Download Installer",
        downloadZipBtn: "Download ZIP",
        subtitleInstaller: "For those who love easy life",
        subtitleZip: "If you're a nerd club member",
        downloadMeta: "Windows 10 / 11 • No installer, no ads, no tracking. Just unzip and run.",
        avWarningTitle: "Antivirus Warning (False Positive)",
        avWarningIntro: "Your antivirus might block PhotoHaul and show a warning like this. Don't worry!",
        defenderTitle: "PC protected by Windows",
        defenderMsg: "Microsoft Defender SmartScreen prevented an unrecognized app from running. Running this app may put your PC at risk.",
        defenderMoreInfo: "More info",
        defenderAppLabel: "App:",
        defenderPublisherLabel: "Publisher:",
        defenderPublisherValue: "Unknown publisher",
        defenderAllow: "Run anyway",
        defenderDeny: "Don't run",
        avWhatTodo: "What to do:",
        avStep1: "Click on \"More info\" (as shown above)",
        avStep2: "Then click on \"Run anyway\"",
        avStep3: "PhotoHaul is tested, safe, and has no ads or tracking",
        avReassurance: "<strong>Why this warning?</strong> We don't pay for expensive code-signing certificates from big companies. This doesn't mean the app is dangerous - it just means \"this is new software not from a large corporation\". PhotoHaul is safe, tested, and contains no malware.",
        avConfirmBtn: "I understand, download now",
        badge1: "Free software philosophy friendly",
        badge2: "No spyware • No telemetry • Local only",
        badge3: "Tested on real messy disks™",
        heroCardTitle: "One folder for each day of your life.",
        heroCardChip: "Chaos → Archive mode",
        heroCardImageCaption: 'Before: "New folder (23) – backup_old_FINAL"<br>After: <strong>2020-08-15_Birthday</strong>',
        heroCardBody: "Point PhotoHaul to a disk or folder, press Start and watch the mess collapse into clean date-based folders. Your photos stay on your drives, where they belong.",
        heroCardFooterText: "Built by people who hate losing photos and love simple tools.",
        heroCardFooterChip: "No cloud. No login. No nonsense.",
        howItWorksBtn: "How it works",
        avTitle: "About antivirus warnings (read this)",
        avText1: "PhotoHaul is a small independent app. We don't pay for expensive code-signing certificates, so some antivirus tools might show a generic warning like \"unknown publisher\" or \"this file is rarely downloaded\".",
        avText2: "This does not mean the app is dangerous. It only means: \"This is new and not from a big company\". The executable is built clean, locally tested and does not connect anywhere except where you ask it to.",
        avList1: "No hidden installers, no browser toolbars, no miners.",
        avList2: "No automatic uploads to the cloud.",
        avList3: "You can always scan the file with multiple online scanners if you like.",
        howTitle: "How PhotoHaul works",
        howText1: "1. You choose one or more folders or drives where your photos are hiding: old backups, phone exports, \"Pictures\", external disks, etc.",
        howText2: "2. PhotoHaul reads the dates from the files (EXIF when possible, otherwise file date) and creates an organized tree like 2024\\2024-08\\2024-08-15\\.",
        howText3: "3. When it finds duplicates, it keeps only one copy (according to the rules you choose) so you don't waste space on clones of the same photo.",
        howText4: "4. At the end you get a clean archive you can put on a USB disk, NAS, or simply keep on your PC – ready for backup, viewing or sharing.",
        instructionsAlt: "Screenshot and basic instructions for using PhotoHaul",
        freedomTitle: "Why we care about free software and your freedom",
        freedomText1: "PhotoHaul is built around a simple idea: your photos are pieces of your life, not \"content\" to be harvested. We like the free software philosophy: small tools, understandable behavior, no dark patterns.",
        freedomText2: "That's why we don't lock you into an account, a subscription or a platform. The output is just normal folders and files. If one day you stop using PhotoHaul, your archive is still there, readable by any operating system, any viewer, any backup tool.",
        footerLeft: "© 2025 PhotoHaul – Built with too many photos and not enough patience.",
        footerRight: "No cloud. No ads inside the app. This page may show a banner to help keep the lights on."
    },

    it: {
        brandSub: "Organizzatore foto gratuito per esseri umani, non per cloud.",
        langLabel: "Lingua",
        adsPlaceholder: "Spazio 728x90 – qui collegherai il codice Google AdSense.",
        eyebrow: "Riprenditi il controllo dei tuoi ricordi.",
        heroTitleMain: "Tutte le tue foto, finalmente non in mezzo al caos.",
        heroSubtitle: "PhotoHaul è un'app gratuita per Windows che raccoglie tutte le foto sparse tra dischi, telefoni e vecchi backup e le trasforma in un archivio ordinato per data, senza doppioni e senza dipendere dal cloud.",
        bullet1: "Cartelle automatiche per data (anno / mese / giorno) così puoi ritrovare davvero i pezzi della tua vita.",
        bullet2: "Rilevamento intelligente dei duplicati: stessa foto in posti diversi? Ne tiene una, tu recuperi spazio.",
        bullet3: "Lavora sul tuo disco, a casa tua. Niente tracciamento, niente account, niente \"AI sul cloud\".",
        downloadBtn: "Scarica PhotoHaul per Windows",
        downloadInstallerBtn: "Scarica Installer",
        downloadZipBtn: "Scarica ZIP",
        subtitleInstaller: "Per chi ama la vita comoda",
        subtitleZip: "Se sei del club nerd",
        downloadMeta: "Windows 10 / 11 • Nessun installer, niente pubblicità, niente tracciamento. Solo unzip e avvio.",
        avWarningTitle: "Avvertenza Antivirus (Falso Positivo)",
        avWarningIntro: "Il tuo antivirus potrebbe bloccare PhotoHaul e mostrare un avvertimento come questo. Non preoccuparti!",
        defenderTitle: "PC protetto da Windows",
        defenderMsg: "Microsoft Defender SmartScreen ha impedito l'avvio di un'app non riconosciuta. L'esecuzione di tale app potrebbe costituire un rischio per il PC.",
        defenderMoreInfo: "Ulteriori informazioni",
        defenderAppLabel: "App:",
        defenderPublisherLabel: "Autore:",
        defenderPublisherValue: "Editore sconosciuto",
        defenderAllow: "Esegui comunque",
        defenderDeny: "Non eseguire",
        avWhatTodo: "Cosa fare:",
        avStep1: "Clicca su \"Ulteriori informazioni\" (come mostrato sopra)",
        avStep2: "Poi clicca su \"Esegui comunque\"",
        avStep3: "PhotoHaul è testato, sicuro e senza pubblicità o tracciamento",
        avReassurance: "<strong>Perché questo avviso?</strong> Non paghiamo costosi certificati di firma del codice delle grandi aziende. Questo non significa che l'app sia pericolosa - significa solo \"questo è un nuovo software non proveniente da una grande azienda\". PhotoHaul è sicuro, testato e non contiene malware.",
        avConfirmBtn: "Ho capito, scarica ora",
        badge1: "Vicino alla filosofia del software libero",
        badge2: "Niente spyware • Niente telemetria • Solo locale",
        badge3: "Testato su dischi davvero incasinati™",
        heroCardTitle: "Una cartella per ogni giorno della tua vita.",
        heroCardChip: "Caos → Archivio",
        heroCardImageCaption: 'Prima: "Nuova cartella (23) – backup_vecchio_FINALE"<br>Dopo: <strong>2020-08-15_Compleanno</strong>',
        heroCardBody: "Indichi a PhotoHaul un disco o una cartella, premi Start e guardi il casino trasformarsi in cartelle ordinate per data. Le foto restano sui tuoi dischi, dove devono stare.",
        heroCardFooterText: "Creato da chi odia perdere le foto e ama gli strumenti semplici.",
        heroCardFooterChip: "Niente cloud. Niente login. Niente menate.",
        howItWorksBtn: "Come funziona",
        avTitle: "A proposito degli avvisi dell'antivirus",
        avText1: "PhotoHaul è una piccola app indipendente. Non paghiamo certificati di firma del codice da centinaia di euro l'anno, quindi alcuni antivirus possono mostrare avvisi generici tipo \"autore sconosciuto\" o \"file scaricato raramente\".",
        avText2: "Questo <strong>non</strong> significa che l'app sia pericolosa. Vuol dire solo: \"Questo programma è nuovo e non arriva da una grande azienda\". L'eseguibile è pulito, testato in locale e non si collega da nessuna parte se non glielo chiedi tu.",
        avList1: "Nessun installer nascosto, nessuna toolbar, nessun miner.",
        avList2: "Nessun caricamento automatico sul cloud.",
        avList3: "Se vuoi, puoi sempre controllare il file con più scanner online.",
        howTitle: "Come funziona PhotoHaul",
        howText1: "1. Scegli una o più cartelle o dischi dove si nascondono le tue foto: vecchi backup, esportazioni dal telefono, \"Immagini\", dischi esterni, ecc.",
        howText2: "2. PhotoHaul legge le date dai file (EXIF quando possibile, altrimenti la data del file) e crea una struttura ordinata tipo 2024\\2024-08\\2024-08-15\\.",
        howText3: "3. Quando trova dei duplicati, ne mantiene una sola copia (secondo le regole che scegli tu) così non butti spazio in cloni della stessa foto.",
        howText4: "4. Alla fine hai un archivio pulito che puoi mettere su disco USB, NAS o tenere semplicemente sul PC, pronto per backup, visione o condivisione.",
        instructionsAlt: "Screenshot con istruzioni base per usare PhotoHaul",
        freedomTitle: "Perché ci interessa il software libero (e la tua libertà)",
        freedomText1: "PhotoHaul nasce da un'idea semplice: le tue foto sono pezzi della tua vita, non \"contenuti\" da spremere. Ci piace la filosofia del software libero: strumenti piccoli, comportamento chiaro, niente trucchetti nascosti.",
        freedomText2: "Per questo non ti blocchiamo in account, abbonamenti o piattaforme chiuse. L'uscita è fatta di semplici cartelle e file normali. Anche se un giorno smetti di usare PhotoHaul, il tuo archivio resta lì, leggibile da qualsiasi sistema operativo, visualizzatore o programma di backup.",
        footerLeft: "© 2025 PhotoHaul – Creato con troppe foto e poca pazienza.",
        footerRight: "Niente cloud. Nessuna pubblicità dentro l'app. Qui sulla pagina può esserci un banner per pagare la corrente."
    },

    es: {
        brandSub: "Organizador de fotos gratuito para personas, no para nubes.",
        langLabel: "Idioma",
        adsPlaceholder: "Espacio 728x90 – aquí conectarás tu código de Google AdSense.",
        eyebrow: "Recupera el control de tus recuerdos.",
        heroTitleMain: "Todas tus fotos, por fin sin caos.",
        heroSubtitle: "PhotoHaul es una app gratuita para Windows que recoge todas tus fotos dispersas entre discos, móviles y viejas copias de seguridad y las convierte en un archivo ordenado por fecha, sin duplicados y sin depender de la nube.",
        bullet1: "Carpetas automáticas por fecha (año / mes / día) para que vuelvas a encontrar tu vida.",
        bullet2: "Detección inteligente de duplicados: ¿misma foto en sitios distintos? Conserva una, tú recuperas espacio.",
        bullet3: "Funciona en tu propio disco. Sin rastreo, sin cuenta, sin \"IA en la nube\".",
        downloadBtn: "Descargar PhotoHaul para Windows",
        downloadInstallerBtn: "Descargar Instalador",
        downloadZipBtn: "Descargar ZIP",
        subtitleInstaller: "Para quienes aman la vida fácil",
        subtitleZip: "Si eres del club nerd",
        downloadMeta: "Windows 10 / 11 • Sin instalador, sin anuncios, sin rastreo. Solo descomprimir y ejecutar.",
        avWarningTitle: "Advertencia de Antivirus (Falso Positivo)",
        avWarningIntro: "Tu antivirus podría bloquear PhotoHaul y mostrar una advertencia como esta. ¡No te preocupes!",
        defenderTitle: "PC protegido por Windows",
        defenderMsg: "Microsoft Defender SmartScreen impidió que se ejecutara una aplicación no reconocida. La ejecución de esta aplicación podría poner en riesgo tu PC.",
        defenderMoreInfo: "Más información",
        defenderAppLabel: "App:",
        defenderPublisherLabel: "Editor:",
        defenderPublisherValue: "Editor desconocido",
        defenderAllow: "Ejecutar de todos modos",
        defenderDeny: "No ejecutar",
        avWhatTodo: "Qué hacer:",
        avStep1: "Haz clic en \"Más información\" (como se muestra arriba)",
        avStep2: "Luego haz clic en \"Ejecutar de todos modos\"",
        avStep3: "PhotoHaul está probado, es seguro y no tiene anuncios ni rastreo",
        avReassurance: "<strong>¿Por qué esta advertencia?</strong> No pagamos costosos certificados de firma de código de grandes empresas. Esto no significa que la app sea peligrosa - solo significa \"este es un software nuevo que no proviene de una gran corporación\". PhotoHaul es seguro, probado y no contiene malware.",
        avConfirmBtn: "Entiendo, descargar ahora",
        badge1: "Amigo de la filosofía del software libre",
        badge2: "Sin spyware • Sin telemetría • Solo local",
        badge3: "Probado en discos realmente caóticos™",
        heroCardTitle: "Una carpeta para cada día de tu vida.",
        heroCardChip: "Caos → Archivo",
        heroCardImageCaption: 'Antes: "Nueva carpeta (23) – backup_viejo_FINAL"<br>Después: <strong>2020-08-15_Cumpleaños</strong>',
        heroCardBody: "Señala a PhotoHaul un disco o una carpeta, pulsa Start y mira cómo el caos se convierte en carpetas ordenadas por fecha. Tus fotos se quedan en tus discos, donde deben estar.",
        heroCardFooterText: "Creado por gente que odia perder fotos y ama las herramientas sencillas.",
        heroCardFooterChip: "Sin nube. Sin login. Sin tonterías.",
        howItWorksBtn: "Cómo funciona",
        avTitle: "Sobre las alertas del antivirus",
        avText1: "PhotoHaul es una app independiente pequeña. No pagamos certificados de firma de código caros, así que algunos antivirus pueden mostrar avisos genéricos como \"editor desconocido\" o \"archivo descargado pocas veces\".",
        avText2: "Esto no significa que la app sea peligrosa. Solo significa: \"Este programa es nuevo y no viene de una gran empresa\". El ejecutable es limpio, probado en local y no se conecta a ningún sitio si tú no se lo pides.",
        avList1: "Sin instaladores ocultos, sin barras de navegador, sin mineros.",
        avList2: "Sin subidas automáticas a la nube.",
        avList3: "Si quieres, puedes siempre analizar el archivo con varios escáneres online.",
        howTitle: "Cómo funciona PhotoHaul",
        howText1: "1. Eliges una o varias carpetas o discos donde se esconden tus fotos: viejas copias, exportaciones del móvil, \"Imágenes\", discos externos, etc.",
        howText2: "2. PhotoHaul lee las fechas de los archivos (EXIF cuando puede, si no la fecha del archivo) y crea una estructura ordenada como 2024\\2024-08\\2024-08-15\\.",
        howText3: "3. Cuando encuentra duplicados, conserva solo una copia (según las reglas que elijas) para no malgastar espacio.",
        howText4: "4. Al final obtienes un archivo limpio que puedes guardar en un USB, NAS o en tu PC, listo para copias de seguridad, ver o compartir.",
        instructionsAlt: "Captura de pantalla con instrucciones básicas para usar PhotoHaul",
        freedomTitle: "Por qué nos importa el software libre (y tu libertad)",
        freedomText1: "PhotoHaul nace de una idea simple: tus fotos son trozos de tu vida, no \"contenido\" para exprimir. Nos gusta la filosofía del software libre: herramientas pequeñas, comportamiento claro, sin trucos oscuros.",
        freedomText2: "Por eso no te atamos a una cuenta, suscripción o plataforma. La salida son carpetas y archivos normales. Aunque un día dejes de usar PhotoHaul, tu archivo seguirá ahí, legible por cualquier sistema, visor o herramienta de copia.",
        footerLeft: "© 2025 PhotoHaul – Creado con demasiadas fotos y poca paciencia.",
        footerRight: "Sin nube. Sin anuncios dentro de la app. En esta página puede haber un banner para pagar la luz."
    },

    fr: {
        brandSub: "Organiseur de photos gratuit pour les humains, pas pour le cloud.",
        langLabel: "Langue",
        adsPlaceholder: "Emplacement 728x90 – connectez ici votre code Google AdSense.",
        eyebrow: "Reprenez le contrôle de vos souvenirs.",
        heroTitleMain: "Toutes vos photos, enfin sans bazar.",
        heroSubtitle: "PhotoHaul est une application Windows gratuite qui récupère toutes vos photos éparpillées entre disques, smartphones et anciennes sauvegardes et les transforme en archive ordonnée par date, sans doublons et sans dépendre du cloud.",
        bullet1: "Dossiers automatiques par date (année / mois / jour) pour enfin retrouver votre vie.",
        bullet2: "Détection intelligente des doublons : même photo à plusieurs endroits ? Il en garde une, vous gagnez de la place.",
        bullet3: "Fonctionne sur votre propre disque. Pas de pistage, pas de compte, pas d'\"IA dans le cloud\".",
        downloadBtn: "Télécharger PhotoHaul pour Windows",
        downloadInstallerBtn: "Télécharger Installateur",
        downloadZipBtn: "Télécharger ZIP",
        subtitleInstaller: "Pour ceux qui aiment la vie facile",
        subtitleZip: "Si vous êtes du club nerd",
        downloadMeta: "Windows 10 / 11 • Pas d'installateur, pas de pub, pas de pistage. Juste dézipper et lancer.",
        avWarningTitle: "Avertissement Antivirus (Faux Positif)",
        avWarningIntro: "Votre antivirus pourrait bloquer PhotoHaul et afficher un avertissement comme celui-ci. Ne vous inquiétez pas !",
        defenderTitle: "PC protégé par Windows",
        defenderMsg: "Microsoft Defender SmartScreen a empêché le démarrage d'une application non reconnue. L'exécution de cette application peut mettre votre PC en danger.",
        defenderMoreInfo: "Informations complémentaires",
        defenderAppLabel: "Application :",
        defenderPublisherLabel: "Éditeur :",
        defenderPublisherValue: "Éditeur inconnu",
        defenderAllow: "Exécuter quand même",
        defenderDeny: "Ne pas exécuter",
        avWhatTodo: "Que faire :",
        avStep1: "Cliquez sur \"Informations complémentaires\" (comme montré ci-dessus)",
        avStep2: "Puis cliquez sur \"Exécuter quand même\"",
        avStep3: "PhotoHaul est testé, sûr et sans publicités ni pistage",
        avReassurance: "<strong>Pourquoi cet avertissement ?</strong> Nous ne payons pas de coûteux certificats de signature de code des grandes entreprises. Cela ne signifie pas que l'application est dangereuse - cela signifie simplement \"c'est un nouveau logiciel qui ne provient pas d'une grande entreprise\". PhotoHaul est sûr, testé et ne contient pas de malware.",
        avConfirmBtn: "J'ai compris, télécharger maintenant",
        badge1: "Proche de la philosophie du logiciel libre",
        badge2: "Pas de spyware • Pas de télémétrie • Local uniquement",
        badge3: "Testé sur des disques vraiment chaotiques™",
        heroCardTitle: "Un dossier pour chaque jour de votre vie.",
        heroCardChip: "Chaos → Archive",
        heroCardImageCaption: 'Avant : "Nouveau dossier (23) – backup_vieux_FINAL"<br>Après : <strong>2020-08-15_Anniversaire</strong>',
        heroCardBody: "Vous indiquez à PhotoHaul un disque ou un dossier, vous cliquez sur Start et vous regardez le bazar se transformer en dossiers par date. Vos photos restent sur vos disques, là où elles doivent être.",
        heroCardFooterText: "Créé par des gens qui détestent perdre des photos et aiment les outils simples.",
        heroCardFooterChip: "Pas de cloud. Pas de login. Pas de blabla.",
        howItWorksBtn: "Comment ça marche",
        avTitle: "À propos des alertes antivirus",
        avText1: "PhotoHaul est une petite application indépendante. Nous ne payons pas de certificats de signature de code coûteux, donc certains antivirus peuvent afficher des messages génériques comme \"éditeur inconnu\" ou \"fichier peu téléchargé\".",
        avText2: "Cela ne signifie pas que l'application est dangereuse. Cela signifie seulement : \"Ce programme est nouveau et ne vient pas d'un grand éditeur\". L'exécutable est propre, testé en local et ne se connecte nulle part sans votre consentement.",
        avList1: "Pas d'installateurs cachés, pas de barres d'outils, pas de mineurs.",
        avList2: "Pas d'envoi automatique vers le cloud.",
        avList3: "Vous pouvez toujours analyser le fichier avec plusieurs scanners en ligne si vous le souhaitez.",
        howTitle: "Comment fonctionne PhotoHaul",
        howText1: "1. Vous choisissez un ou plusieurs dossiers ou disques où vos photos se cachent : anciennes sauvegardes, exports de téléphone, \"Images\", disques externes, etc.",
        howText2: "2. PhotoHaul lit les dates des fichiers (EXIF si possible, sinon la date du fichier) et crée une structure ordonnée comme 2024\\2024-08\\2024-08-15\\.",
        howText3: "3. Quand il trouve des doublons, il ne garde qu'une copie (selon les règles choisies) pour ne pas gaspiller de place.",
        howText4: "4. Au final, vous obtenez une archive propre que vous pouvez mettre sur une clé USB, un NAS ou garder sur votre PC, prête pour la sauvegarde, l'affichage ou le partage.",
        instructionsAlt: "Capture d'écran avec instructions de base pour utiliser PhotoHaul",
        freedomTitle: "Pourquoi le logiciel libre (et votre liberté) comptent pour nous",
        freedomText1: "PhotoHaul part d'une idée simple : vos photos sont des morceaux de votre vie, pas du \"contenu\" à exploiter. Nous aimons la philosophie du logiciel libre : petits outils, comportement compréhensible, pas de pièges.",
        freedomText2: "C'est pourquoi nous ne vous enfermons pas dans un compte, un abonnement ou une plateforme fermée. La sortie, ce sont des dossiers et fichiers normaux. Même si un jour vous arrêtez d'utiliser PhotoHaul, votre archive reste lisible par n'importe quel système, visionneuse ou outil de sauvegarde.",
        footerLeft: "© 2025 PhotoHaul – Créé avec trop de photos et peu de patience.",
        footerRight: "Pas de cloud. Pas de pub dans l'app. Cette page peut afficher une bannière pour payer l'électricité."
    },

    de: {
        brandSub: "Kostenloser Foto-Organizer für Menschen, nicht für Clouds.",
        langLabel: "Sprache",
        adsPlaceholder: "728x90-Anzeige – hier später Ihren Google-AdSense-Code einfügen.",
        eyebrow: "Hol dir die Kontrolle über deine Erinnerungen zurück.",
        heroTitleMain: "Alle deine Fotos – endlich kein Chaos mehr.",
        heroSubtitle: "PhotoHaul ist eine kostenlose Windows-App, die alle verstreuten Fotos von Festplatten, Handys und alten Backups einsammelt und in ein sauberes, datumsbasiertes Archiv ohne Duplikate verwandelt – ganz ohne Cloud.",
        bullet1: "Automatische Ordner nach Datum (Jahr / Monat / Tag), damit du dein Leben wiederfindest.",
        bullet2: "Intelligente Duplikaterkennung: dasselbe Foto an mehreren Orten? Eins bleibt, der Rest räumt Platz frei.",
        bullet3: "Läuft auf deiner eigenen Festplatte. Kein Tracking, kein Konto, keine \"KI in der Cloud\".",
        downloadBtn: "PhotoHaul für Windows herunterladen",
        downloadInstallerBtn: "Installer herunterladen",
        downloadZipBtn: "ZIP herunterladen",
        subtitleInstaller: "Für alle, die es bequem mögen",
        subtitleZip: "Wenn du zum Nerd-Club gehörst",
        downloadMeta: "Windows 10 / 11 • Kein Installer, keine Werbung, kein Tracking. Einfach entpacken und starten.",
        avWarningTitle: "Antivirus-Warnung (Fehlalarm)",
        avWarningIntro: "Dein Antivirus könnte PhotoHaul blockieren und eine Warnung wie diese anzeigen. Keine Sorge!",
        defenderTitle: "PC von Windows geschützt",
        defenderMsg: "Der Microsoft Defender SmartScreen hat den Start einer unbekannten App verhindert. Das Ausführen dieser App kann ein Risiko für Ihren PC darstellen.",
        defenderMoreInfo: "Weitere Informationen",
        defenderAppLabel: "App:",
        defenderPublisherLabel: "Herausgeber:",
        defenderPublisherValue: "Unbekannter Herausgeber",
        defenderAllow: "Trotzdem ausführen",
        defenderDeny: "Nicht ausführen",
        avWhatTodo: "Was ist zu tun:",
        avStep1: "Klicke auf \"Weitere Informationen\" (wie oben gezeigt)",
        avStep2: "Dann klicke auf \"Trotzdem ausführen\"",
        avStep3: "PhotoHaul ist getestet, sicher und ohne Werbung oder Tracking",
        avReassurance: "<strong>Warum diese Warnung?</strong> Wir bezahlen keine teuren Code-Signing-Zertifikate von großen Unternehmen. Das bedeutet nicht, dass die App gefährlich ist - es bedeutet nur \"dies ist neue Software, die nicht von einem großen Konzern stammt\". PhotoHaul ist sicher, getestet und enthält keine Malware.",
        avConfirmBtn: "Ich verstehe, jetzt herunterladen",
        badge1: "Nah an der freien-Software-Philosophie",
        badge2: "Kein Spyware • Keine Telemetrie • Nur lokal",
        badge3: "Getestet auf wirklich chaotischen Festplatten™",
        heroCardTitle: "Ein Ordner für jeden Tag deines Lebens.",
        heroCardChip: "Chaos → Archiv",
        heroCardImageCaption: 'Vorher: „Neuer Ordner (23) – backup_alt_FINAL"<br>Nachher: <strong>2020-08-15_Geburtstag</strong>',
        heroCardBody: "Du zeigst PhotoHaul ein Laufwerk oder einen Ordner, klickst Start und siehst zu, wie das Chaos sich in datumsbasierte Ordner sortiert. Deine Fotos bleiben auf deinen Datenträgern.",
        heroCardFooterText: "Erstellt von Leuten, die es hassen, Fotos zu verlieren, und einfache Tools lieben.",
        heroCardFooterChip: "Keine Cloud. Kein Login. Kein Bullshit.",
        howItWorksBtn: "So funktioniert's",
        avTitle: "Hinweis zu Antivirus-Warnungen",
        avText1: "PhotoHaul ist eine kleine unabhängige App. Wir bezahlen keine teuren Code-Signing-Zertifikate, daher zeigen manche Virenscanner allgemeine Meldungen wie \"unbekannter Herausgeber\" oder \"selten heruntergeladene Datei\".",
        avText2: "Das bedeutet <strong>nicht</strong>, dass die App gefährlich ist. Es bedeutet nur: \"Dieses Programm ist neu und kommt nicht von einem großen Konzern.\" Die EXE ist sauber, lokal getestet und verbindet sich nirgendwohin, außer wenn du es ausdrücklich willst.",
        avList1: "Keine versteckten Installer, keine Toolbars, keine Miner.",
        avList2: "Keine automatischen Uploads in die Cloud.",
        avList3: "Du kannst die Datei jederzeit mit mehreren Online-Scannern prüfen.",
        howTitle: "Wie PhotoHaul arbeitet",
        howText1: "1. Du wählst einen oder mehrere Ordner bzw. Datenträger aus, auf denen deine Fotos liegen: alte Backups, Handy-Exporte, \"Bilder\", externe Festplatten usw.",
        howText2: "2. PhotoHaul liest die Daten aus den Dateien (wenn möglich EXIF, sonst Dateidatum) und erstellt eine Struktur wie 2024\\2024-08\\2024-08-15\\.",
        howText3: "3. Findet es Duplikate, bleibt eine Kopie (nach deinen Regeln), damit kein Speicher für Klone derselben Fotos draufgeht.",
        howText4: "4. Am Ende hast du ein sauberes Archiv, das du auf USB-Platte, NAS oder einfach auf dem PC behalten kannst – bereit für Backups, Anzeige oder Teilen.",
        instructionsAlt: "Screenshot mit Grundanleitung zur Nutzung von PhotoHaul",
        freedomTitle: "Warum uns freie Software (und deine Freiheit) wichtig ist",
        freedomText1: "PhotoHaul basiert auf einer einfachen Idee: Deine Fotos sind Teile deines Lebens, kein \"Content\" zum Ausschlachten. Wir mögen die freie-Software-Philosophie: kleine Tools, durchschaubares Verhalten, keine dunklen Tricks.",
        freedomText2: "Deshalb sperren wir dich nicht in ein Konto, ein Abo oder eine Plattform ein. Das Ergebnis sind normale Ordner und Dateien. Selbst wenn du PhotoHaul irgendwann nicht mehr nutzt, bleibt dein Archiv lesbar – auf jedem System, in jedem Viewer, mit jedem Backup-Tool.",
        footerLeft: "© 2025 PhotoHaul – Entstanden aus zu vielen Fotos und zu wenig Geduld.",
        footerRight: "Keine Cloud. Keine Werbung in der App. Auf dieser Seite kann ein Banner helfen, den Strom zu bezahlen."
    },

    ru: {
        brandSub: "Бесплатный органайзер фото для людей, не для облаков.",
        langLabel: "Язык",
        adsPlaceholder: "Место 728x90 – подключите свой код Google AdSense здесь.",
        eyebrow: "Вернись под контроль своих воспоминаний.",
        heroTitleMain: "Все твои фото, наконец, в порядке.",
        heroSubtitle: "PhotoHaul — это бесплатное приложение для Windows, которое собирает все твои фото с диска, телефона и старых резервных копий и превращает их в чистый архив, отсортированный по датам, без дубликатов и без зависимости от облака.",
        bullet1: "Автоматические папки по датам (год / месяц / день), чтобы ты наконец снова нашёл свою жизнь.",
        bullet2: "Умное обнаружение дубликатов: одно и то же фото в разных местах? Она сохранит одну копию, ты освободишь место.",
        bullet3: "Работает на твоём жёстком диске. Никакого отслеживания, никаких аккаунтов, никакого \"AI в облаке\".",
        downloadBtn: "Скачать PhotoHaul для Windows",
        downloadInstallerBtn: "Скачать установщик",
        downloadZipBtn: "Скачать ZIP",
        subtitleInstaller: "Для тех, кто любит простую жизнь",
        subtitleZip: "Если ты из клуба нердов",
        downloadMeta: "Windows 10 / 11 • Без установщика, без рекламы, без отслеживания. Просто распакуй и запусти.",
        avWarningTitle: "Предупреждение антивируса (ложное срабатывание)",
        avWarningIntro: "Твой антивирус может заблокировать PhotoHaul и показать предупреждение вроде этого. Не волнуйся!",
        defenderTitle: "Компьютер защищён Windows",
        defenderMsg: "Фильтр SmartScreen в Microsoft Defender предотвратил запуск неопознанного приложения. Запуск этого приложения может подвергнуть компьютер риску.",
        defenderMoreInfo: "Подробнее",
        defenderAppLabel: "Приложение:",
        defenderPublisherLabel: "Издатель:",
        defenderPublisherValue: "Неизвестный издатель",
        defenderAllow: "Выполнить в любом случае",
        defenderDeny: "Не выполнять",
        avWhatTodo: "Что делать:",
        avStep1: "Нажми \"Подробнее\" (как показано выше)",
        avStep2: "Затем нажми \"Выполнить в любом случае\"",
        avStep3: "PhotoHaul протестирован, безопасен и не содержит рекламы или отслеживания",
        avReassurance: "<strong>Почему это предупреждение?</strong> Мы не платим за дорогие сертификаты подписи кода от крупных компаний. Это не означает, что приложение опасно - это означает лишь \"это новое программное обеспечение не от крупной корпорации\". PhotoHaul безопасен, протестирован и не содержит вредоносного ПО.",
        avConfirmBtn: "Я понял, скачать сейчас",
        badge1: "Дружественна философии свободного ПО",
        badge2: "Без шпионского ПО • Без телеметрии • Только локально",
        badge3: "Протестирована на действительно хаотичных дисках™",
        heroCardTitle: "Одна папка на каждый день твоей жизни.",
        heroCardChip: "Хаос → Архив",
        heroCardImageCaption: 'Было: "Новая папка (23) – backup_old_FINAL"<br>Стало: <strong>2020-08-15_ДеньРождения</strong>',
        heroCardBody: "Ты указываешь PhotoHaul на диск или папку, нажимаешь \"Старт\" и смотришь, как хаос превращается в аккуратные папки по датам. Твои фото остаются на твоих дисках, где им и место.",
        heroCardFooterText: "Создано людьми, которые ненавидят терять фото и любят простые инструменты.",
        heroCardFooterChip: "Никакого облака. Никакого логина. Никакой чепухи.",
        howItWorksBtn: "Как это работает",
        avTitle: "Об антивирусных предупреждениях (прочитай это)",
        avText1: "PhotoHaul — это маленькое независимое приложение. Мы не платим за дорогие сертификаты подписи кода, поэтому некоторые антивирусы могут показать общее предупреждение типа \"неизвестный издатель\" или \"редко скачиваемый файл\".",
        avText2: "Это <strong>не</strong> означает, что приложение опасно. Это только означает: \"Это новая программа, не от крупной компании\". Исполняемый файл чистый, протестирован локально и не подключается никуда, кроме как по твоей команде.",
        avList1: "Нет скрытых установщиков, нет панелей инструментов, нет майнеров.",
        avList2: "Нет автоматической загрузки в облако.",
        avList3: "Ты всегда можешь проверить файл несколькими онлайн-сканерами, если хочешь.",
        howTitle: "Как работает PhotoHaul",
        howText1: "1. Ты выбираешь одну или несколько папок или дисков, где прячутся твои фото: старые резервные копии, экспорты с телефона, папка \"Изображения\", внешние диски и т.д.",
        howText2: "2. PhotoHaul читает даты из файлов (EXIF, если возможно, иначе дату файла) и создаёт упорядоченную структуру вроде 2024\\2024-08\\2024-08-15\\.",
        howText3: "3. Когда находит дубликаты, оставляет только одну копию (по выбранным правилам), чтобы ты не тратил место на клоны одного фото.",
        howText4: "4. В конце ты получаешь чистый архив, который можешь положить на USB-диск, NAS или просто оставить на ПК — готовый для резервной копии, просмотра или обмена.",
        instructionsAlt: "Скриншот с базовыми инструкциями по использованию PhotoHaul",
        freedomTitle: "Почему для нас важны свободное ПО и твоя свобода",
        freedomText1: "PhotoHaul создана на простой идее: твои фото — это кусочки твоей жизни, не \"контент\" для эксплуатации. Нам нравится философия свободного ПО: маленькие инструменты, понятное поведение, никаких тёмных паттернов.",
        freedomText2: "Вот почему мы не запираем тебя в аккаунт, подписку или платформу. Результат — это просто обычные папки и файлы. Даже если ты когда-нибудь перестанешь использовать PhotoHaul, твой архив останется там, читаемый любой ОС, любым просмотрщиком, любым инструментом резервного копирования.",
        footerLeft: "© 2025 PhotoHaul – Создано со слишком большим количеством фото и недостатком терпения.",
        footerRight: "Никакого облака. Никакой рекламы внутри приложения. На этой странице может быть баннер, чтобы помочь оплатить электричество."
    }
};

/**
 * Applica le traduzioni agli elementi DOM per una lingua specifica
 */
function applyTranslations(lang) {
    const t = i18n[lang] || i18n.en;

    const set = (id, html) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = html;
        }
    };

    // Applica tutte le traduzioni
    set("brand-sub", t.brandSub);
    set("lang-label", t.langLabel);
    set("ads-placeholder", t.adsPlaceholder);
    set("eyebrow-text", t.eyebrow);
    set("hero-title-main", t.heroTitleMain);
    set("hero-subtitle", t.heroSubtitle);
    set("bullet-1", t.bullet1);
    set("bullet-2", t.bullet2);
    set("bullet-3", t.bullet3);
    set("download-installer-text", t.downloadInstallerBtn);
    set("download-zip-text", t.downloadZipBtn);
    set("subtitle-installer", t.subtitleInstaller);
    set("subtitle-zip", t.subtitleZip);
    set("download-meta", t.downloadMeta);
    set("badge-1", t.badge1);
    set("badge-2", t.badge2);
    set("badge-3", t.badge3);
    set("how-it-works-btn", t.howItWorksBtn);
    set("av-title", t.avTitle);
    set("av-text-1", t.avText1);
    set("av-text-2", t.avText2);
    
    // Antivirus modal translations
    set("antivirus-title", t.avWarningTitle);
    set("antivirus-intro", t.avWarningIntro);
    set("antivirus-what-todo", t.avWhatTodo);
    set("antivirus-confirm-text", t.avConfirmBtn);

    // Defender simulation translations - Step 1
    set("defender-title-1", t.defenderTitle);
    set("defender-msg-1", t.defenderMsg);
    set("defender-more-info", t.defenderMoreInfo);
    set("defender-deny-1", t.defenderDeny);

    // Defender simulation translations - Step 2
    set("defender-title-2", t.defenderTitle);
    set("defender-msg-2", t.defenderMsg);
    set("defender-app-label", t.defenderAppLabel);
    set("defender-publisher-label", t.defenderPublisherLabel);
    set("defender-publisher-value", t.defenderPublisherValue);
    set("defender-allow", t.defenderAllow);
    set("defender-deny-2", t.defenderDeny);

    // Antivirus steps
    const stepsList = document.getElementById("antivirus-steps");
    if (stepsList) {
        stepsList.innerHTML = `
            <li id="antivirus-step-1">${t.avStep1}</li>
            <li id="antivirus-step-2">${t.avStep2}</li>
            <li id="antivirus-step-3">${t.avStep3}</li>
        `;
    }

    // Reassurance message
    set("antivirus-reassurance-text", t.avReassurance);

    set("av-list", `
        <li>${t.avList1}</li>
        <li>${t.avList2}</li>
        <li>${t.avList3}</li>
    `);

    set("how-it-works-title", t.howTitle);
    set("how-it-works-text-1", t.howText1);
    set("how-it-works-text-2", t.howText2);
    set("how-it-works-text-3", t.howText3);
    set("how-it-works-text-4", t.howText4);

    const img = document.getElementById("instructions-img-alt");
    if (img) {
        img.alt = t.instructionsAlt;
    }

    set("freedom-title", t.freedomTitle);
    set("freedom-text-1", t.freedomText1);
    set("freedom-text-2", t.freedomText2);
    set("footer-left", t.footerLeft);
    set("footer-right", t.footerRight);
}

/**
 * Rileva la lingua dal browser
 */
function detectLanguage() {
    const nav = navigator.language || navigator.userLanguage || "en";
    const short = nav.slice(0, 2).toLowerCase();
    return i18n[short] ? short : "en";
}

/**
 * Inizializza il sistema di lingue con localStorage
 */
function initLanguage() {
    const select = document.getElementById("lang-select");
    
    if (!select) {
        console.error("Select element not found!");
        return;
    }

    // Controlla localStorage per lingua salvata
    let saved = localStorage.getItem("photohaul-language");
    let current;

    if (saved && saved !== "auto") {
        // Usa la lingua salvata
        current = saved;
        select.value = saved;
    } else {
        // Auto-detect
        current = detectLanguage();
        select.value = "auto";
    }

    // Applica traduzioni iniziali
    applyTranslations(current);

    // Event listener per cambio lingua
    select.addEventListener("change", function() {
        const newLang = this.value;
        
        if (newLang === "auto") {
            current = detectLanguage();
            localStorage.setItem("photohaul-language", "auto");
        } else {
            current = newLang;
            localStorage.setItem("photohaul-language", newLang);
        }
        
        // Applica le nuove traduzioni
        applyTranslations(current);
    });
}

/**
 * Scroll to instructions section
 */
function scrollToInstructions() {
    const section = document.getElementById("instructions-section");
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * ANTIVIRUS MODAL - Gestione con animazione step
 */
let currentDownloadType = null;
let defenderAnimationInterval = null;

function openAntvirusModal(type) {
    currentDownloadType = type;
    const modal = document.getElementById("antivirus-modal");
    if (modal) {
        modal.classList.add("active");
        startDefenderAnimation();
    }
}

function closeAntvirusModal() {
    const modal = document.getElementById("antivirus-modal");
    if (modal) {
        modal.classList.remove("active");
    }
    currentDownloadType = null;
    stopDefenderAnimation();
}

function startDefenderAnimation() {
    const step1 = document.getElementById("defender-step-1");
    const step2 = document.getElementById("defender-step-2");

    if (!step1 || !step2) return;

    // Reset to step 1
    step1.classList.add("active");
    step2.classList.remove("active");

    let currentStep = 1;

    // Alternate between steps every 4 seconds
    defenderAnimationInterval = setInterval(() => {
        if (currentStep === 1) {
            step1.classList.remove("active");
            step2.classList.add("active");
            currentStep = 2;
        } else {
            step2.classList.remove("active");
            step1.classList.add("active");
            currentStep = 1;
        }
    }, 4000);
}

function stopDefenderAnimation() {
    if (defenderAnimationInterval) {
        clearInterval(defenderAnimationInterval);
        defenderAnimationInterval = null;
    }

    // Reset to step 1
    const step1 = document.getElementById("defender-step-1");
    const step2 = document.getElementById("defender-step-2");
    if (step1) step1.classList.add("active");
    if (step2) step2.classList.remove("active");
}

function confirmDownload() {
    if (currentDownloadType === "installer") {
        // Download installer da GitHub
        window.location.href = "https://github.com/ColacioppoGennaro/photohaul/releases/download/v1.0.0/PhotoHaul_Setup_v1.0.0.exe";
    } else if (currentDownloadType === "zip") {
        // ZIP non ancora disponibile
        alert("ZIP version coming soon!");
        closeAntvirusModal();
    }
}

/**
 * CAROSELLO - Variabili globali
 */
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carousel-img");
const dots = document.querySelectorAll(".dot");

/**
 * Mostra una slide specifica
 */
function showSlide(index) {
    if (slides.length === 0) return;

    // Assicura che l'indice sia valido
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Nascondi tutte le slide
    slides.forEach(slide => slide.classList.remove("active"));
    
    // Rimuovi classe active da tutti i dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Mostra la slide corrente
    slides[currentSlideIndex].classList.add("active");
    
    // Evidenzia il dot corrispondente
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add("active");
    }
}

/**
 * Vai alla slide successiva
 */
function carouselNext() {
    showSlide(currentSlideIndex + 1);
}

/**
 * Vai alla slide precedente
 */
function carouselPrev() {
    showSlide(currentSlideIndex - 1);
}

/**
 * Vai a una slide specifica (dal click sui dots)
 */
function currentSlide(index) {
    showSlide(index);
}

/**
 * Gestisce il lightbox/zoom dell'immagine
 */
function initLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox-close");
    const zoomableImgs = document.querySelectorAll(".zoomable-img");

    if (!modal || zoomableImgs.length === 0) return;

    // Click sull'immagine per aprire il lightbox
    zoomableImgs.forEach(img => {
        img.addEventListener("click", function() {
            modal.classList.add("active");
            lightboxImage.src = this.src;
        });
    });

    // Click su X per chiudere
    closeBtn.addEventListener("click", function() {
        modal.classList.remove("active");
    });

    // Click fuori dall'immagine per chiudere
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });

    // Tasto ESC per chiudere
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
        }
    });
}

/**
 * Hero image modal functions
 */
function openHeroImageModal() {
    const modal = document.getElementById("hero-image-modal");
    const modalImg = document.getElementById("hero-image-modal-img");
    const heroImg = document.getElementById("hero-preview-img");

    if (modal && modalImg && heroImg) {
        modalImg.src = heroImg.src;
        modal.classList.add("active");
    }
}

function closeHeroImageModal() {
    const modal = document.getElementById("hero-image-modal");
    if (modal) {
        modal.classList.remove("active");
    }
}

// Close hero image modal on ESC or click outside
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeHeroImageModal();
    }
});

document.addEventListener("click", function(event) {
    const modal = document.getElementById("hero-image-modal");
    if (event.target === modal) {
        closeHeroImageModal();
    }
});

/**
 * Inizializza il carosello
 */
function initCarousel() {
    if (slides.length > 0) {
        showSlide(0);
    }
}

// Chiudi modale antivirus al click fuori
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("antivirus-modal");
    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                closeAntvirusModal();
            }
        });
    }
});

// Inizializza quando DOM è pronto
document.addEventListener("DOMContentLoaded", function() {
    initLanguage();
    initCarousel();
    initLightbox();
    initHamsterBanner();
});