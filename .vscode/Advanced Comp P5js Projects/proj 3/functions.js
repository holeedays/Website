var Q1Slider, Q1SliderCounter;
var Q2Button1, Q2Button2, Q2Button3, Q2Button4, Q2Button5;
var Q3Button1, Q3Button2, Q3Button3, Q3Button4, Q3Button5;
var Q4Button1, Q4Button2, Q4Button3, Q4Button4, Q4Button5;
var Q5Slider, Q5SliderCounter;
var Q6Slider, Q6SliderCounter;
var Q7Button1, Q7Button2, Q7Button3, Q7Button4, Q7Button5;
var Q8Button1, Q8Button2, Q8Button3, Q8Button4, Q8Button5;
var Q9Button1, Q9Button2, Q9Button3, Q9Button4, Q9Button5;
var Q10Slider, Q10SliderCounter;

var storedValues = {
    Q1: null,
    Q2: null,
    Q3: null,
    Q4: null,
    Q5: null,
    Q6: null,
    Q7: null, 
    Q8: null,
    Q9: null,
    Q10: null
};

// These are the actual functions that run

Setup(); // priming everything here
Update(); // do functions that repeat or go more than once










function Setup() {

    SetupQ1(); // asks about income from family and yourself
    SetupQ2(); // asks about satisfaction with current financial situation
    SetupQ3(); // asks about political majority in residing area
    SetupQ4(); // asks about personal political affiliation
    SetupQ5(); // asks about the relative percentage of people in the residing area who partake in political activity
    SetupQ6(); // asks about the racial diversity of highest education institution
    SetupQ7(); // asks about ethnic/racial background
    SetupQ8(); // asks about degree of personal use of race-based POVs
    SetupQ9(); // asks about satisfaction with current diet
    SetupQ10(); // asks about the proportion of healthy individuals in their place of residence
}

function Update() {

    if (Q1Slider != null) { // this is in the case we move to the next page, SetupQ1() should make its first var (Q1Slider) return null

        UpdateQ1();
        UpdateQ2();
        UpdateQ3();
        UpdateQ4();
        UpdateQ5();
    }
    if (Q6Slider != null) {

        UpdateQ6();
        UpdateQ7();
        UpdateQ8();
        UpdateQ9();
        UpdateQ10();
    }
}






// setups for each question

function SetupQ1() {

    Q1Slider = document.getElementById("Q1Slider");
    Q1SliderCounter = document.getElementById("Q1SliderCounter");
}

function SetupQ2() {

    Q2Button1 = document.getElementById("Q2Button1");
    Q2Button2 = document.getElementById("Q2Button2");
    Q2Button3 = document.getElementById("Q2Button3");
    Q2Button4 = document.getElementById("Q2Button4");
    Q2Button5 = document.getElementById("Q2Button5");
}

function SetupQ3() {

    Q3Button1 = document.getElementById("Q3Button1");
    Q3Button2 = document.getElementById("Q3Button2");
    Q3Button3 = document.getElementById("Q3Button3");
    Q3Button4 = document.getElementById("Q3Button4");
    Q3Button5 = document.getElementById("Q3Button5");
}

function SetupQ4() {

    Q4Button1 = document.getElementById("Q4Button1");
    Q4Button2 = document.getElementById("Q4Button2");
    Q4Button3 = document.getElementById("Q4Button3");
    Q4Button4 = document.getElementById("Q4Button4");
    Q4Button5 = document.getElementById("Q4Button5");
}

function SetupQ5() {

    Q5Slider = document.getElementById("Q5Slider");
    Q5SliderCounter = document.getElementById("Q5SliderCounter");
}

function SetupQ6() {

    Q6Slider = document.getElementById("Q6Slider");
    Q6SliderCounter = document.getElementById("Q6SliderCounter");
}

function SetupQ7() {

    Q7Button1 = document.getElementById("Q7Button1");
    Q7Button2 = document.getElementById("Q7Button2");
    Q7Button3 = document.getElementById("Q7Button3");
    Q7Button4 = document.getElementById("Q7Button4");
    Q7Button5 = document.getElementById("Q7Button5");
}

