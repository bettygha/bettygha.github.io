function alertFun() {
    alert("Hello world");
};


window.onload = function () {
    let click = document.getElementById("big");
    let click2 = document.getElementById("mal");
    let click3 = document.getElementById("pig");
    //click.onclick = alertFun;
    click.onclick = setIntervalFun;
    click2.onclick = malkovitch;
    click3.onclick = convertToPigLatin;

}

function changeFontSize() {
    let textArea = document.getElementById("area");
    // textArea.style.fontSize ="24px";
    let textFont = window.getComputedStyle(textArea, null).getPropertyValue("font-size");
    let hold = parseInt(textFont);
    textArea.style.fontSize = `${hold + 2}px`;

};
function setIntervalFun() {

    setInterval(changeFontSize, 500);

}

function blingbling() {
    // alert("Bling Bling !!!")
    let checkBox = document.getElementById("bling").checked;
    let textArea = document.getElementById("area");
    if (checkBox) {
        textArea.style.fontWeight = "bold";
        textArea.style.textDecorationLine = "underline";
        textArea.style.color = "green";
        document.body.style.backgroundImage = "url('100 Dollar Bill Pile.jpg')";

    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.textDecorationLine = "none";
        textArea.style.color = "black";
        document.body.style.backgroundImage = "none";
    }

}
function convertToPigLatin() {
    let inputText = document.getElementById("area").value;
    let words = inputText.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (/^[aeiou]/i.test(word)) {
            words[i] = word + "ay";
        }
        else {
            let vowelIndex = word.search(/[aeiou]/i);
            word[i] = word.substring(vowelIndex) + word.substring(0, vowelIndex) + "ay";
        }
    }
    let pigLatinText = words.join(" ");
    inputText = "";
    document.getElementById("area").value = pigLatinText;
}
function malkovitch() {
    let inputText = document.getElementById("area").value;

    let words = inputText.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= 5) {
            words[i] = "Malkovitch";

        }
    }
    let malkovitchWord = words.join(" ");
    inputText = "";
    document.getElementById("area").value = malkovitchWord;
}