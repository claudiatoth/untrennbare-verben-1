// ============================================
// EXERCIȚII - UNTRENNBARE VERBEN (TEIL 1)
// Claudia Toth · 5 exerciții B1
// ============================================

// ============================================
// EXERCIȚIUL 1: Präsens — verbul neseparabil
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Ich ____ meine Großmutter. (besuchen)', correct: 'besuche', accept: ['besuche'] },
    { id: 'b', sentence: 'Sie ____ ein Geschenk. (bekommen)', correct: 'bekommt', accept: ['bekommt'] },
    { id: 'c', sentence: 'Wir ____ die Rechnung. (bezahlen)', correct: 'bezahlen', accept: ['bezahlen'] },
    { id: 'd', sentence: 'Er ____ die Frage. (beantworten)', correct: 'beantwortet', accept: ['beantwortet'] },
    { id: 'e', sentence: 'Du ____ Deutsch sehr gut. (verstehen)', correct: 'verstehst', accept: ['verstehst'] },
    { id: 'f', sentence: 'Ich ____ den Sommer in Italien. (verbringen)', correct: 'verbringe', accept: ['verbringe'] },
    { id: 'g', sentence: 'Der Lehrer ____ die Regel. (erklären)', correct: 'erklärt', accept: ['erklärt', 'erklaert'] },
    { id: 'h', sentence: 'Ich ____ mich an dich. (sich erinnern)', correct: 'erinnere', accept: ['erinnere'] },
    { id: 'i', sentence: 'Sie ____ sich für den blauen Pullover. (sich entscheiden)', correct: 'entscheidet', accept: ['entscheidet'] },
    { id: 'j', sentence: 'Das Glas ist ____. (zerbrechen, Perfekt)', correct: 'zerbrochen', accept: ['zerbrochen'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Conjugă verbele neseparabile.</strong><br>
            <em>Atenție:</em> prefixul rămâne lipit de verb — <strong>nu</strong> se separă!
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex1-${item.id}" placeholder="ex: besuche">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const feedback = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();
        if (item.accept.some(a => a.toLowerCase() === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Perfekt FĂRĂ -ge-
// ============================================
const ex2Data = [
    { id: 'a', inf: 'besuchen', correct: 'besucht', accept: ['besucht'] },
    { id: 'b', inf: 'verstehen', correct: 'verstanden', accept: ['verstanden'] },
    { id: 'c', inf: 'vergessen', correct: 'vergessen', accept: ['vergessen'] },
    { id: 'd', inf: 'verkaufen', correct: 'verkauft', accept: ['verkauft'] },
    { id: 'e', inf: 'erklären', correct: 'erklärt', accept: ['erklärt', 'erklaert'] },
    { id: 'f', inf: 'entdecken', correct: 'entdeckt', accept: ['entdeckt'] },
    { id: 'g', inf: 'bezahlen', correct: 'bezahlt', accept: ['bezahlt'] },
    { id: 'h', inf: 'verlieren', correct: 'verloren', accept: ['verloren'] },
    { id: 'i', inf: 'zerstören', correct: 'zerstört', accept: ['zerstört', 'zerstoert'] },
    { id: 'j', inf: 'empfehlen', correct: 'empfohlen', accept: ['empfohlen'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Scrie Partizip II (Perfekt) — FĂRĂ „ge-"!</strong><br>
            <em>Capcană:</em> verbele neseparabile NU primesc „ge-" la Partizip II. Exemplu: <em>besuchen → besucht</em> (NU <s>gebesucht</s>).
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><span class="nomen-highlight">${item.inf}</span> → Partizip II: ?</label>
                    <input type="text" id="ex2-${item.id}" placeholder="ex: besucht">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const feedback = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();
        if (item.accept.some(a => a.toLowerCase() === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Trennbar sau untrennbar?
// ============================================
const ex3Data = [
    { id: 'a', verb: 'aufstehen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'trennbar (separabil)', explanation: 'Prefix auf- e separabil. Ich stehe auf.' },
    { id: 'b', verb: 'besuchen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'untrennbar (neseparabil)', explanation: 'Prefix be- e mereu neseparabil. Ich besuche.' },
    { id: 'c', verb: 'verstehen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'untrennbar (neseparabil)', explanation: 'Prefix ver- e mereu neseparabil. Ich verstehe.' },
    { id: 'd', verb: 'einkaufen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'trennbar (separabil)', explanation: 'Prefix ein- e separabil. Ich kaufe ein.' },
    { id: 'e', verb: 'entdecken', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'untrennbar (neseparabil)', explanation: 'Prefix ent- e mereu neseparabil. Ich entdecke.' },
    { id: 'f', verb: 'anrufen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'trennbar (separabil)', explanation: 'Prefix an- e separabil. Ich rufe an.' },
    { id: 'g', verb: 'erklären', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'untrennbar (neseparabil)', explanation: 'Prefix er- e mereu neseparabil. Ich erkläre.' },
    { id: 'h', verb: 'zerbrechen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'untrennbar (neseparabil)', explanation: 'Prefix zer- e mereu neseparabil. Es zerbricht.' },
    { id: 'i', verb: 'aussteigen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'trennbar (separabil)', explanation: 'Prefix aus- e separabil. Ich steige aus.' },
    { id: 'j', verb: 'missverstehen', options: ['trennbar (separabil)', 'untrennbar (neseparabil)'], correct: 'untrennbar (neseparabil)', explanation: 'Prefix miss- e neseparabil. Ich missverstehe.' }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Bifează: verbul e separabil sau neseparabil?</strong><br>
            Reține lista celor 8 prefixe neseparabile: <em>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</em>.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex3-${item.id}" value="${opt}" id="ex3-${item.id}-${i}">
                    <label for="ex3-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><span class="nomen-highlight">${item.verb}</span></label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex3-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Lückentext — verbul potrivit
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Ich habe meine Schlüssel ____. (uitat)', correct: 'vergessen', accept: ['vergessen'] },
    { id: 'b', sentence: 'Der Lehrer ____ die Grammatik. (explică)', correct: 'erklärt', accept: ['erklärt', 'erklaert'] },
    { id: 'c', sentence: 'Wir ____ unser Auto. (vindem)', correct: 'verkaufen', accept: ['verkaufen'] },
    { id: 'd', sentence: 'Sie ____ sich an die schöne Reise. (își amintește)', correct: 'erinnert', accept: ['erinnert'] },
    { id: 'e', sentence: 'Ich ____ einen Kaffee mit Milch. (comand)', correct: 'bestelle', accept: ['bestelle'] },
    { id: 'f', sentence: 'Der Sturm hat das Haus ____. (a distrus, Perfekt)', correct: 'zerstört', accept: ['zerstört', 'zerstoert'] },
    { id: 'g', sentence: 'Ich ____ dir dieses Buch. (recomand)', correct: 'empfehle', accept: ['empfehle'] },
    { id: 'h', sentence: 'Du hast mich ____. (înțeles greșit, Perfekt)', correct: 'missverstanden', accept: ['missverstanden'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu verbul neseparabil potrivit.</strong><br>
            Ghidează-te după contextul în română (între paranteze).
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex4-${item.id}" placeholder="verb conjugat sau Partizip II">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const feedback = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();
        if (item.accept.some(a => a.toLowerCase() === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Traducere RO → DE
// ============================================
const ex5Data = [
    { id: 'a', ro: 'O vizitez pe bunica.', correct: 'Ich besuche meine Oma.', accept: ['ich besuche meine oma.', 'ich besuche meine oma', 'ich besuche meine großmutter.', 'ich besuche meine großmutter', 'ich besuche meine grossmutter.', 'ich besuche meine grossmutter'] },
    { id: 'b', ro: 'Înțeleg bine germana.', correct: 'Ich verstehe Deutsch gut.', accept: ['ich verstehe deutsch gut.', 'ich verstehe deutsch gut', 'ich verstehe gut deutsch.', 'ich verstehe gut deutsch'] },
    { id: 'c', ro: 'Mi-am pierdut cheile.', correct: 'Ich habe meine Schlüssel verloren.', accept: ['ich habe meine schlüssel verloren.', 'ich habe meine schlüssel verloren', 'ich habe meine schluessel verloren.', 'ich habe meine schluessel verloren'] },
    { id: 'd', ro: 'El îi explică totul.', correct: 'Er erklärt ihr alles.', accept: ['er erklärt ihr alles.', 'er erklärt ihr alles', 'er erklaert ihr alles.', 'er erklaert ihr alles'] },
    { id: 'e', ro: 'Petrecem vara la mare.', correct: 'Wir verbringen den Sommer am Meer.', accept: ['wir verbringen den sommer am meer.', 'wir verbringen den sommer am meer'] },
    { id: 'f', ro: 'Ea își recunoaște greșeala.', correct: 'Sie erkennt ihren Fehler.', accept: ['sie erkennt ihren fehler.', 'sie erkennt ihren fehler'] },
    { id: 'g', ro: 'Astăzi am dormit prea mult. (Perfekt)', correct: 'Ich habe heute verschlafen.', accept: ['ich habe heute verschlafen.', 'ich habe heute verschlafen'] },
    { id: 'h', ro: 'Cartea îmi place foarte mult.', correct: 'Das Buch gefällt mir sehr.', accept: ['das buch gefällt mir sehr.', 'das buch gefällt mir sehr', 'das buch gefaellt mir sehr.', 'das buch gefaellt mir sehr'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Traduceți în germană folosind verbe neseparabile.</strong><br>
            Atenție: prefixul NU se separă, iar la Perfekt nu se pune „ge-"!
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>🇷🇴 ${item.ro}</label>
                    <input type="text" id="ex5-${item.id}" placeholder="Traducere în germană...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const feedback = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
        if (item.accept.some(a => a === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// BUILD
document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