function SetupQ8() {

    Q8Button1 = document.getElementById("Q8Button1");
    Q8Button2 = document.getElementById("Q8Button2");
    Q8Button3 = document.getElementById("Q8Button3");
    Q8Button4 = document.getElementById("Q8Button4");
    Q8Button5 = document.getElementById("Q8Button5");
}

function SetupQ9() {

    Q9Button1 = document.getElementById("Q9Button1");
    Q9Button2 = document.getElementById("Q9Button2");
    Q9Button3 = document.getElementById("Q9Button3");
    Q9Button4 = document.getElementById("Q9Button4");
    Q9Button5 = document.getElementById("Q9Button5");
}

function SetupQ10() {

    Q10Slider = document.getElementById("Q10Slider");
    Q10SliderCounter = document.getElementById("Q10SliderCounter");
}




// updates for each question

function UpdateQ1() {

    Q1Slider.addEventListener("input", () => {

        storedValues.Q1 = {
            value: Q1Slider.value,
            max: Q1Slider.max,
            min: Q1Slider.min
        }; // store the values, convert an HTML element into an object within storedValues object
        sessionStorage.setItem("storedValueQ1", JSON.stringify(storedValues.Q1)); // send an object to the session storage

        // console.log(JSON.stringify(storedValues.Q1));

        DisplayValue(Q1SliderCounter, storedValues.Q1, 1);
   }); 
}

function UpdateQ2() {

    Q2Button1.addEventListener("click", () => {

        storedValues.Q2 = Q2Button1.innerHTML; // store the value
        sessionStorage.setItem("storedValueQ2", storedValues.Q2);
    
        ResetQuestionButtons(Q2Button1, Q2Button2, Q2Button3, Q2Button4, Q2Button5);
        Q2Button1.className = "buttonClicked";
    });

    Q2Button2.addEventListener("click", () => {

        storedValues.Q2 = Q2Button2.innerHTML;
        sessionStorage.setItem("storedValueQ2", storedValues.Q2);
        
        ResetQuestionButtons(Q2Button1, Q2Button2, Q2Button3, Q2Button4, Q2Button5);
        Q2Button2.className = "buttonClicked";
    });

    Q2Button3.addEventListener("click", () => {

        storedValues.Q2 = Q2Button3.innerHTML;
        sessionStorage.setItem("storedValueQ2", storedValues.Q2);
        
        ResetQuestionButtons(Q2Button1, Q2Button2, Q2Button3, Q2Button4, Q2Button5);
        Q2Button3.className = "buttonClicked";     
    });

    Q2Button4.addEventListener("click", () => {

        storedValues.Q2 = Q2Button4.innerHTML;
        sessionStorage.setItem("storedValueQ2", storedValues.Q2);

        ResetQuestionButtons(Q2Button1, Q2Button2, Q2Button3, Q2Button4, Q2Button5);
        Q2Button4.className = "buttonClicked"; 
    });

    Q2Button5.addEventListener("click", () => {

        storedValues.Q2 = Q2Button5.innerHTML;
        sessionStorage.setItem("storedValueQ2", storedValues.Q2);

        ResetQuestionButtons(Q2Button1, Q2Button2, Q2Button3, Q2Button4, Q2Button5);
        Q2Button5.className = "buttonClicked";
    });

}

