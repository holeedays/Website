const initialQueries = {

    initialText: `Hello visitor! I have a question: What has been the happiest or saddest moments in your life?`,

    furtherText: `Would you like to relive the same scenario(s) over again?`,

    subEndText: ``,

    endText: `Sometimes, it's nice to put our experiences in relation to the world. While we are dealing with our
    own problems or having the happiest moments of our lives, the world might be feeling a little depressed or happy with
    you. The information based here pulls from 2019-2023 (more data to be added later) and reflects the happiness of the world. 
    The score is technically based from 1-9 (1 being the unhappiest and 9 being the happiest), but the numbers average to around 5-7.
    Select a date from the bar above within that year range and see how your greatest or worst moments stack up.`

}

const textInput = document.getElementById("textInput");

const yButton = document.getElementById("YButton");
const nsButton = document.getElementById("NSButton");
const nButton = document.getElementById("NButton");

var furtherTextActivated = false;
var endTextActivated = false;
var isTyping;
var alertClicked = false;

var typeSpeed = 10;

var savedSubEndText = ``;

//////////////////////////////////// on start

type(0, typeSpeed, initialQueries.initialText, "initialText", displayTextInputBox); // you can't use paranthesis for the function
// or it will activate immediately and not during execution of the function, also include the paranthesis for the function
// param in the actual function


//////////////////////////////////// event listeners

textInput.addEventListener("input", ()=> {

    if (!furtherTextActivated) {

        furtherTextActivated = true;
        type(0, typeSpeed, initialQueries.furtherText, "furtherText", displayButtons); 
    }
});

yButton.addEventListener("click", function() {displayEndText(1)});
nsButton.addEventListener("click", function() {displayEndText(2)});
nButton.addEventListener("click", function() {displayEndText(3)});

//////////////////////////////////// functions

function displayEndText(inputValue) {

    if (inputValue == 1) {

        initialQueries.subEndText = `That's great! Whether the moment was your darkest moments or your happiest moments, you found
        a little bit of something worthwhile from the experience. Growth is always great.`

    }
    else if (inputValue == 2) {

        initialQueries.subEndText = `Sometimes we may feel ambivalent about our moments, sad or happy. Life is complicated, we don't have
        to figure out everything. Sometimes it's best to be a bit ambiguous. That's always understandable.`
    }
    else if (inputValue == 3) {

        initialQueries.subEndText = `Some moments we don't want to look back on, happy or sad. There's nothing wrong with having
        regrets or mixed feelings about certain moments. It gives is some diversity in perspective.`
    }

    clearsSubsectionOfText(initialQueries.subEndText);
}

function displayTextInputBox() {

    textInput.style.visibility = "visible";
}

function displayButtons() {

    yButton.parentElement.style.visibility = "visible";
}


// typewriter like script for js

function type(i, speed, input, outputElement, func) {

    if (i != (input.length - 1))
        isTyping = true;
    else
        isTyping = false;

    document.getElementById(outputElement).innerHTML += input.charAt(i);

    setTimeout(()=> {
        ((i < input.length - 1) ? type(i+1, speed, input, outputElement, func) : func());
    }, speed);
}

function clearsSubsectionOfText(text) {
    
    if (text == savedSubEndText) {
        return;
    }
    else {

        if (isTyping == false) {

            document.getElementById("subEndText").innerHTML = "";

            type(0, typeSpeed, initialQueries.subEndText, "subEndText", 
                function() {
    
                    if (!endTextActivated) {
    
                        setTimeout(()=> {
    
                            endTextActivated = true;
            
                            type(0, typeSpeed, initialQueries.endText, "endText", function() {
            
                                alert("After you finish reading the text. Please select a date!!!");

                                setTimeout(() => alertClicked = true, 200);
                            })
                        }, 800)
                    }
                }
            )
        }
       
    }
}
