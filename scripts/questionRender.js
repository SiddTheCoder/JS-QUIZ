const quizContainer = document.getElementById('quizContainer');
let userAnsweredObject = {}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle questions and options
shuffleArray(questionCollection);
questionCollection.forEach(q => shuffleArray(q.options));

// Use a DocumentFragment for better performance
const fragment = document.createDocumentFragment();

questionCollection.forEach((questionChunk, chunkIndex) => {
    const questionFrame = document.createElement('div');

    // Use map & join to generate options efficiently
    const optionsHTML = questionChunk.options.map(opt => `
        <label class="flex items-center gap-1 text-lg cursor-text">
            <input name="option-${chunkIndex}" type="radio" class="cursor-pointer"> ${opt}
        </label>
    `).join('');

    questionFrame.innerHTML = `
        <div>
            <h1 class="text-xl cursor-default">${chunkIndex + 1}. ${questionChunk.question}</h1>
            ${optionsHTML}
        </div>
        <div class="border-b-2 border-slate-600 w-full rounded mb-2 mt-1"></div>
    `;

    fragment.appendChild(questionFrame);
});

// Append all at once to avoid multiple reflows
quizContainer.appendChild(fragment);

