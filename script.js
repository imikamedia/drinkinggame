const players = [];

function addPlayer() {
    const name = document.getElementById("playerName").value.trim();
    if (name) {
        players.push(name);
        document.getElementById("playerName").value = "";
        document.getElementById("playerList").textContent = players.join(", ");
    }
}

function startGame() {
    if (players.length < 2) {
        alert("Please add at least two players to start the game.");
        return;
    }
    document.getElementById("result").style.display = "none";
    flashPlayerNames();
}

function flashPlayerNames() {
    const flashingNamesDiv = document.getElementById("flashingNames");
    let startTime = Date.now();
    const duration = 2000;
    const intervalTime = 200;
    let index = 0;

    const intervalId = setInterval(() => {
        if (Date.now() - startTime > duration) {
            clearInterval(intervalId);
            selectRandomPlayer();
            return;
        }
        flashingNamesDiv.textContent = players[index];
        index = (index + 1) % players.length;
    }, intervalTime);
}

function selectRandomPlayer() {
    const randomIndex = Math.floor(Math.random() * players.length);
    const selectedPlayer = players[randomIndex];
    const flashingNamesDiv = document.getElementById("flashingNames");

    let flashCount = 0;
    const flashDuration = 400;
    const flashIntervalId = setInterval(() => {
        flashingNamesDiv.textContent = selectedPlayer;
        flashingNamesDiv.style.visibility = (flashCount % 2 === 0) ? 'hidden' : 'visible';
        flashCount++;

        if (flashCount === 4) {
            clearInterval(flashIntervalId);
            flashingNamesDiv.style.visibility = 'visible';
            askQuestion(selectedPlayer);
        }
    }, flashDuration);
}

function askQuestion(player) {
    document.getElementById("questionSection").style.display = "block";
    const questionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[questionIndex];

    const questionSection = document.getElementById("questionSection");
    questionSection.style.opacity = 0;
    setTimeout(() => {
        questionSection.style.opacity = 1;
        document.getElementById("questionText").textContent = `${player}, ${currentQuestion.question}`;
        
        const choicesDiv = document.getElementById("choices");
        choicesDiv.innerHTML = "";

        currentQuestion.choices.forEach((choice, index) => {
            const choiceButton = document.createElement("button");
            choiceButton.className = "choice";
            choiceButton.textContent = choice;
            choiceButton.onclick = () => checkAnswer(index, currentQuestion, player);
            choicesDiv.appendChild(choiceButton);
        });
    }, 100);
}

function checkAnswer(selectedIndex, question, player) {
    const result = document.getElementById("result");

    document.querySelectorAll(".choice").forEach((button, index) => {
        button.disabled = true;
        button.style.backgroundColor = index === question.correct ? "#00FFA2" : "#7200FF";
    });

    result.style.display = "block";
    document.getElementById("resultName").textContent = player;
    if (selectedIndex === question.correct) {
        document.getElementById("resultMessage").textContent = "YOU'RE SAFE!";
        result.style.backgroundColor = "#7200FF";
        result.className = "safe";
    } else {
        document.getElementById("resultMessage").textContent = "DRINK!";
        result.style.backgroundColor = "#FF5A00";
        result.className = "drink";
        document.querySelectorAll(".choice")[selectedIndex].style.backgroundColor = "#FF5A00";
    }

    const delay = selectedIndex === question.correct ? 2000 : 5000;
    setTimeout(() => {
        result.style.display = "none";
        document.getElementById("questionSection").style.display = "none";
        flashPlayerNames();
    }, delay);
}