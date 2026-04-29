// ============================================
// FLASHCARDS - UNTRENNBARE VERBEN (TEIL 1)
// Claudia Toth · ~45 verbe + exemple cu TTS
// ============================================

const flashcardsData = [
    // be-
    { de: 'besuchen', ro: 'a vizita' },
    { de: 'bekommen', ro: 'a primi' },
    { de: 'bezahlen', ro: 'a plăti' },
    { de: 'beantworten', ro: 'a răspunde la (direct)' },
    { de: 'benutzen', ro: 'a folosi / a întrebuința' },
    { de: 'beschreiben', ro: 'a descrie' },
    { de: 'bestellen', ro: 'a comanda' },
    { de: 'beginnen', ro: 'a începe' },

    // emp-
    { de: 'empfehlen', ro: 'a recomanda' },
    { de: 'empfangen', ro: 'a primi / a recepționa' },
    { de: 'empfinden', ro: 'a simți / a percepe' },

    // ent-
    { de: 'entdecken', ro: 'a descoperi' },
    { de: 'entscheiden', ro: 'a decide / a hotărî' },
    { de: 'sich entschuldigen', ro: 'a-și cere scuze' },
    { de: 'entstehen', ro: 'a apărea / a se naște' },
    { de: 'entkommen', ro: 'a scăpa / a fugi (de cineva)' },
    { de: 'entlassen', ro: 'a concedia / a elibera' },
    { de: 'entwickeln', ro: 'a dezvolta' },

    // er-
    { de: 'erfahren', ro: 'a afla (o informație)' },
    { de: 'erfinden', ro: 'a inventa' },
    { de: 'erhalten', ro: 'a primi / a păstra' },
    { de: 'erkennen', ro: 'a recunoaște' },
    { de: 'erklären', ro: 'a explica' },
    { de: 'erlauben', ro: 'a permite' },
    { de: 'erleben', ro: 'a trăi (o experiență)' },
    { de: 'erreichen', ro: 'a ajunge la / a atinge' },
    { de: 'sich erinnern', ro: 'a-și aminti' },

    // ge-
    { de: 'gefallen', ro: 'a plăcea (cu Dativ)' },
    { de: 'gehören', ro: 'a aparține (cu Dativ)' },
    { de: 'gewinnen', ro: 'a câștiga' },
    { de: 'genießen', ro: 'a se bucura de / a savura' },
    { de: 'geschehen', ro: 'a se întâmpla' },

    // miss-
    { de: 'misslingen', ro: 'a eșua / a nu reuși' },
    { de: 'missverstehen', ro: 'a înțelege greșit' },
    { de: 'missbrauchen', ro: 'a abuza de' },
    { de: 'missfallen', ro: 'a displăcea' },

    // ver-
    { de: 'verstehen', ro: 'a înțelege' },
    { de: 'vergessen', ro: 'a uita' },
    { de: 'verlieren', ro: 'a pierde' },
    { de: 'verkaufen', ro: 'a vinde' },
    { de: 'verbringen', ro: 'a petrece (timp)' },
    { de: 'verlassen', ro: 'a părăsi' },
    { de: 'versuchen', ro: 'a încerca' },
    { de: 'versprechen', ro: 'a promite' },
    { de: 'vergleichen', ro: 'a compara' },
    { de: 'verschwinden', ro: 'a dispărea' },
    { de: 'verschlafen', ro: 'a dormi prea mult' },

    // zer-
    { de: 'zerbrechen', ro: 'a sparge / a se sparge' },
    { de: 'zerstören', ro: 'a distruge' },
    { de: 'zerreißen', ro: 'a rupe în bucăți' },
    { de: 'zerschneiden', ro: 'a tăia în bucăți' },
    { de: 'zerfallen', ro: 'a se descompune / a se prăbuși' }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} verbe neseparabile cu prefixele be-, emp-, ent-, er-, ge-, miss-, ver-, zer-.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(card.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
