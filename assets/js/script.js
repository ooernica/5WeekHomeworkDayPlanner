const date = moment().format('dddd, MMM Do');

// declares possible times as an array so that they can be looped through
const workTime = [7,8,9,10,11,12,13,14,15,16,17,18];

// this compares time to now and changes color for past/present
const compareTime = function() {
    currentTime = moment().format('H');
    for (let i = 0; i < workTime.length; i++){
        if (currentTime > workTime[i]) {
            $(`#${workTime[i]}Note`).attr('class','col-8 past')
        }else if (currentTime == workTime[i]) {
            $(`#${workTime[i]}Note`).attr('class','col-8 present')
        }
    }
}

// this runs the function every second so the compareTime function can change colors as time changes 
$(function() {
    setInterval(compareTime,1000)
});

