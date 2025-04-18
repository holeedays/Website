

var storedValues = { // not to be mixed with storedValues in the other html file
    Q1: JSON.parse(sessionStorage.getItem("storedValueQ1")),
    Q2: sessionStorage.getItem("storedValueQ2"),
    Q3: sessionStorage.getItem("storedValueQ3"),
    Q4: sessionStorage.getItem("storedValueQ4"),
    Q5: JSON.parse(sessionStorage.getItem("storedValueQ5")),
    Q6: JSON.parse(sessionStorage.getItem("storedValueQ6")),
    Q7: sessionStorage.getItem("storedValueQ7"),
    Q8: sessionStorage.getItem("storedValueQ8"),
    Q9: sessionStorage.getItem("storedValueQ9"),
    Q10: JSON.parse(sessionStorage.getItem("storedValueQ10"))
}

var Q1Results = document.getElementById("Q1Results"); 
var Q2Results = document.getElementById("Q2Results");
var Q3Results = document.getElementById("Q3Results");
var Q4Results = document.getElementById("Q4Results");
var Q5Results = document.getElementById("Q5Results");
var Q6Results = document.getElementById("Q6Results");
var Q7Results = document.getElementById("Q7Results");
var Q8Results = document.getElementById("Q8Results");
var Q9Results = document.getElementById("Q9Results");
var Q10Results = document.getElementById("Q10Results");


var resetQuiz = document.getElementById("resetQuiz"); // var for anchor
var resetQuiz1 = document.getElementById("resetQuiz1"); // another var for anchor


// actual functions that run, sometimes return a failed to get renderer error

ResetQuiz();
DisplayResults();





function DisplayResults() {

    SliderQuestionResults(1, storedValues.Q1, Q1Results);
    SliderQuestionResults(5, storedValues.Q5, Q5Results);
    SliderQuestionResults(6, storedValues.Q6, Q6Results);
    SliderQuestionResults(10, storedValues.Q10, Q10Results);

    ButtonQuestionsResults(2, storedValues.Q2, Q2Results);
    ButtonQuestionsResults(3, storedValues.Q3, Q3Results);
    ButtonQuestionsResults(4, storedValues.Q4, Q4Results);
    ButtonQuestionsResults(7, storedValues.Q7, Q7Results);
    ButtonQuestionsResults(8, storedValues.Q8, Q8Results);
    ButtonQuestionsResults(9, storedValues.Q9, Q9Results);

}