function UpdateQ3() {

    Q3Button1.addEventListener("click", () => {

        storedValues.Q3 = Q3Button1.innerHTML; 
        sessionStorage.setItem("storedValueQ3", storedValues.Q3);
    
        ResetQuestionButtons(Q3Button1, Q3Button2, Q3Button3, Q3Button4, Q3Button5);
        Q3Button1.className = "buttonClicked";
    });

    Q3Button2.addEventListener("click", () => {

        storedValues.Q3 = Q3Button2.innerHTML;
        sessionStorage.setItem("storedValueQ3", storedValues.Q3);
        
        ResetQuestionButtons(Q3Button1, Q3Button2, Q3Button3, Q3Button4, Q3Button5);
        Q3Button2.className = "buttonClicked"; 
    });

    Q3Button3.addEventListener("click", () => {

        storedValues.Q3 = Q3Button3.innerHTML;
        sessionStorage.setItem("storedValueQ3", storedValues.Q3);
        
        ResetQuestionButtons(Q3Button1, Q3Button2, Q3Button3, Q3Button4, Q3Button5);
        Q3Button3.className = "buttonClicked";
    });

    Q3Button4.addEventListener("click", () => {

        storedValues.Q3 = Q3Button4.innerHTML;
        sessionStorage.setItem("storedValueQ3", storedValues.Q3);

        ResetQuestionButtons(Q3Button1, Q3Button2, Q3Button3, Q3Button4, Q3Button5);
        Q3Button4.className = "buttonClicked";
    });

    Q3Button5.addEventListener("click", () => {

        storedValues.Q3 = Q3Button5.innerHTML;
        sessionStorage.setItem("storedValueQ3", storedValues.Q3);

        ResetQuestionButtons(Q3Button1, Q3Button2, Q3Button3, Q3Button4, Q3Button5);
        Q3Button5.className = "buttonClicked";
    });
}

function UpdateQ4() {

    Q4Button1.addEventListener("click", () => {

        storedValues.Q4 = Q4Button1.innerHTML; 
        sessionStorage.setItem("storedValueQ4", storedValues.Q4);
    
        ResetQuestionButtons(Q4Button1, Q4Button2, Q4Button3, Q4Button4, Q4Button5);
        Q4Button1.className = "buttonClicked";
    });

    Q4Button2.addEventListener("click", () => {

        storedValues.Q4 = Q4Button2.innerHTML;
        sessionStorage.setItem("storedValueQ4", storedValues.Q4);
        
        ResetQuestionButtons(Q4Button1, Q4Button2, Q4Button3, Q4Button4, Q4Button5);
        Q4Button2.className = "buttonClicked";
    });

    Q4Button3.addEventListener("click", () => {

        storedValues.Q4 = Q4Button3.innerHTML;
        sessionStorage.setItem("storedValueQ4", storedValues.Q4);
        
        ResetQuestionButtons(Q4Button1, Q4Button2, Q4Button3, Q4Button4, Q4Button5);
        Q4Button3.className = "buttonClicked";
    });

    Q4Button4.addEventListener("click", () => {

        storedValues.Q4 = Q3Button4.innerHTML;
        sessionStorage.setItem("storedValueQ4", storedValues.Q4);

        ResetQuestionButtons(Q4Button1, Q4Button2, Q4Button3, Q4Button4, Q4Button5);
        Q4Button4.className = "buttonClicked";
    });

    Q4Button5.addEventListener("click", () => {

        storedValues.Q4 = Q4Button5.innerHTML;
        sessionStorage.setItem("storedValueQ4", storedValues.Q4);

        ResetQuestionButtons(Q4Button1, Q4Button2, Q4Button3, Q4Button4, Q4Button5);
        Q4Button5.className = "buttonClicked";
    });
}

function UpdateQ5() {

    Q5Slider.addEventListener("input", () => {

        storedValues.Q5 = {
            value: Q5Slider.value,
            max: Q5Slider.max,
            min: Q5Slider.min
        }; 
        sessionStorage.setItem("storedValueQ5", JSON.stringify(storedValues.Q5));

        DisplayValue(Q5SliderCounter, storedValues.Q5, 5);
   }); 
}

function UpdateQ6() {

    Q6Slider.addEventListener("input", () => {

        storedValues.Q6 = {
            value: Q6Slider.value,
            max: Q6Slider.max,
            min: Q6Slider.min
        }; 
        sessionStorage.setItem("storedValueQ6", JSON.stringify(storedValues.Q6));

        DisplayValue(Q6SliderCounter, storedValues.Q6, 6);
   }); 
}

