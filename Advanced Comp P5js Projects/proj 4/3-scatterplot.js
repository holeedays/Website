class scatterPlotGraph {

    constructor(xCoordOrigin, yCoordOrigin, maxGraphWidth, maxGraphHeight, numOfIntervalsX, numOfIntervalsY, xAxisLabel, yAxisLabel) {

        // this is where the origin of the graph (0,0) would be located on the canvas

        this.xCoordOrigin = xCoordOrigin;
        this.yCoordOrigin = yCoordOrigin; 

        //////////////////////////////////// all variables related to the axes

        // this is the labels used to denote the axes

        this.xAxisLabel = xAxisLabel;
        this.yAxisLabel = yAxisLabel;

        this.xCharNum = 0;
        this.yCharNum= 0;

        // this is to calculate maximum x coord and y coord when drawing graph

        this.xAxisEndCoord = this.xCoordOrigin + maxGraphWidth;
        this.yAxisEndCoord = this.yCoordOrigin - maxGraphHeight;

        // these are intermediate values meant to be updated for drawing the axes

        this.x = this.xCoordOrigin; 
        this.y = this.yCoordOrigin;

        //////////////////////////////////// these are all variables related to the intervals on the graph (the ticks)

        this.numOfIntervalsX = numOfIntervalsX + 1; // adding the + 1 because we're avoiding drawing the first tick
        this.numOfIntervalsY = numOfIntervalsY + 1;

        // calculating distance between intervals of the graph

        this.distBetweenIntervalsX = (maxGraphWidth - 20)/numOfIntervalsX; 
        this.distBetweenIntervalsY = (maxGraphHeight - 20)/numOfIntervalsY;

        // setting up arrays to capture the x and y coords of the intervals

        this.xIntervals = [];
        this.yIntervals = [];

        // these hold intermediate values meant to updated for drawing the intervals

        this.xInt = [];
        this.yInt = [];

        // these values establish the starting point of the interval

        this.xIntStartCoord = this.xCoordOrigin - 20;
        this.yIntStartCoord = this.yCoordOrigin + 20;

        // 

        this.intervalLength = 40;

        this.yIntervalStartValue = 4.5;
        this.yIntervalEndValue = 6.5;

        // this value is for increasing opacity of the interval labels 

        this.intervalLabelOpacity = 0;



        /////////////////////////////////////////////////// setup

        this.setup();



        ////////////////////////////////////////////////// variables meant for the actual plotting of the coordinates of the graph and other related thing

        this.pointsXCoord = [];
        this.pointsYCoord = [];

        this.strokeDelta = 0;
    }

    setup() {

        this.setupIntervals(); // fix the array intervals

        this.setupStyles();
    }

    update() {

        this.updateAxesAnimation();
        this.updatedIntervalsAnimation();
        this.updateIntervalLabelsAnimation();

        // this.updatePoints(years.yr2019);
    }

    display() {

        this.displayAxes();
        this.displayAxesLabels();
        this.displayIntervals();
        this.displayIntervalLabels();

        this.displayPoints();
    }
    


    

    setupIntervals() {

        for (let i = 0; i < this.numOfIntervalsX; i++) {

            var coord = this.distBetweenIntervalsX * i + this.xCoordOrigin;

            this.xIntervals.push(coord);
            this.yInt.push(this.yIntStartCoord);
        }

        for (let i = 0; i < this.numOfIntervalsY; i++) {

            var coord = -(this.distBetweenIntervalsY * i) + this.yCoordOrigin;

            this.yIntervals.push(coord);
            this.xInt.push(this.xIntStartCoord);
        }
    }

    setupStyles() {

        textSize(20);
        textAlign("center");
        
        angleMode(DEGREES);
    }

    // some extraneous functions used to calculate and mess with other parts of the graph

    mapData(value, lowerLim, upperLim, coordRangeStart, coordRangeEnd) {

        var dataCoord = map(value, lowerLim, upperLim, coordRangeStart, coordRangeEnd);

        return dataCoord;
    }

    resetPoints() {

        this.pointsXCoord.splice(0);
        this.pointsYCoord.splice(0);

        this.strokeDelta = 0;
    }


    updateAxesAnimation() {

        if (this.x < this.xAxisEndCoord)
            this.x += deltaTime;
        else
            this.x = this.xAxisEndCoord;

        if (this.y > this.yAxisEndCoord)
            this.y -= deltaTime;
        else 
            this.y = this.yAxisEndCoord;
    }

    updatedIntervalsAnimation() {

        const delayTime = 2;

        for (let i = 1; i < this.numOfIntervalsX; i++) {

            const speed = deltaTime / (i * delayTime);

            if (this.yIntStartCoord - this.yInt[i] < this.intervalLength)
                this.yInt[i] -= speed;
            else {

                this.yInt[i] = this.yIntStartCoord - this.intervalLength;
                continue;
            }
        }

        for (let i = 1; i < this.numOfIntervalsY; i++) {

            const speed = deltaTime / (i * delayTime);

            if (-this.xIntStartCoord + this.xInt[i] < this.intervalLength)
                this.xInt[i] += speed;
            else 
                this.xInt[i] = this.xIntStartCoord + this.intervalLength;
                continue;
        }
    }

    updateIntervalLabelsAnimation() {

        const opacityUpdateSpeed = 10;
        const updateOpacity = (frameCount % (60 / opacityUpdateSpeed) == 0);

        if (updateOpacity)
            this.intervalLabelOpacity += deltaTime;
    }

    updatePoints(data) {

        this.resetPoints();

        var daysPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < data.length; i++) {

            const monthAndDay = determineMonthAndDay(data[i].date);

            var index = 0;

            switch (monthAndDay[0]) {

                case "01":
                    
                    index = 1;
                    break;
                case "02":

                    index = 2;
                    break;
                case "03":
                
                    index = 3;
                    break;
                case "04":
                
                    index = 4;
                    break;
                case "05":
                
                    index = 5;
                    break;
                case "06":
                
                    index = 6;
                    break;
                case "07":
                
                    index = 7;
                    break;
                case "08":
                
                    index = 8;
                    break;
                case "09":
                
                    index = 9;
                    break;
                case "10":
                
                    index = 10;
                    break;
                case "11":
                
                    index = 11;
                    break;
                case "12":
                
                    index = 0;
                    break;
            }

            if (index != 0) {
                daysPerMonth[index - 1]++;
            }
            else {
                daysPerMonth[12 - 1]++;
            }
        }



        for (let i = 0; i < data.length; i++) {

            const monthAndDay = determineMonthAndDay(data[i].date);

            var index = 0;

            switch (monthAndDay[0]) {

                case "01":
                    
                    index = 1;
                    break;
                case "02":

                    index = 2;
                    break;
                case "03":
                
                    index = 3;
                    break;
                case "04":
                
                    index = 4;
                    break;
                case "05":
                
                    index = 5;
                    break;
                case "06":
                
                    index = 6;
                    break;
                case "07":
                
                    index = 7;
                    break;
                case "08":
                
                    index = 8;
                    break;
                case "09":
                
                    index = 9;
                    break;
                case "10":
                
                    index = 10;
                    break;
                case "11":
                
                    index = 11;
                    break;
                case "12":
                
                    index = 0;
                    break;
            }

            const xCoordRangeStart = this.xIntervals[index];
            const xCoordRangeEnd = this.xIntervals[index + 1];

            const yCoordRangeStart = this.yIntervals[0];
            const yCoordRangeEnd = this.yIntervals[this.yIntervals.length - 1];

            const dayAsInt = parseInt(monthAndDay[1], 10);
            const happinessAsFloat = parseFloat(data[i].happiness, 10);

            var xCoord;
            var yCoord;

            if (index != 0)
                xCoord = this.mapData(dayAsInt, 0, daysPerMonth[index - 1], xCoordRangeStart, xCoordRangeEnd);
            else
                xCoord = this.mapData(dayAsInt, 0, daysPerMonth[12 - 1], xCoordRangeStart, xCoordRangeEnd);

            yCoord = this.mapData(happinessAsFloat, this.yIntervalStartValue, this.yIntervalEndValue, yCoordRangeStart, yCoordRangeEnd);

            this.pointsXCoord.push(xCoord);
            this.pointsYCoord.push(yCoord);
        }
    }



    displayAxes() {

        line(this.xCoordOrigin, this.yCoordOrigin, this.x, this.yCoordOrigin); // display x axis
        line(this.xCoordOrigin, this.yCoordOrigin, this.xCoordOrigin, this.y); // display y axis
    }

    displayAxesLabels() {
    
        const typeSpeed = 15;
        const nextCharReady = (frameCount % (60 / typeSpeed) == 0);

        const labelOffset = 100;

        var xCoord = this.xCoordOrigin + (this.xAxisEndCoord - this.xCoordOrigin) / 2;
        var yCoord = this.yCoordOrigin + labelOffset;

        // display x axis label
        text(this.xAxisLabel.substring(0, this.xCharNum), xCoord, yCoord);
        
        // display y axis label

        push();

            translate(this.xCoordOrigin, this.yCoordOrigin);
            rotate(-90);

            // translated values so x and y coord are done in respect to when the text hasn't been rotated yet
            xCoord = (this.yCoordOrigin - this.yAxisEndCoord) / 2;
            yCoord = -labelOffset;

            text(this.yAxisLabel.substring(0, this.yCharNum), xCoord, yCoord);

        pop();

        if (this.xCharNum < this.xAxisLabel.length && nextCharReady)
            this.xCharNum++;
        if (this.yCharNum < this.yAxisLabel.length && nextCharReady) 
            this.yCharNum++;
    }

    displayIntervals() {
        
        for (let i = 1; i < this.numOfIntervalsX; i++) {

            line(this.xIntervals[i], this.yIntStartCoord, this.xIntervals[i], this.yInt[i]);
        }

        for (let i = 1; i < this.numOfIntervalsY; i++) {

            line(this.xIntStartCoord, this.yIntervals[i], this.xInt[i], this.yIntervals[i]);
        }
    }

    displayIntervalLabels() {

        const months = [

            null,
            "Jan",
            "Feb",
            "Mar",
            "Apr", 
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct", 
            "Nov",
            "Dec"
        ]

        const labelOffset = 20;


        push();

            fill(0, 0, 0, this.intervalLabelOpacity);

            // x axis interval labels
            for (let i = 1; i < this.numOfIntervalsX; i++) {

                text(months[i], this.xIntervals[i], this.yIntStartCoord + labelOffset); 
            }

            // y axis interval labels
            
            for (let i = 1; i < this.numOfIntervalsY; i++) {

                const value = this.yIntervalStartValue + (this.yIntervalEndValue - this.yIntervalStartValue) / (this.numOfIntervalsY - 1) * i;

                text(value, this.xIntStartCoord - labelOffset, this.yIntervals[i]);
            }

        pop();
    }

    displayPoints() {

        push();

            strokeWeight(0.5);
            fill("yellow");

            const speed = 50;

            this.strokeDelta += deltaTime;

            for (let i = 0; i < this.pointsXCoord.length; i++) {

                stroke(255 - speed * this.strokeDelta / i);
                
                line(this.pointsXCoord[i], this.pointsYCoord[i], this.pointsXCoord[i - 1], this.pointsYCoord[i - 1]);

                ellipse(this.pointsXCoord[i], this.pointsYCoord[i], 3);
            }

        pop();
    }
}






