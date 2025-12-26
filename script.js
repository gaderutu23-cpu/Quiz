document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      choices: ["<p>", "<a>", "<link>", "<href>"],
      answer: "<a>",
    },
    {
      question: "Which HTML element do we put CSS styles inside?",
      choices: ["<style>", "<script>", "<css>", "<head>"],
      answer: "<style>",
    },
    {
      question: "Which CSS property is used to change the text color?",
      choices: ["font-style", "background-color", "color", "text-align"],
      answer: "color",
    },
    {
      question: "Which keyword is used to declare a variable in modern JavaScript?",
      choices: ["var", "let", "int", "const"],
      answer: "let",
    },
    {
      question: "Which method is used to log messages to the browser console in JavaScript?",
      choices: ["alert()", "console.log()", "print()", "log()"],
      answer: "console.log()",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let hasAnsweredCurrentQuestion = false;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    hasAnsweredCurrentQuestion = false;
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    if (hasAnsweredCurrentQuestion) return;

    hasAnsweredCurrentQuestion = true;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});

