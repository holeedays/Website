function handleData(data) {

    for (let i = 0; i < data.objects.length; i++) {

        const year = determineYear(data.objects[i].date);
        const dataInstance = data.objects[i];
       
        switch (year) {

            case "2019":
                years.yr2019.push(dataInstance);
                break;

            case "2020":
                years.yr2020.push(dataInstance);
                break;
            
            case "2021":
                years.yr2021.push(dataInstance);
                break;

            case "2022":
                years.yr2022.push(dataInstance);
                break;

            case "2023":
                years.yr2023.push(dataInstance);
                break;
        }
    }

    // organize dates into consecutive order (cause JSON order is kind of random)

    years.yr2019 = organizeDates(years.yr2019);
    years.yr2020 = organizeDates(years.yr2020);
    years.yr2021 = organizeDates(years.yr2021);
    years.yr2022 = organizeDates(years.yr2022);
    years.yr2023 = organizeDates(years.yr2023);
}

function determineYear(string) {

    const regex = "\\d+"; // regex for determining if a string has a digit (i.e. 0-9)
    var year = ""; // the year # in string format
    var startingIndex = 0; // move further on in string

    while (year.length != 4) {

        year = "";

        for (let i = startingIndex; i < string.length; i++) {

            const char = string.charAt(i);

            if (char.match(regex)){

                    year += char;
            }
            else {

                break;
            } 
        }

        startingIndex++;
    }

    return year;
}


function determineMonthAndDay(string) {

    var month = "";
    var day = "";


    const monthIndex = string.indexOf("-");
    const dayIndex = string.indexOf("-", monthIndex + 1);

    for (let i = monthIndex + 1; i < monthIndex + 3; i++) {

        const char = string.charAt(i);

        month += char;
    }

    for (let i = dayIndex + 1; i < dayIndex + 3; i++) {

        const char = string.charAt(i);

        day += char;
    }

    return [month, day];
}


function organizeDates(data) {

    var months = {

        jan: [],
        feb: [],
        mar: [],
        apr: [],
        may: [],
        jun: [],
        jul: [],
        aug: [],
        sept: [],
        oct: [],
        nov: [],
        dec: []
    }

    // organize indexes into their respective month and in consecutive order

    for (let i = 0; i < data.length; i++) {


        const monthAndDay = determineMonthAndDay(data[i].date);

        const dayAsInt = parseInt(monthAndDay[1], 10);

        // push to each bracket the month and index
        switch (monthAndDay[0]) { // 0th element is month, 1st element is day

            case "01":

                ///////////////////// this is what the original code for organizeArray looked like

                // if (months.jan.length == 0)
                //     months.jan.push([monthAndDay, i]);
                // else {

                //     var savedPos = 0;

                //     for (let j = 0; j < months.jan.length; j++) {

                //         const currentDayAsInt = parseInt(months.jan[j][0][1], 10); 
                        
                //         if (!(dayAsInt < currentDayAsInt)) {

                //             savedPos++;
                //         }
                //         else {

                //             months.jan.splice(savedPos, 0, [monthAndDay, i]);
                //             break;
                //         }
                        
                //         if (savedPos == months.jan.length) {

                //             months.jan.push([monthAndDay, i]);
                //             break;
                //         }
                //     }
                // }

                organizeArray(months.jan, monthAndDay, i, dayAsInt);
                
                break;
            case "02":

                organizeArray(months.feb, monthAndDay, i, dayAsInt);

                break;
            case "03":
            
                organizeArray(months.mar, monthAndDay, i, dayAsInt);

                break;
            case "04":
            
                organizeArray(months.apr, monthAndDay, i, dayAsInt); 

                break;
            case "05":
            
                organizeArray(months.may, monthAndDay, i, dayAsInt);

                break;
            case "06":
            
                organizeArray(months.jun, monthAndDay, i, dayAsInt);

                break;
            case "07":
            
                organizeArray(months.jul, monthAndDay, i, dayAsInt);

                break;
            case "08":
            
                organizeArray(months.aug, monthAndDay, i, dayAsInt);

                break;
            case "09":
            
                organizeArray(months.sept, monthAndDay, i, dayAsInt);

                break;
            case "10":
            
                organizeArray(months.oct, monthAndDay, i, dayAsInt);

                break;
            case "11":
            
                organizeArray(months.nov, monthAndDay, i, dayAsInt);

                break;
            case "12":
            
                organizeArray(months.dec, monthAndDay, i, dayAsInt);

                break;
        }
    }


    // creating an array with all the data organized in consecutive order

    var dataReorganized = [];


    for (let i = 0; i < months.jan.length; i++)
        dataReorganized.push(data[months.jan[i][1]]);

    for (let i = 0; i < months.feb.length; i++)
        dataReorganized.push(data[months.feb[i][1]]);

    for (let i = 0; i < months.mar.length; i++)
        dataReorganized.push(data[months.mar[i][1]]);

    for (let i = 0; i < months.apr.length; i++)
        dataReorganized.push(data[months.apr[i][1]]);

    for (let i = 0; i < months.may.length; i++)
        dataReorganized.push(data[months.may[i][1]]);

    for (let i = 0; i < months.jun.length; i++)
        dataReorganized.push(data[months.jun[i][1]]);

    for (let i = 0; i < months.jul.length; i++)
        dataReorganized.push(data[months.jul[i][1]]);

    for (let i = 0; i < months.aug.length; i++)
        dataReorganized.push(data[months.aug[i][1]]);

    for (let i = 0; i < months.sept.length; i++)
        dataReorganized.push(data[months.sept[i][1]]);

    for (let i = 0; i < months.oct.length; i++)
        dataReorganized.push(data[months.oct[i][1]]);

    for (let i = 0; i < months.nov.length; i++)
        dataReorganized.push(data[months.nov[i][1]]);
    
    for (let i = 0; i < months.dec.length; i++)
        dataReorganized.splice(i, 0, data[months.dec[i][1]]);


    // return this new array, for some reason, setting the data equal to this new array in the function causes problems

    return dataReorganized;
}

function organizeArray(array, value1, value2, value3) {

    if (array.length == 0)
        array.push([value1, value2]);
    else {

        var savedPos = 0;

        for (let j = 0; j < array.length; j++) {

            const arrayValue = parseInt(array[j][0][1], 10); 
            
            if (!(value3 < arrayValue)) {

                savedPos++;
            }
            else {

                array.splice(savedPos, 0, [value1, value2]);
                break;
            }
            
            if (savedPos == array.length) {

                array.push([value1, value2]);
                break;
            }
        }
    }
}