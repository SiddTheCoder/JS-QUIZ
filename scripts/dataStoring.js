document.getElementById('quizSubmitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    userAnsweredObject = {}; // Reset previous answers

    questionCollection.forEach((questionChunk, chunkIndex) => {
        const selectedOption = document.querySelector(`input[name="option-${chunkIndex}"]:checked`);
        userAnsweredObject[chunkIndex] = {
            question: questionChunk.question,
            selectedAnswer: selectedOption ? selectedOption.value : "No Answer",
            correctAnswer: questionChunk.answer
        };
    });

    // Store user answers in localStorage
    localStorage.setItem('userAnswers', JSON.stringify(userAnsweredObject));

    // Redirect to result page (optional)
    window.location.href = "result.html"; 
});
