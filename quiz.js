function submitQuiz() {
    let score = 0;
    const totalQuestions = 4;
    let resultText = "";

    // Check answers for Q1 (SEO)
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "A") {
        score++;
    }

    // Check answer for Q2 (Phishing - fill in the blank)
    const q2 = document.querySelector('input[name="q2"]').value.trim();
    if (q2.toLowerCase() === "phishing") {
        score++;
    }

    // Check answers for Q3 (SQL Injection - multiple answers)
    const q3 = document.querySelectorAll('input[name="q3"]:checked');
    if (q3.length === 2 && q3[0].value === "A" && q3[1].value === "C") {
        score++;
    }

    // Check answer for Q4 (Phishing)
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "C") {
        score++;
    }

    // Display results
    resultText += `<p>Your total score: ${score} out of ${totalQuestions}</p>`;
    resultText += (score >= 3) ? "<p>You passed!</p>" : "<p>You failed. Try again!</p>";

    // Show answers
    resultText += "<h3>Answers:</h3>";
    resultText += "<p>Q1: Correct answer is a) Search Engine Optimization</p>";
    resultText += "<p>Q2: Correct answer is Phishing</p>";
    resultText += "<p>Q3: Correct answers are a) Using UNION SELECT in a query, c) Manipulating SQL queries to bypass login forms</p>";
    resultText += "<p>Q4: Correct answer is c) A technique used to trick people into revealing personal information by impersonating legitimate sources</p>";

    // Display the result and restart button
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("restart-btn").style.display = "block";
}

function restartQuiz() {
    document.getElementById("quiz-form").reset();
    document.getElementById("result").innerHTML = "";
    document.getElementById("restart-btn").style.display = "none";
}


