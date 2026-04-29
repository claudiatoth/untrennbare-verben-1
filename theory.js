// ============================================
// TEORIE - UNTRENNBARE VERBEN (TEIL 1)
// Claudia Toth · Nivel B1 · Prefixele be-, emp-, ent-, er-, ge-, miss-, ver-, zer-
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Ce sunt verbele neseparabile? + 4 reguli-cheie</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Definiție</h4>
                <p><strong>Untrennbare Verben</strong> (verbele neseparabile) sunt verbe formate din <strong>prefix + verb de bază</strong>, unde prefixul <strong style="color: #059669;">NU se separă niciodată</strong> de verb — rămâne lipit de el indiferent dacă verbul e la Präsens, Präteritum, Perfekt sau Infinitiv cu „zu".</p>
                <p style="margin-top: 10px;">Sunt opusul verbelor separabile pe care le-ai învățat în lecțiile 1 și 2.</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>besuchen</strong> (a vizita) → Ich <strong>besuche</strong> meine Oma.</p>
                <p class="ro">O vizitez pe bunica.</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>verstehen</strong> (a înțelege) → Er <strong>versteht</strong> die Frage nicht.</p>
                <p class="ro">El nu înțelege întrebarea.</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>erklären</strong> (a explica) → Sie hat mir alles <strong>erklärt</strong>.</p>
                <p class="ro">Ea îmi explicase tot.</p>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>🔑 4 reguli-cheie</h4>
                <ol>
                    <li><strong>Prefixul NU se separă niciodată</strong> — la nicio formă verbală: „Ich <u>besuche</u>", „Sie <u>versteht</u>", „Er <u>erklärt</u>".</li>
                    <li><strong>Accentul cade pe verbul de bază</strong>, NU pe prefix: be<u>SU</u>chen, ver<u>STE</u>hen, er<u>KLÄ</u>ren. (La verbele separabile e invers: <u>AUF</u>stehen.)</li>
                    <li><strong>La Perfekt NU primesc „ge-"</strong> — Partizip II se formează direct din verbul de bază: <em>besucht</em> (NU <em><s>gebesucht</s></em>), <em>verstanden</em> (NU <em><s>geverstanden</s></em>).</li>
                    <li><strong>Cele mai multe sunt tranzitive</strong> — cer obiect direct la Akkusativ: <em>Ich besuche <u>meine Oma</u></em>, <em>Sie verkauft <u>das Auto</u></em>.</li>
                </ol>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Cum recunoști un verb neseparabil?</h4>
                <p>Memorează cele <strong>8 prefixe neseparabile</strong>: <strong>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</strong>. Dacă verbul începe cu unul dintre acestea, prefixul nu se separă niciodată.</p>
                <p style="margin-top: 10px;">Aceasta e regula simplă pentru B1. (Există și prefixe variabile precum durch-, über-, um-, unter-, wider- care pot fi ambele tipuri — dar le învățăm în lecția 4.)</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Trennbar (separabil)</th><th>Untrennbar (neseparabil)</th></tr></thead>
                <tbody>
                    <tr><td><strong>auf</strong>stehen → Ich <strong>stehe</strong> auf.<br><span class="ro-translation">Mă ridic.</span></td><td><strong>be</strong>suchen → Ich <strong>besuche</strong> ihn.<br><span class="ro-translation">Îl vizitez.</span></td></tr>
                    <tr><td>Perfekt: <strong>auf<u>ge</u>standen</strong></td><td>Perfekt: <strong>besucht</strong> (FĂRĂ ge-)</td></tr>
                    <tr><td>Accent: <u>AUF</u>stehen</td><td>Accent: be<u>SU</u>chen</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 1: be- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎯 2. Prefix be- (face verbul tranzitiv / „a face ceva pe ceva")</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-prefix-be.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p>Prefixul <strong>be-</strong> transformă adesea un verb intransitiv în <strong>tranzitiv</strong> (verbul cere obiect direct la Akkusativ). De exemplu: <em>antworten</em> (a răspunde — cu prepoziție: „auf eine Frage") devine <em>beantworten</em> (a răspunde la — direct, fără prepoziție: „eine Frage beantworten").</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">besuchen</td><td>a vizita</td><td><em>Ich besuche meine Großmutter.</em><br><span class="ro-translation">O vizitez pe bunica.</span></td></tr>
                    <tr><td class="verb">bekommen</td><td>a primi</td><td><em>Sie bekommt ein Geschenk.</em><br><span class="ro-translation">Ea primește un cadou.</span></td></tr>
                    <tr><td class="verb">bezahlen</td><td>a plăti</td><td><em>Wir bezahlen die Rechnung.</em><br><span class="ro-translation">Plătim nota de plată.</span></td></tr>
                    <tr><td class="verb">beantworten</td><td>a răspunde la (direct)</td><td><em>Er beantwortet die Frage.</em><br><span class="ro-translation">El răspunde la întrebare.</span></td></tr>
                    <tr><td class="verb">benutzen</td><td>a folosi / a întrebuința</td><td><em>Ich benutze den Computer jeden Tag.</em><br><span class="ro-translation">Folosesc calculatorul în fiecare zi.</span></td></tr>
                    <tr><td class="verb">beschreiben</td><td>a descrie</td><td><em>Beschreib mir das Bild!</em><br><span class="ro-translation">Descrie-mi tabloul!</span></td></tr>
                    <tr><td class="verb">bestellen</td><td>a comanda</td><td><em>Ich bestelle einen Kaffee.</em><br><span class="ro-translation">Comand o cafea.</span></td></tr>
                    <tr><td class="verb">beginnen</td><td>a începe</td><td><em>Der Film beginnt um 20 Uhr.</em><br><span class="ro-translation">Filmul începe la ora 20.</span></td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Capcană frecventă</h4>
                <p>La Perfekt: „Ich habe meine Oma <strong>besucht</strong>." — NU „<s>gebesucht</s>". Prefixul be- înlocuiește „ge-" la Partizip II.</p>
            </div>
        </div>
    </div>

    <!-- 2: emp- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📨 3. Prefix emp- (rar, doar 3 verbe — dar importante)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-prefix-emp.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p>Prefixul <strong>emp-</strong> este foarte rar în germană — practic apare doar în <strong>3 verbe importante</strong>, dar pe acestea trebuie să le știi solid pentru B1. Toate cer Akkusativ.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">empfehlen</td><td>a recomanda</td><td><em>Ich empfehle dir das Buch.</em><br><span class="ro-translation">Îți recomand cartea.</span></td></tr>
                    <tr><td class="verb">empfangen</td><td>a primi / a recepționa (oaspeți, semnal)</td><td><em>Wir empfangen die Gäste.</em><br><span class="ro-translation">Primim oaspeții.</span></td></tr>
                    <tr><td class="verb">empfinden</td><td>a simți / a percepe</td><td><em>Sie empfindet große Freude.</em><br><span class="ro-translation">Ea simte o mare bucurie.</span></td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Verbe neregulate</h4>
                <p>Toate trei sunt neregulate — schimbă vocala la Präsens (du <em>empfiehlst</em>, du <em>empfängst</em>, du <em>empfindest</em>) și la Partizip II (<em>empfohlen</em>, <em>empfangen</em>, <em>empfunden</em>).</p>
            </div>
        </div>
    </div>

    <!-- 3: ent- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🏃 4. Prefix ent- (îndepărtare / origine / decizie)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-prefix-ent.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p>Prefixul <strong>ent-</strong> indică: <strong>îndepărtare</strong> (a scăpa, a fugi de), <strong>origine / apariție</strong> (a se naște, a apărea) sau <strong>decizie / scuză</strong>.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">entdecken</td><td>a descoperi</td><td><em>Kolumbus entdeckte Amerika.</em><br><span class="ro-translation">Columb descoperise America.</span></td></tr>
                    <tr><td class="verb">entscheiden</td><td>a decide / a hotărî</td><td><em>Ich entscheide mich für den blauen Pullover.</em><br><span class="ro-translation">Mă hotărăsc pentru puloverul albastru.</span></td></tr>
                    <tr><td class="verb">sich entschuldigen</td><td>a-și cere scuze</td><td><em>Er entschuldigt sich bei mir.</em><br><span class="ro-translation">El își cere scuze de la mine.</span></td></tr>
                    <tr><td class="verb">entstehen</td><td>a apărea / a se naște</td><td><em>So entstehen neue Ideen.</em><br><span class="ro-translation">Așa apar idei noi.</span></td></tr>
                    <tr><td class="verb">entkommen</td><td>a scăpa / a fugi (cu Dativ)</td><td><em>Der Dieb entkommt der Polizei.</em><br><span class="ro-translation">Hoțul scapă de poliție.</span></td></tr>
                    <tr><td class="verb">entlassen</td><td>a concedia / a elibera</td><td><em>Die Firma hat ihn entlassen.</em><br><span class="ro-translation">Compania îl concediase.</span></td></tr>
                    <tr><td class="verb">entwickeln</td><td>a dezvolta</td><td><em>Wir entwickeln eine neue App.</em><br><span class="ro-translation">Dezvoltăm o aplicație nouă.</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: er- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎯 5. Prefix er- (atingerea unui rezultat / experiență)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-prefix-er.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p>Prefixul <strong>er-</strong> indică <strong>atingerea unui rezultat</strong>, o <strong>experiență trăită</strong> sau <strong>aflarea de informații</strong>. Verbul descrie de obicei un proces care duce la un rezultat clar.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">erfahren</td><td>a afla (o informație)</td><td><em>Ich habe es im Radio erfahren.</em><br><span class="ro-translation">Aflasem la radio.</span></td></tr>
                    <tr><td class="verb">erfinden</td><td>a inventa</td><td><em>Edison erfand die Glühbirne.</em><br><span class="ro-translation">Edison inventase becul.</span></td></tr>
                    <tr><td class="verb">erhalten</td><td>a primi / a păstra</td><td><em>Sie erhält jeden Monat ein Gehalt.</em><br><span class="ro-translation">Ea primește lunar un salariu.</span></td></tr>
                    <tr><td class="verb">erkennen</td><td>a recunoaște</td><td><em>Ich erkenne dich auf dem Foto.</em><br><span class="ro-translation">Te recunosc în fotografie.</span></td></tr>
                    <tr><td class="verb">erklären</td><td>a explica</td><td><em>Der Lehrer erklärt die Regel.</em><br><span class="ro-translation">Profesorul explică regula.</span></td></tr>
                    <tr><td class="verb">erlauben</td><td>a permite</td><td><em>Meine Eltern erlauben mir das nicht.</em><br><span class="ro-translation">Părinții mei nu îmi permit asta.</span></td></tr>
                    <tr><td class="verb">erleben</td><td>a trăi (o experiență)</td><td><em>Wir haben viel Schönes erlebt.</em><br><span class="ro-translation">Trăisem multe lucruri frumoase.</span></td></tr>
                    <tr><td class="verb">erreichen</td><td>a ajunge la / a atinge</td><td><em>Er erreicht sein Ziel.</em><br><span class="ro-translation">El își atinge scopul.</span></td></tr>
                    <tr><td class="verb">sich erinnern</td><td>a-și aminti (an + Akk.)</td><td><em>Ich erinnere mich an dich.</em><br><span class="ro-translation">Îmi amintesc de tine.</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 5: ge- + miss- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>⚖️ 6. Prefixele ge- + miss- (puține, dar utile)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-prefix-ge-miss.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Prefix ge- (rar, dar verbele sunt foarte uzuale)</h4>
                <p>Prefixul <strong>ge-</strong> nu mai e productiv azi (nu se mai formează verbe noi cu el), dar verbele care îl conțin sunt printre cele mai folosite din germană. <strong>Atenție:</strong> Partizip II nu primește încă un „ge-" în plus (NU „<s>gegefallen</s>", ci doar „gefallen").</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">gefallen</td><td>a plăcea (cu Dativ)</td><td><em>Das Buch gefällt mir.</em><br><span class="ro-translation">Cartea îmi place.</span></td></tr>
                    <tr><td class="verb">gehören</td><td>a aparține (cu Dativ)</td><td><em>Das Auto gehört meinem Vater.</em><br><span class="ro-translation">Mașina îi aparține tatălui meu.</span></td></tr>
                    <tr><td class="verb">gewinnen</td><td>a câștiga</td><td><em>Sie hat den ersten Preis gewonnen.</em><br><span class="ro-translation">Ea câștigase primul premiu.</span></td></tr>
                    <tr><td class="verb">genießen</td><td>a se bucura de / a savura</td><td><em>Wir genießen den Urlaub.</em><br><span class="ro-translation">Ne bucurăm de vacanță.</span></td></tr>
                    <tr><td class="verb">geschehen</td><td>a se întâmpla</td><td><em>Was ist geschehen?</em><br><span class="ro-translation">Ce s-a întâmplat?</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="margin-top: 20px;">
                <h4>Prefix miss- (eșec / greșit / negativ)</h4>
                <p>Prefixul <strong>miss-</strong> indică <strong>eșec, greșeală sau negare</strong>. E echivalentul lui „mis-" din engleză (misunderstand, misuse).</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">misslingen</td><td>a eșua / a nu reuși (cu Dativ)</td><td><em>Der Kuchen ist mir misslungen.</em><br><span class="ro-translation">Prăjitura nu îmi reușise.</span></td></tr>
                    <tr><td class="verb">missverstehen</td><td>a înțelege greșit</td><td><em>Du hast mich missverstanden.</em><br><span class="ro-translation">M-ai înțeles greșit.</span></td></tr>
                    <tr><td class="verb">missbrauchen</td><td>a abuza de (cu Akkusativ)</td><td><em>Er missbraucht ihr Vertrauen.</em><br><span class="ro-translation">El abuzează de încrederea ei.</span></td></tr>
                    <tr><td class="verb">missfallen</td><td>a displăcea (cu Dativ)</td><td><em>Sein Verhalten missfällt mir.</em><br><span class="ro-translation">Comportamentul lui îmi displace.</span></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 6: ver- -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>🔄 7. Prefix ver- (greșit / dispariție / transformare) — cel mai mare</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07-prefix-ver.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Sens general</h4>
                <p>Prefixul <strong>ver-</strong> e cel mai frecvent prefix neseparabil din germană. Are 3 sensuri principale:</p>
                <ul>
                    <li><strong>Greșeală / acțiune negativă:</strong> verlaufen (a se rătăci), verschlafen (a dormi prea mult)</li>
                    <li><strong>Dispariție / consum:</strong> verschwinden (a dispărea), vergessen (a uita)</li>
                    <li><strong>Transformare / schimbare de stare:</strong> verändern (a schimba), verkaufen (a vinde)</li>
                </ul>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">verstehen</td><td>a înțelege</td><td><em>Ich verstehe Deutsch gut.</em><br><span class="ro-translation">Înțeleg bine germana.</span></td></tr>
                    <tr><td class="verb">vergessen</td><td>a uita</td><td><em>Ich habe meinen Schlüssel vergessen.</em><br><span class="ro-translation">Îmi uitasem cheile.</span></td></tr>
                    <tr><td class="verb">verlieren</td><td>a pierde</td><td><em>Sie verliert oft ihre Brille.</em><br><span class="ro-translation">Ea își pierde des ochelarii.</span></td></tr>
                    <tr><td class="verb">verkaufen</td><td>a vinde</td><td><em>Wir verkaufen unser Auto.</em><br><span class="ro-translation">Vindem mașina noastră.</span></td></tr>
                    <tr><td class="verb">verbringen</td><td>a petrece (timp)</td><td><em>Ich verbringe den Sommer in Italien.</em><br><span class="ro-translation">Petrec vara în Italia.</span></td></tr>
                    <tr><td class="verb">verlassen</td><td>a părăsi</td><td><em>Er verlässt das Haus um 8.</em><br><span class="ro-translation">El părăsește casa la 8.</span></td></tr>
                    <tr><td class="verb">versuchen</td><td>a încerca</td><td><em>Ich versuche es noch einmal.</em><br><span class="ro-translation">Încerc încă o dată.</span></td></tr>
                    <tr><td class="verb">versprechen</td><td>a promite</td><td><em>Sie verspricht mir nichts.</em><br><span class="ro-translation">Ea nu îmi promite nimic.</span></td></tr>
                    <tr><td class="verb">vergleichen</td><td>a compara</td><td><em>Vergleich die zwei Texte!</em><br><span class="ro-translation">Compară cele două texte!</span></td></tr>
                    <tr><td class="verb">verschwinden</td><td>a dispărea</td><td><em>Plötzlich ist er verschwunden.</em><br><span class="ro-translation">Brusc a dispărut.</span></td></tr>
                    <tr><td class="verb">verschlafen</td><td>a dormi prea mult / a pierde ora</td><td><em>Ich habe heute verschlafen.</em><br><span class="ro-translation">Astăzi am dormit prea mult.</span></td></tr>
                </tbody>
            </table>
            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Atenție: vergessen vs. verlieren</h4>
                <p><strong>vergessen</strong> = a uita ceva (memoria) — „Ich habe deinen Namen vergessen." (Ți-am uitat numele.)<br>
                <strong>verlieren</strong> = a pierde ceva fizic — „Ich habe meinen Schlüssel verloren." (Mi-am pierdut cheia.)</p>
            </div>
        </div>
    </div>

    <!-- 7: zer- + Dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💥 8. Prefix zer- (distrugere / fragmentare) + Dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-7')" id="btn-audio-7">▶</button>
                    <audio id="audio-7" preload="none"><source src="audio/08-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea (zer- + dialog)</span>
            </div>

            <div class="theory-box">
                <h4>Prefix zer- (distrugere / fragmentare)</h4>
                <p>Prefixul <strong>zer-</strong> indică <strong>distrugere, ruptură, fragmentare</strong> — ceva care se sparge, se rupe sau se descompune în bucăți.</p>
            </div>
            <table class="theory-table">
                <thead><tr><th>Verb</th><th>Traducere</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">zerbrechen</td><td>a sparge / a se sparge în bucăți</td><td><em>Das Glas ist zerbrochen.</em><br><span class="ro-translation">Paharul s-a spart.</span></td></tr>
                    <tr><td class="verb">zerstören</td><td>a distruge</td><td><em>Der Sturm hat das Haus zerstört.</em><br><span class="ro-translation">Furtuna distrusese casa.</span></td></tr>
                    <tr><td class="verb">zerreißen</td><td>a rupe în bucăți</td><td><em>Sie zerreißt den Brief.</em><br><span class="ro-translation">Ea rupe scrisoarea.</span></td></tr>
                    <tr><td class="verb">zerschneiden</td><td>a tăia în bucăți</td><td><em>Er zerschneidet das Foto.</em><br><span class="ro-translation">El taie fotografia în bucăți.</span></td></tr>
                    <tr><td class="verb">zerfallen</td><td>a se descompune / a se prăbuși</td><td><em>Das alte Schloss zerfällt langsam.</em><br><span class="ro-translation">Vechiul castel se prăbușește încet.</span></td></tr>
                </tbody>
            </table>

            <h4 style="margin-top: 30px; color: #065f46;">💬 Dialog: „Ein schlimmer Morgen" (O dimineață proastă)</h4>

            <div style="background: #eff6ff; border: 2px dashed #3b82f6; padding: 12px 16px; border-radius: 8px; margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
                <button onclick="playFullDialog()" style="background:#3b82f6;color:white;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-weight:600;">🎙️ Redă tot dialogul (TTS)</button>
                <button onclick="stopDialog()" style="background:#ef4444;color:white;border:none;padding:10px 18px;border-radius:8px;cursor:pointer;font-weight:600;">⏹ Stop</button>
                <small style="color:#6b7280;">Voce germană automată. Click pe 🔊 lângă orice replică pentru a o asculta individual.</small>
            </div>

            <p style="margin-bottom: 15px;"><em>Anna îl sună pe Peter pentru că a avut o dimineață proastă. Dialogul folosește 10+ verbe neseparabile în context real.</em></p>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Hallo Peter, ich habe heute total <u>verschlafen</u>! <button onclick="speakDialogLine(event, 0)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Salut Peter, astăzi am dormit prea mult! (<em>verschlafen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Was ist passiert? Erzähl mal! <button onclick="speakDialogLine(event, 1)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Ce s-a întâmplat? Povestește!</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Zuerst habe ich meinen Schlüssel <u>vergessen</u>. Dann habe ich den Bus <u>verpasst</u>. <button onclick="speakDialogLine(event, 2)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Mai întâi îmi uitasem cheia. Apoi pierdusem autobuzul. (<em>vergessen, verpassen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Oh nein! Hast du das Treffen <u>abgesagt</u>? <button onclick="speakDialogLine(event, 3)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Vai! Ai anulat întâlnirea? (<em>absagen — separabil, doar pentru contrast</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Nein, aber das Schlimmste: ich habe meine Tasse <u>zerbrochen</u> und Kaffee überall <u>verschüttet</u>. <button onclick="speakDialogLine(event, 4)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Nu, dar cel mai rău: îmi spărsesem cana și vărsasem cafea peste tot. (<em>zerbrechen, verschütten</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Hast du dich verletzt? <button onclick="speakDialogLine(event, 5)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Te-ai rănit? (<em>sich verletzen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Zum Glück nicht. Aber ich <u>verstehe</u> nicht, warum alles heute schiefgeht. <button onclick="speakDialogLine(event, 6)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Din fericire nu. Dar nu înțeleg de ce totul merge prost azi. (<em>verstehen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Ich kann dir helfen. Ich <u>besuche</u> dich heute Abend und wir <u>verbringen</u> Zeit zusammen. <button onclick="speakDialogLine(event, 7)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Te pot ajuta. Vin să te vizitez diseară și petrecem timp împreună. (<em>besuchen, verbringen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Das ist lieb. <u>Erinnerst</u> du dich an die Pizzeria, die wir letzte Woche <u>entdeckt</u> haben? <button onclick="speakDialogLine(event, 8)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Ce drăguț. Îți amintești de pizzeria pe care o descoperisem săptămâna trecută? (<em>sich erinnern, entdecken</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Ja, klar! Ich <u>bestelle</u> für uns. Was <u>empfiehlst</u> du? <button onclick="speakDialogLine(event, 9)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Da, sigur! Comand pentru noi. Ce recomanzi? (<em>bestellen, empfehlen</em>)</p>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #065f46;">Anna:</strong> Eine große Pizza Margherita. Ich <u>verspreche</u>, ich <u>bezahle</u> diesmal! <button onclick="speakDialogLine(event, 10)" title="Ascultă" style="background:#10b981;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">O pizza Margherita mare. Promit, plătesc eu de data asta! (<em>versprechen, bezahlen</em>)</p>
            </div>

            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 6px; margin-bottom: 10px;">
                <p><strong style="color: #1e3a8a;">Peter:</strong> Super! Bis heute Abend. Und keine Sorge — morgen wird besser! <button onclick="speakDialogLine(event, 11)" title="Ascultă" style="background:#3b82f6;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:13px;margin-left:4px;vertical-align:middle;">🔊</button></p>
                <p style="color: #6b7280; font-style: italic; font-size: 0.9rem;">Super! Pe diseară. Și nu-ți face griji — mâine va fi mai bine!</p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6; margin-top: 20px;">
                <h4>🗝️ Verbe neseparabile folosite în dialog</h4>
                <p><strong>verschlafen</strong>, <strong>vergessen</strong>, <strong>verpassen</strong>, <strong>zerbrechen</strong>, <strong>verschütten</strong>, <strong>sich verletzen</strong>, <strong>verstehen</strong>, <strong>besuchen</strong>, <strong>verbringen</strong>, <strong>sich erinnern</strong>, <strong>entdecken</strong>, <strong>bestellen</strong>, <strong>empfehlen</strong>, <strong>versprechen</strong>, <strong>bezahlen</strong>.</p>
                <p style="margin-top: 8px;">Observă: la Perfekt nu apare „ge-" în interior — <em>verschlafen</em> (NU <s>geverschlafen</s>), <em>zerbrochen</em> (NU <s>gezerbrochen</s>), <em>besucht</em> (NU <s>gebesucht</s>).</p>
            </div>

            <div class="theory-box">
                <h4>🔑 Strategii de învățare</h4>
                <ul>
                    <li><strong>Memorează prefixele pe sens, nu izolat:</strong> ent- (îndepărtare), ver- (greșit/transformare), zer- (distrugere) — sensul te ajută să ghicești verbe noi.</li>
                    <li><strong>Învață cuplurile</strong> trennbar / untrennbar: <em>aufstehen</em> (a se ridica) ↔ <em>verstehen</em> (a înțelege) — ambele cu „stehen", dar prefix diferit = comportament diferit.</li>
                    <li><strong>Atenție la Perfekt:</strong> exersează „ich habe besucht" / „ich habe verstanden" / „ich habe vergessen" — fără ge- e o capcană pentru români.</li>
                    <li><strong>Lista celor 8 prefixe:</strong> <em>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</em> — învață-le pe de rost. Dacă un verb începe cu unul din astea, prefixul nu se separă niciodată.</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});

// ============================================
// DIALOG — TEXT-TO-SPEECH (voce germană automată)
// ============================================
const dialogLines = [
    "Hallo Peter, ich habe heute total verschlafen!",
    "Was ist passiert? Erzähl mal!",
    "Zuerst habe ich meinen Schlüssel vergessen. Dann habe ich den Bus verpasst.",
    "Oh nein! Hast du das Treffen abgesagt?",
    "Nein, aber das Schlimmste: ich habe meine Tasse zerbrochen und Kaffee überall verschüttet.",
    "Hast du dich verletzt?",
    "Zum Glück nicht. Aber ich verstehe nicht, warum alles heute schiefgeht.",
    "Ich kann dir helfen. Ich besuche dich heute Abend und wir verbringen Zeit zusammen.",
    "Das ist lieb. Erinnerst du dich an die Pizzeria, die wir letzte Woche entdeckt haben?",
    "Ja, klar! Ich bestelle für uns. Was empfiehlst du?",
    "Eine große Pizza Margherita. Ich verspreche, ich bezahle diesmal!",
    "Super! Bis heute Abend. Und keine Sorge — morgen wird besser!"
];

function speakDialogLine(event, index) {
    if (event) event.stopPropagation();
    const line = dialogLines[index];
    if (!line) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(line);
        u.lang = 'de-DE';
        u.rate = 0.9;
        u.pitch = index % 2 === 0 ? 1.15 : 0.85;
        window.speechSynthesis.speak(u);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.');
    }
}

function playFullDialog() {
    if (!('speechSynthesis' in window)) {
        alert('Browser-ul tău nu suportă Text-to-Speech.');
        return;
    }
    window.speechSynthesis.cancel();
    dialogLines.forEach((line, i) => {
        const u = new SpeechSynthesisUtterance(line);
        u.lang = 'de-DE';
        u.rate = 0.9;
        u.pitch = i % 2 === 0 ? 1.15 : 0.85;
        window.speechSynthesis.speak(u);
    });
}

function stopDialog() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}