function UpdateQ7() {

    Q7Button1.addEventListener("click", () => {

        storedValues.Q7 = Q7Button1.innerHTML; // store the value
        sessionStorage.setItem("storedValueQ7", storedValues.Q7);
    
        ResetQuestionButtons(Q7Button1, Q7Button2, Q7Button3, Q7Button4, Q7Button5);
        Q7Button1.className = "buttonClicked";
    });

    Q7Button2.addEventListener("click", () => {

        storedValues.Q7 = Q7Button2.innerHTML;
        sessionStorage.setItem("storedValueQ7", storedValues.Q7);
        
        ResetQuestionButtons(Q7Button1, Q7Button2, Q7Button3, Q7Button4, Q7Button5);
        Q7Button2.className = "buttonClicked";
    });

    Q7Button3.addEventListener("click", () => {

        storedValues.Q7 = Q7Button3.innerHTML;
        sessionStorage.setItem("storedValueQ7", storedValues.Q7);
        
        ResetQuestionButtons(Q7Button1, Q7Button2, Q7Button3, Q7Button4, Q7Button5);
        Q7Button3.className = "buttonClicked";     
    });

    Q7Button4.addEventListener("click", () => {

        storedValues.Q7 = Q7Button4.innerHTML;
        sessionStorage.setItem("storedValueQ7", storedValues.Q7);

        ResetQuestionButtons(Q7Button1, Q7Button2, Q7Button3, Q7Button4, Q7Button5);
        Q7Button4.className = "buttonClicked";
    });

    Q7Button5.addEventListener("click", () => {

        storedValues.Q7 = Q7Button5.innerHTML;
        sessionStorage.setItem("storedValueQ7", storedValues.Q7);

        ResetQuestionButtons(Q72Button1, Q7Button2, Q7Button3, Q7Button4, Q7Button5);
        Q7Button5.className = "buttonClicked";
    });
}

function UpdateQ8() {

    Q8Button1.addEventListener("click", () => {

        storedValues.Q8 = Q8Button1.innerHTML; 
        sessionStorage.setItem("storedValueQ8", storedValues.Q8);
    
        ResetQuestionButtons(Q8Button1, Q8Button2, Q8Button3, Q8Button4, Q8Button5);
        Q8Button1.className = "buttonClicked";
    });

    Q8Button2.addEventListener("click", () => {

        storedValues.Q8 = Q8Button2.innerHTML;
        sessionStorage.setItem("storedValueQ8", storedValues.Q8);
        
        ResetQuestionButtons(Q8Button1, Q8Button2, Q8Button3, Q8Button4, Q8Button5);
        Q8Button2.className = "buttonClicked";
    });

    Q8Button3.addEventListener("click", () => {

        storedValues.Q8 = Q8Button3.innerHTML;
        sessionStorage.setItem("storedValueQ8", storedValues.Q8);
        
        ResetQuestionButtons(Q8Button1, Q8Button2, Q8Button3, Q8Button4, Q8Button5);
        Q8Button3.className = "buttonClicked";
    });

    Q8Button4.addEventListener("click", () => {

        storedValues.Q8 = Q8Button4.innerHTML;
        sessionStorage.setItem("storedValueQ8", storedValues.Q8);

        ResetQuestionButtons(Q8Button1, Q8Button2, Q8Button3, Q8Button4, Q8Button5);
        Q8Button4.className = "buttonClicked";
    });

    Q8Button5.addEventListener("click", () => {

        storedValues.Q8 = Q8Button5.innerHTML;
        sessionStorage.setItem("storedValueQ8", storedValues.Q8);

        ResetQuestionButtons(Q8Button1, Q8Button2, Q8Button3, Q8Button4, Q8Button5);
        Q8Button5.className = "buttonClicked";
    });
}

