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

function preload() {

    loadJSON(JSON, handleData);
}

function setup() {

    createCanvas(innerWidth, innerHeight);

    graph = new scatterPlotGraph(400, 800, 1400, 700, 12, 4, "Months", "Happiness Score");
}

function draw() {

    background(255);

    graph.update();
    graph.display();


    setGraph();

    var viewerText = null;

    if (currentYearArray[findIndexOfDate()] != undefined) {

        const date = currentYearArray[findIndexOfDate()].date;
        const happinessScore = currentYearArray[findIndexOfDate()].happiness;

        viewerText = `On ${date}, the world showed a happiness score of ${happinessScore}.
        The world was ${determineHappiness(happinessScore)}.`;

        push();
            textAlign(LEFT);
            textSize(20);
            text(viewerText, 100, 900);
        pop();
    }    
}


var currentlySelectedYear = 0;
var currentlySelectedMonth = 0;
var currentlySelectedDay = 0;

function determineHappiness(value) {

    const happinessToFloat = parseFloat(value);

    if (happinessToFloat < 5.9) 
        return "sadder than normal";
    else if (happinessToFloat > 6.1)
        return "happier than normal";
    else 
        return "happy as it usually is";
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

    var index = 0; // used for finding the index of the dataPoint we want to look at


    for (let i = 1; i <= 12; i++) {

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
    


    // month and day

    currentlySelectedMonth = monthSelect.value;
    const currentlySelectedMonthToInt = convertMonthStringToNum(currentlySelectedMonth);

    currentlySelectedDay = daySelect.value;
    const currentlySelectedDayToInt = parseInt(currentlySelectedDay, 10); // we have to subtract 1 because we're doing indexess
        
    for (let i = 1; i <= currentlySelectedMonthToInt; i++) {

        if (i == 12)
            index = -30; // this is to account for the data points plotted between december and january

        (i == currentlySelectedMonthToInt) ? index += daysPerMonth[i - 1] + (currentlySelectedDayToInt - 1) : index += daysPerMonth[i - 1];
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


































