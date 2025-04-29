var limit = 1606;
var JSON = "https://hedonometer.org/api/v1/happiness/?format=json&timeseries__title=en_all&date__gte=2019-01-01&limit=" + limit;

var years = {

    yr2019: [],
    yr2020: [],
    yr2021: [],
    yr2022: [],
    yr2023: []
}
var currentYearArray = [];

var graph;

var font;

function preload() {

    loadJSON(JSON, handleData);

    font = loadFont("Advanced Comp P5js Projects/proj 4/TT Chocolates Trial Regular.otf");
}

function setup() {

    createCanvas(innerWidth - 400, innerHeight - 75).parent("sketch");
    textFont(font);

    graph = new scatterPlotGraph(180, 800, 1400, 700, 12, 4, "Months", "Happiness Score");
}

function draw() {

    background(240);

    if (alertClicked) { // this bool is from 5-description.js

        graph.update();
        graph.display();

    }

    setGraph();
    setDescriptiontext();    
}

var currentlySelectedYear = 0;
var currentlySelectedMonth = 0;
var currentlySelectedDay = 0;





function setDescriptiontext() {

    var viewerText = null;

    if (currentYearArray[findIndexOfDate()] != undefined) {

        const date = currentYearArray[findIndexOfDate()].date;
        const happinessScore = currentYearArray[findIndexOfDate()].happiness;

        viewerText = `On ${date}, the world showed a happiness score of ${happinessScore}.
        The world was ${determineHappiness(happinessScore)}.`;

        push();

            noFill();

            textAlign(RIGHT);
            textSize(15);

            stroke(161, 170, 39, 200);

            text(viewerText, innerWidth - 450, 50);

        pop();
    }    
}


function determineHappiness(value) {

    const happinessToFloat = parseFloat(value);

    if (happinessToFloat < 5.9) 
        return "sadder than normal";
    else if (happinessToFloat > 6.1)
        return "happier than normal";
    else 
        return "as happy as it usually is";
}


function setGraph() {

    // year
    
    if (yearSelect.value != currentlySelectedYear) {

        currentlySelectedYear = yearSelect.value;

        if (yearSelect.value == 2019) {

            graph.updatePoints(years.yr2019);
            currentYearArray = years.yr2019;
        }
        else if (yearSelect.value == 2020) {
    
            graph.updatePoints(years.yr2020);
            currentYearArray = years.yr2020;
        }
        else if (yearSelect.value == 2021) {

            graph.updatePoints(years.yr2021);
            currentYearArray = years.yr2021;
        }
        else if (yearSelect.value == 2022) {

            graph.updatePoints(years.yr2022);
            currentYearArray = years.yr2022;
        }
        else if (yearSelect.value == 2023) {

            graph.updatePoints(years.yr2023)
            currentYearArray = years.yr2023;
        }
        else {

            graph.updatePoints([]);
        }
    }
}

function findIndexOfDate() {

    var daysPerMonth = [];

    for (let i = 1; i <= 12; i++) {

        if (i <= 7) { // nested if statements sigh

            if (i % 2 == 1)
                daysPerMonth.push(31);
            else if (i == 2) {
                const currentlySelectedYearToInt = parseInt(currentlySelectedYear, 10);
            if (currentlySelectedYearToInt % 4 != 0)
                daysPerMonth.push(28);
            else
                daysPerMonth.push(29);
        }
            else
                daysPerMonth.push(30);
        }
        else {

            if (i % 2 == 0)
                daysPerMonth.push(31);
            else 
                daysPerMonth.push(30);

        }
    }

    // month and day

    currentlySelectedMonth = monthSelect.value;
    const currentlySelectedMonthToInt = convertMonthStringToNum(currentlySelectedMonth);

    currentlySelectedDay = daySelect.value;
    const currentlySelectedDayToInt = parseInt(currentlySelectedDay, 10); 

    var index = (currentYearArray.length == years.yr2023.length) ? -1 : 30;  // used for finding the index of the dataPoint we want to look at, accounts for the incomplete data on yr 2023 graph too

    for (let i = 0; i < currentlySelectedMonthToInt; i++) {

        if (i + 1 == currentlySelectedMonthToInt && i == 0) { // if only january selected

            index += currentlySelectedDayToInt;
        }
        else if (i + 1 == currentlySelectedMonthToInt && i == 11) {

            index = currentlySelectedDayToInt - 1;
        }
        else {

            index += (i == currentlySelectedMonthToInt - 1) ? currentlySelectedDayToInt : daysPerMonth[i]; 
        }
    } 

    return index;
}

function convertMonthStringToNum (string) {

    switch (string) {

        case "January":
            return 1;
        case "February":
            return 2;
        case "March":
            return 3;
        case "April":
            return 4;
        case "May":
            return 5;
        case "June":
            return 6;
        case "July":
            return 7;
        case "August":
            return 8;
        case "September":
            return 9;
        case "October":
            return 10;
        case "November":
            return 11;
        case "December":
            return 12;
    }
}


