function SliderQuestionResults(questionNum, input, htmlVar) {

    if (input != null) {

        switch (questionNum) {

            case 1: // combine fam and personal income question
                
                if (input.value >= (input.max - 60000)) // if income greater than or equal to 100,000 
                    htmlVar.innerHTML = 
                    `You and your family earn a total income of $${input.value}, putting you at the upper middle class bracket.
                    Being relatively well off, you may or may not experience a mix of emotions, including entitlement, a sense of vulnerability,
                    and potential social isolation. You may also experience increased anxiety regarding maintaining your current
                    economic status and with dealing with potential envy and jealousy from those around you.`;

                else if (input.value <= (input.min + 40000)) // if income less than or equal to 40,000
                    htmlVar.innerHTML = 
                    `You and your family earn a total income of $${input.value}, putting you at the lower middle class bracket.
                    Being in a poor environment, you may experience a sense of being stuck, a sense of being "too much" to be poor and 
                    "not enough" to be comfortable, and the constant juggling of basic survival and aspirations for more.` 

                else if (input.value > (input.min) && input.value < (input.max - 60000))
                    htmlVar.innerHTML = 
                    `You and your family earn a total income of $${input.value}, putting you at the median middle class bracket.
                    Being in a relatively stable environment, you may feel stable, content, and secure in life. However, you may also 
                    be anxious about the future and when comparing yourself to others. This is especially the case if you reside in
                    an area full of people who are more well off.`
                break;

            case 5: // local community participation in politics

                if (input.value >= (input.max - 65)) // if % is greater than or equal to 65%
                    htmlVar.innerHTML = 
                        `The percentage of people that participate in politics in your local area is approximately ${input.value}%.
                        A highly poltiically involved area tends to generally mean a more involved and happier environment. Empirical 
                        evidence has shown that people who vote in presidential elections report feeling more empowered, enjoying greater
                        life satisfaction, possessing a better sense of well-being, and having higher levels of self-rated health than
                        nonvoters.`

                else if (input.value <= (input.min + 35)) // if % is less than or equal to 35%
                    htmlVar.innerHTML = 
                        `The percentage of people that participate in politics in your local area is approximately ${input.value}%.
                        A low poltiically involved area tends to generally mean a less involved and more depressed environment. Empirical 
                        evidence has shown that a lack of poltical engagement is linked with an increase in depressive disorders.`

                else if (input.value < (input.max - 35) && input.value > (input.min + 35)) // if % is between 35 to 75
                    htmlVar.innerHTML =
                        `The percentage of people that participate in politics in your local area is approximately ${input.value}%.
                        This environment could benefit from more poltiical engagement as it shown to correlate with increased satisfaction 
                        and happiness. Less polticial engagement has been shown to lead to an increase in negative psychological factors
                        like depression.`
                break;

            case 6: // school diversity percentage
        
                if (input.value >= (input.max - 35)) // if % is greater than or equal to 65%
                    htmlVar.innerHTML = 
                        `Your school's diversity is approximately ${input.value}%. A highly diverse academic environment may offer significant benefits, such
                        as increased personal, social, and academic development. It can also increase your understanding, empathy, and ability
                        to navigate perspectives very different from your own.`

                else if (input.value <= (input.min + 35)) // if % is less than or equal to 35%
                    htmlVar.innerHTML = 
                        `Your school's diversity is approximately ${input.value}%. A lack of diversity in an academic environment can lead to a sense of
                        isolation, marginalization, and decreased well-being - particularly if you are the minority.` 

                else if (input.value < (input.max - 35) && input.value > (input.min + 35)) // if % is between 35 to 75
                    htmlVar.innerHTML =
                        `Your school's diversity is approximately ${input.value}%. You have a relatively balanced academic environment, which allows
                        for an increase in diverse perspectives - and an improvement in your own point of view. You may or may not
                        experience some feelings of isolation and marginalization at times, but often have an array of people to support you.`
                break;

            case 10: 

                if (input.value >= (input.max - 35)) // if % is greater than or equal to 65%
                    htmlVar.innerHTML = 
                        `${input.value}% of your local community would be considered healthy. A high proportion of healthy individuals (physically and mentally)
                        can foster an environment that improves well-being, reduces stress, and promotes positive social interactions. Poor dietary, sleeping,
                        social habits can be alleviated with this incresed exposure to healthy lifestyles.`

                else if (input.value <= (input.min + 35)) // if % is less than or equal to 35%
                    htmlVar.innerHTML = 
                        `${input.value}% of your local community would be considered healthy. A low proportion of heavy individuals (physically and mentally) can create a poor
                        environment in which you and other individuals may feel isolated, stressed, or out of sync with the social environment. Poor exisitng social, dietary, 
                        and sleeping habits may be further encouraged or even exacerbated.` 

                else if (input.value < (input.max - 35) && input.value > (input.min + 35)) // if % is between 35 to 75
                    htmlVar.innerHTML =
                        `${input.value}% of your local community would be considered healthy. This mix of healthy and unhealthy individuals creates a balance:
                        in some cases, you may experience an environment that encourages improved wellbeing and reduced stress while, at the same time, you may experience
                        an environment that promotes the opposite. In such cases, it's primarily up to your choice as to which sort of indiviudals you tend to associate with.`

                break;
        }
    }
}

