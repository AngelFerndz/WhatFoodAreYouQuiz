function nextQuestion(index) {
    updateStorage(index);
    refreshRadio();
    setQuestion();
}

function setQuestion() {
    var l = getStorageLength();
    switch (l) {
        case 1:
            question1();
            break;
        case 2:
            question2();
            break;
        case 3:
            redirect("results/index.html");
            break;
    }
}

function question0() {
    changeQuestion("What shape do you prefer?");
    changeAnswer0("Triangle");
    changeAnswer1("Circle");
    changeAnswer2("Square");
}

function question1() {
    changeQuestion("What is your taste?");
    changeAnswer0("Sour");
    changeAnswer1("Sweet");
    changeAnswer2("Bitter");
}

function question2() {
    changeQuestion("What do you like the most?");
    changeAnswer0("Sleep");
    changeAnswer1("Play");
    changeAnswer2("Work");
}

function changePage(index) {
    redirect("results/result.html");
}

function changeQuestion(Question) {
    changeElementValue("questionText", Question);
}

function changeAnswer0(Answer) {
    changeElementValue("answerText0", Answer);
}

function changeAnswer1(Answer) {
    changeElementValue("answerText1", Answer);
}

function changeAnswer2(Answer) {
    changeElementValue("answerText2", Answer);
}
