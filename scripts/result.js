document.addEventListener("DOMContentLoaded", () => {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};

    const resultContainer = document.getElementById("resultContainer");
    let score = 0;

    Object.entries(userAnswers).forEach(([index, answerData]) => {
        const { question, selectedAnswer, correctAnswer } = answerData;

        // Check if answer is correct
        const isCorrect = selectedAnswer === correctAnswer;
        if (isCorrect) score++;

        // Display results
        resultContainer.innerHTML += `
            <div class="p-4 border-b border-gray-400">
                <h2 class="text-lg font-semibold">${parseInt(index) + 1}. ${question}</h2>
                <p>Your Answer: <span class="${isCorrect ? 'text-green-600' : 'text-red-600'}">${selectedAnswer}</span></p>
                <p>Correct Answer: <span class="text-blue-600">${correctAnswer}</span></p>
            </div>
            <div class="border-b-2 border-slate-600 w-full rounded mb-2 mt-1"></div>
        `;
    });

    // Display final score
    resultContainer.innerHTML += `<h2 class="text-2xl font-bold mt-4">Your Score: ${score}/${Object.keys(userAnswers).length}</h2>`;
});