function ButtonQuestionsResults(questionNum, input, htmlVar) {

    if (input != null) {

        input = CleanString(input); // removes all whitespaces and invisible characters

        switch (questionNum) {

            case 2: // satisfaction with personal financial situation

                    if (input == "Unsatisfied" || input == "Slightly Unsatisfied") // dissatisfied with finance
                        htmlVar.innerHTML =
                        `You're ${input.toLowerCase()} with your current financial situation. Individuals who are unsatisfied financially are linked
                        to an increased likelihood of suffering stress, anxiety, and - possibly - depression. Feelings of inadequacy,
                        worthlessness, and hopelessness related to their financial situation contributes to these developments.`
                    else if (input == "Satisfied" || input == "Slightly Satisfied") // satisfied with finance
                        htmlVar.innerHTML = 
                        `You're ${input.toLowerCase()} with your current financial situation. Individuals who are satisifed financially tend to
                        be satisfied in all domains of their lives: tending to feel higher levels of overall happiness and consistent
                        positive emotional states.`
                    else if (`${input}` == "Don't Know") // not sure
                        htmlVar.innerHTML = 
                        `You're ${input.toLowerCase()} with your current financial situation. It may be so that you're partially satisfied or unsatisfied
                        at the times, but money doesn't have as much of an effect to you compared to others: money to you may provide more so an
                        ends than a mean.`
                break;

            case 3: // local community (more macro, like town or city) poltical orientation

                if (input == "Heavily Liberal") // strongly left wing
                    htmlVar.innerHTML =
                    `Your community is ${input.toLowerCase()}. Having such a left wing tendency implies a progressive enviroment. As such, rapid change and
                    disorder are often wlecomed and embraced. However, some liberal idealisms (especially left-wing extremist ideologies)
                    might promote themes like violence and decentralization of power: which can increase disorder and instability  (anarchy) while simulatenously
                    promoting desensitization with morally "wrong" issues.`
                else if (input == "Heavily Conservative") // strongly right wing
                    htmlVar.innerHTML = 
                    `Your community is ${input.toLowerCase()}. Having such a right wind tendency implies a heavily conservative environment. 
                    Change is often disregarded for a more traditional environment, where moral values and ethics are heavily ptomoted. Despite a lack of change, 
                    the community is well organized and predictable.`
                else if (
                    `${input}` == "Split/Undecided" || 
                    `${input}` == "Slightly Liberal" || 
                    `${input}` == "Slightly Conservative") // slightly right or left or undecided, subject to change
                    htmlVar.innerHTML = 
                    `Your community is ${input.toLowerCase()}. This means that your environment is probably a mix of both political ideologies: change is embraced
                    at times, but sometimes conformity and traditional adherence is preferred. Diversity of opinion and thought is celebrated as people
                    of all ranges of the political spectrum engage in discourse with one another.`
                break;

            case 4: // personal poltical affiliation

                if (input == "Heavily Liberal") // strongly left wing
                    htmlVar.innerHTML =
                    `You personally identify as ${input.toLowerCase()}. Liberals tend to enjoy and are open to new experiences. They like creativity and feel
                    more comfortable with ambiguity, complexity, and nuance (i.e. they are more comfortable with change and disorder). Liberal individuals
                    are less senstivie to issues of "purity" (morality) and instead use congnitive reappraisals when exposed to disgusting stimuli, which
                    lessens the disgust response. They also enjoy univeral values and self direction.`
                else if (input == "Heavily Conservative") // strongly right wing
                    htmlVar.innerHTML = 
                    `You personally identify as ${input.toLowerCase()}. Conservatives prefer stability, tradition, order, and conformity; they are uncomfortable
                    with ambiguity. They seek security and view ambiguous faces as more threatening. They value conscientiousness and conformity over change
                    and originality. Conservatives also have a greater sensitivity to issues of "purity" and have a greater disgust response under cetrain conditions.`
                else if (
                    `${input}` == "Split/Undecided" || 
                    `${input}` == "Slightly Liberal" || 
                    `${input}` == "Slightly Conservative") // slightly right or left or undecided, subject to change
                    htmlVar.innerHTML = 
                    `You personally identify as ${input.toLowerCase()}. Being in the middle or in more moderate parts of the political spectrum, individuals are open
                    to certain liberal and conservative values on a situational basis. They may tend to be open to new and ambiguous experiences and less so in others. 
                    They may also choose or pick to engage when it comes to situations of "purity": it more so comes down to their personal values and alignments.`
                break;

            case 7:  // personal racial identity

                if (input == "White") // if identify as "white" (may imply European descent as well)
                    htmlVar.innerHTML = 
                    `(Note: these results only apply if you're residing in the United States). Your racial identity/ethnicity is ${input.toLowerCase()}. Being part of the majority,
                    white people often have increased perception and sensitivity to demographic shifts, status maintenance, and protential threats to their group identity.
                    These perceptions can lead to reactions that increase political conservatvism, altered perceptions of race, and increased fear about losing power and 
                    economic standing.`
                else if (
                    input == "Asian/Pacific Islander" ||
                    input == "African American" ||
                    input == "Hispanic/Latino") // identify as major minority groups
                    htmlVar.innerHTML = 
                    `(Note: these results only apply if you're residing in the United States). Your racial identity/ethnicity is ${input.toLowerCase()}. Though your racial group
                    makes up a large chunk of the total US population, they are still considered colloquially as minorities. Minorities are often affected by factors
                    like minority stress, perceptions of discrimination, the impact of systemic racism, and fears of demographc shifts. This can lead to a decline in mental health
                    and incrased likelihood of having problems like depression, anxiety, and PTSD.`
                else if (input = "Other") // identify as mixed or much smaller minority groups not listed (like native americans)
                    htmlVar.innerHTML = 
                    `(Note: these results only apply if you're residing in the United States). Your racial identity/ethnicity is ${input.toLowerCase()}. Falling under the same category
                    as "minority", your group experiences frequent race-related stress, incrased perceptions of discrimination, and systemic racism. Though, being marginally more
                    minute than other minorities, these individuals may find themselves struggling to match with a true group identity and often experience social isolation more
                    than others.`
                break;

            case 8: // how much does race affect personal POVs

                if (input == "Never/Not Sure/Don't Care" || input == "Barely")
                    htmlVar.innerHTML = 
                    `You picked "${input.toLowerCase()}". Individuals who don't engage in race-based behavaiorisms tend to be more compassionate and secure socially and mentally.
                    They may also reside in a much more ethnically diverse environment, which implies increased social, artistic, and culinary richness. Resultantly, these individuals
                    may have an more open minded and tolerant mindset towards others.`
                else if (input == "Occassionally")
                    htmlVar.innerHTML = 
                    `You picked "${input.toLowerCase()}". Individuals who engage in race-based behaviorisms may have personal insecurities like a lack of an identity; a lack of compassion for
                    other groups; personal flaws (that they wish to project onto unlucky scapegoats); poor mental health; and fears regarding foreign people. They may also reside in 
                    an ethnically monotone environment, with little to no social diversity: as such, there is little to no social repercussions for engaging in racist behaviors, normalizing
                    such actions. This may not be entirely the case though. Social amd mass media may subliminally ingrain ideals of race into us unknowingly.`
                else if (input == "Moderately" || input == "Consistently")
                    htmlVar.innerHTML = 
                    `You picked "${input.toLowerCase()}". Individuals who engage in race-based behaviorisms may have personal insecurities like a lack of an identity; a lack of compassion for
                    other groups; personal flaws (that they wish to project onto unlucky scapegoats); poor mental health; and fears regarding foreign people. They may also reside in 
                    an ethnically monotone environment, with little to no social diversity: as such, there is little to no social repercussions for engaging in racist behaviors, normalizing
                    such actions.`

                break;

            case 9: // how good is personal diet

                if (input == "Unsatisfied" || input == "Slightly Unsatisfied")
                    htmlVar.innerHTML = 
                    `You are ${input.toLowerCase()} with your diet. Poor satisfaction is an indicator for increased risk of eating disorders (EDs), poor psychosocial and physical health, 
                    and mental health disorders like anxiety and depression. These symptoms may get in the way of living a productive and social lifestyle, straining work/personal relationships
                    and regularizing poor habits and conduct.`
                else if (input == "Overabundantly Satisfied" || input == "Very Satisfied")
                    htmlVar.innerHTML = 
                    `You are ${input.toLowerCase()} with your diet. High satisfaction is linked to a positive relationship with food including a greater sense of enjoyment, reduced
                    stress, and a more intuitive approach to eating. This is a positive feedback loop: promoting healthier eating habits, reducing negative emotions related to 
                    food, and an overall improved wellbeing socially, physically, and mentally.`
                else if (input == "Satisfied")
                    htmlVar.innerHTML = 
                    `You are ${input.toLowerCase()} with your diet. Satisfaction with a diet is linked to a healthy relationship with food, implying better psychosocial and physical health,
                    a more productive lifestyle, and greater personal enjoyment.`

                break;
        }
    }
}