function UpdateQ9() {

    Q9Button1.addEventListener("click", () => {

        storedValues.Q9 = Q9Button1.innerHTML; 
        sessionStorage.setItem("storedValueQ9", storedValues.Q9);
    
        ResetQuestionButtons(Q9Button1, Q9Button2, Q9Button3, Q9Button4, Q9Button5);
        Q9Button1.className = "buttonClicked";
    });

    Q9Button2.addEventListener("click", () => {

        storedValues.Q9 = Q9Button2.innerHTML;
        sessionStorage.setItem("storedValueQ9", storedValues.Q9);
        
        ResetQuestionButtons(Q9Button1, Q9Button2, Q9Button3, Q9Button4, Q9Button5);
        Q9Button2.className = "buttonClicked";
    });

    Q9Button3.addEventListener("click", () => {

        storedValues.Q9 = Q9Button3.innerHTML;
        sessionStorage.setItem("storedValueQ9", storedValues.Q9);
        
        ResetQuestionButtons(Q9Button1, Q9Button2, Q9Button3, Q9Button4, Q9Button5);
        Q9Button3.className = "buttonClicked";
    });

    Q9Button4.addEventListener("click", () => {

        storedValues.Q9 = Q9Button4.innerHTML;
        sessionStorage.setItem("storedValueQ9", storedValues.Q9);

        ResetQuestionButtons(Q9Button1, Q9Button2, Q9Button3, Q9Button4, Q9Button5);
        Q9Button4.className = "buttonClicked";
    });

    Q9Button5.addEventListener("click", () => {

        storedValues.Q9 = Q9Button5.innerHTML;
        sessionStorage.setItem("storedValueQ9", storedValues.Q9);

        ResetQuestionButtons(Q9Button1, Q9Button2, Q9Button3, Q9Button4, Q9Button5);
        Q9Button5.className = "buttonClicked";
    });
}

function UpdateQ10() {

    Q10Slider.addEventListener("input", () => {

        storedValues.Q10 = {
            value: Q10Slider.value,
            max: Q10Slider.max,
            min: Q10Slider.min
        }; 
        sessionStorage.setItem("storedValueQ10", JSON.stringify(storedValues.Q10));

        DisplayValue(Q10SliderCounter, storedValues.Q10, 10);
   }); 
}

// functions

function DisplayValue(htmlVar, value, questionNum) {

    var valueDisplayed;

    valueDisplayed = value.value;

    switch (questionNum) {

        case 1: 
            if (valueDisplayed == value.max)
                valueDisplayed = `$ ${value.max} +`;
            else if (valueDisplayed == value.min)
                valueDisplayed = "Not Sure/No Income";
            else 
                valueDisplayed = `$ ${valueDisplayed}`;
            break;
        case 5:
            if (valueDisplayed == value.max)
                valueDisplayed = `Almost everyone`;
            else if (valueDisplayed == value.min)
                valueDisplayed = "Not Sure/Approx. 0%";
            else 
                valueDisplayed = `Approx. ${valueDisplayed}%`;
            break;
        case 6:
            if (valueDisplayed == value.max)
                valueDisplayed = `Almost everyone`;
            else if (valueDisplayed == value.min)
                valueDisplayed = "Not Sure/Approx. 0%";
            else 
                valueDisplayed = `Approx. ${valueDisplayed}%`;
            break;
        case 10:
            if (valueDisplayed == value.max)
                valueDisplayed = `Almost everyone`;
            else if (valueDisplayed == value.min)
                valueDisplayed = "Not Sure/Approx. 0%";
            else 
                valueDisplayed = `Approx. ${valueDisplayed}%`;
            break;
    }

    htmlVar.innerHTML = `${valueDisplayed}`;
}

// force reset all buttons for a specific question

function ResetQuestionButtons(button1, button2, button3, button4, button5) {

    button1.className = "buttonUnclicked";
    button2.className = "buttonUnclicked";
    button3.className = "buttonUnclicked";
    button4.className = "buttonUnclicked";
    button5.className = "buttonUnclicked";
}

// function Update(variable) {

//     console.log(variable);

//     Update();
// }