// setupPoints(points) { // sets up points for each year

    //     var daysPerMonth = [ // tells us amount of days per month

    //         null,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0,
    //         0
    //     ]

    //     for (let i = 0; i < points.length; i++) {

    //         const month = determineMonth(points[i].date); // object (the year array) has frequency, happiness score, and date

    //         switch (month) {

    //             case "01":
    //                 daysPerMonth[1]++;
    //                 break;
    //             case "02":
    //                 daysPerMonth[2]++;
    //                 break;
    //             case "03":
    //                 daysPerMonth[3]++;
    //                 break;
    //             case "04":
    //                 daysPerMonth[4]++;
    //                 break;
    //             case "05":
    //                 daysPerMonth[5]++;
    //                 break;
    //             case "06":
    //                 daysPerMonth[6]++;
    //                 break;
    //              case "07":
    //                 daysPerMonth[7]++;
    //                 break;
    //             case "08":
    //                 daysPerMonth[8]++;
    //                 break;
    //             case "09":
    //                 daysPerMonth[9]++;
    //                 break;
    //             case "10":
    //                 daysPerMonth[10]++;
    //                 break;
    //             case "11":
    //                 daysPerMonth[11]++;
    //                 break;
    //             case "12":
    //                 daysPerMonth[12]++;
    //                 break;
    //         }
    //     }


    //     // set up xCoords

    //     // var xCoords = [];

    //     // for (let i = 0; i < 12; i++) {

    //     //     var day = 0; // this represents the day of the month
    //     //     const xCoordRangeStart = this.xIntervals[i];
    //     //     const xCoordRangeEnd = this.xIntervals[i + 1];

    //     //     var monthIndex = i;

    //     //     if (i == 0) {

    //     //         monthIndex = 12;
    //     //     }

    //     //     for (let j = 0; j < daysPerMonth[monthIndex]; j++) {

    //     //         const xCoord = this.mapData(day, daysPerMonth[monthIndex], xCoordRangeStart, xCoordRangeEnd);

    //     //         xCoords.push(xCoord);
    //     //         day++;
    //     //     }
    //     // }


    //     // set up yCoords
    //     var yCoords = [];

    //     for (let i = 0; i < points.length; i++) {

    //         const score = points[i].happiness;
    //         const yCoordRangeStart = this.yIntervals[0];
    //         const yCoordRangeEnd = this.yIntervals[this.numOfIntervalsY - 1];

    //         const yCoord = this.mapData(score, this.numOfIntervalsY, yCoordRangeStart, yCoordRangeEnd);

    //         yCoords.push(yCoord);   
    //     }

    //     console.log(xCoords.length, yCoords.length, this.xIntervals.length);

    // }