function CleanString(str) { // removes extraneous characters from a string (white spaces and invisible characters)

    var targetStr = "";

    for (var i = 0; i < str.length; i++) {

        var ch = str.charAt(i); // out of bounds charAt() returns a white space
        var prevCh = str.charAt(i-1);
        var nextCh = str.charAt(i+1);

        if (ch.match("[a-zA-Z]") || (prevCh.match("[a-zA-Z]") && nextCh.match("[a-zA-Z]"))) // this is using regex to determine if the character is in the alphabet or not or if it's 
        // a space or some other character in between words (don't remove these characters)
            targetStr += ch;
    }

    return targetStr;
}

function ResetQuiz() { // if anchor go back to start of quiz is pressed, remove all slocally saved variables

    resetQuiz.addEventListener("click", () => {

        // console.log(1);
        // event.preventDefault();
        sessionStorage.clear();
    })

    resetQuiz1.addEventListener("click", () => {

        sessionStorage.clear();
    })
}



// console.log(storedValues.Q1);
// console.log(storedValues.Q2);
// console.log(storedValues.Q3);
// console.log(storedValues.Q4);
// console.log(storedValues.Q5);
// console.log(storedValues.Q6);
// console.log(storedValues.Q7);
// console.log(storedValues.Q8);
// console.log(storedValues.Q9);
// console.log(storedValues.Q10);