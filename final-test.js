// ============================================
// TEST FINAL - Untrennbare Verben (Teil 1)
// Claudia Toth · 20 întrebări mixte · B1
// ============================================

const finalTestData = [
    // Sens prefix
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „ver-" indică de obicei:', options: ['intrare', 'greșeală / dispariție / transformare', 'distrugere', 'apropiere'], correct: 'greșeală / dispariție / transformare', explanation: 'ver- = greșit (verlaufen), dispariție (verschwinden), transformare (verkaufen, verändern).' },
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „zer-" indică de obicei:', options: ['început', 'distrugere / fragmentare', 'origine', 'rezultat'], correct: 'distrugere / fragmentare', explanation: 'zer- = sparge/rupe/distruge (zerbrechen, zerstören, zerreißen).' },
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „ent-" indică de obicei:', options: ['îndepărtare / origine / decizie', 'în sus', 'plătire', 'transformare'], correct: 'îndepărtare / origine / decizie', explanation: 'ent- = îndepărtare (entkommen), origine (entstehen), decizie (entscheiden).' },
    { type: 'matching', category: '🎯 Sens prefix', question: 'Prefix „miss-" indică de obicei:', options: ['rezultat pozitiv', 'eșec / greșit / negativ', 'apariție', 'plecare'], correct: 'eșec / greșit / negativ', explanation: 'miss- = eșec/greșit (misslingen, missverstehen, missbrauchen).' },

    // Perfekt FĂRĂ ge-
    { type: 'luckentext', category: '📝 Perfekt fără ge-', question: 'Partizip II pentru:', sentence: '<strong>besuchen</strong> → ich habe ______', translation: 'am vizitat', accept: ['besucht'], correct: 'besucht', explanation: 'NU „gebesucht" — verbele neseparabile NU primesc ge- la Partizip II.' },
    { type: 'luckentext', category: '📝 Perfekt fără ge-', question: 'Partizip II pentru:', sentence: '<strong>verstehen</strong> → ich habe ______', translation: 'am înțeles', accept: ['verstanden'], correct: 'verstanden', explanation: 'verstehen → verstanden (verb neregulat, fără ge-).' },
    { type: 'luckentext', category: '📝 Perfekt fără ge-', question: 'Partizip II pentru:', sentence: '<strong>vergessen</strong> → ich habe ______', translation: 'am uitat', accept: ['vergessen'], correct: 'vergessen', explanation: 'vergessen → vergessen (forma de Partizip II e identică cu infinitivul).' },
    { type: 'luckentext', category: '📝 Perfekt fără ge-', question: 'Partizip II pentru:', sentence: '<strong>erklären</strong> → ich habe ______', translation: 'am explicat', accept: ['erklärt', 'erklaert'], correct: 'erklärt', explanation: 'erklären → erklärt (verb regulat, fără ge-).' },
    { type: 'luckentext', category: '📝 Perfekt fără ge-', question: 'Partizip II pentru:', sentence: '<strong>zerstören</strong> → der Sturm hat ______', translation: 'a distrus', accept: ['zerstört', 'zerstoert'], correct: 'zerstört', explanation: 'zerstören → zerstört (regulat, fără ge-).' },

    // Präsens — verb neseparabil
    { type: 'luckentext', category: '⚙️ Präsens', question: 'Conjugă în Präsens:', sentence: 'Ich ______ meine Oma. (besuchen)', translation: 'O vizitez pe bunica.', accept: ['besuche'], correct: 'besuche', explanation: 'besuchen — neseparabil, prefixul rămâne lipit: „ich besuche".' },
    { type: 'luckentext', category: '⚙️ Präsens', question: 'Conjugă în Präsens:', sentence: 'Wir ______ unser Auto. (verkaufen)', translation: 'Vindem mașina.', accept: ['verkaufen'], correct: 'verkaufen', explanation: 'verkaufen — neseparabil; persoana 1 plural rămâne identică cu infinitivul.' },
    { type: 'luckentext', category: '⚙️ Präsens', question: 'Conjugă în Präsens:', sentence: 'Sie ______ sich an dich. (sich erinnern)', translation: 'Își amintește de tine.', accept: ['erinnert'], correct: 'erinnert', explanation: 'sich erinnern — verb reflexiv, neseparabil: „sie erinnert sich".' },

    // Multiple choice — sens
    { type: 'multiple', category: '✅ Sens verb', question: 'Ce înseamnă „bekommen"?', options: ['a deveni', 'a primi', 'a începe', 'a comanda'], correct: 'a primi', explanation: 'bekommen = a primi. ATENȚIE: NU înseamnă „a deveni" (= werden) — capcană pentru români!' },
    { type: 'multiple', category: '✅ Sens verb', question: 'Care e diferența dintre „vergessen" și „verlieren"?', options: ['Sunt sinonime', 'vergessen = a uita (memoria); verlieren = a pierde (fizic)', 'vergessen = a pierde fizic; verlieren = a uita', 'Niciuna din variante'], correct: 'vergessen = a uita (memoria); verlieren = a pierde (fizic)', explanation: 'Ich habe seinen Namen vergessen (uitat). Ich habe meinen Schlüssel verloren (pierdut fizic).' },
    { type: 'multiple', category: '✅ Sens verb', question: 'Care verb NU e neseparabil?', options: ['besuchen', 'aufstehen', 'verstehen', 'entdecken'], correct: 'aufstehen', explanation: 'aufstehen e separabil (auf- = prefix separabil). Celelalte au prefixe neseparabile (be-, ver-, ent-).' },
    { type: 'multiple', category: '✅ Sens verb', question: '„Ich erinnere mich an dich" înseamnă:', options: ['Te uit pe tine', 'Îmi cer scuze de la tine', 'Îmi amintesc de tine', 'Te invit'], correct: 'Îmi amintesc de tine', explanation: 'sich erinnern an + Akk. = a-și aminti de cineva/ceva.' },

    // Traducere
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'O vizitez pe mama mea.', accept: ['ich besuche meine mutter.', 'ich besuche meine mutter'], correct: 'Ich besuche meine Mutter.', explanation: 'besuchen + Akk. (meine Mutter).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Profesorul explică regula.', accept: ['der lehrer erklärt die regel.', 'der lehrer erklärt die regel', 'der lehrer erklaert die regel.', 'der lehrer erklaert die regel'], correct: 'Der Lehrer erklärt die Regel.', explanation: 'erklären + Akk.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (Perfekt):', ro: 'Mi-am uitat cheile.', accept: ['ich habe meine schlüssel vergessen.', 'ich habe meine schlüssel vergessen', 'ich habe meine schluessel vergessen.', 'ich habe meine schluessel vergessen'], correct: 'Ich habe meine Schlüssel vergessen.', explanation: 'vergessen → vergessen (la Perfekt forma e identică cu infinitivul).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți:', ro: 'Cartea îmi place.', accept: ['das buch gefällt mir.', 'das buch gefällt mir', 'das buch gefaellt mir.', 'das buch gefaellt mir'], correct: 'Das Buch gefällt mir.', explanation: 'gefallen + Dativ (mir).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre verbele neseparabile cu prefixele be-, emp-, ent-, er-, ge-, miss-, ver-, zer-.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'matching') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple' || q.type === 'matching') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple' || type === 'matching') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple' || q.type === 'matching') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple' || q.type === 'matching') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userAnswerNorm = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        isCorrect = q.accept.some(a => {
            const aNorm = a.toLowerCase().replace(/\s+/g, ' ');
            return aNorm === userAnswerNorm;
        });
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
