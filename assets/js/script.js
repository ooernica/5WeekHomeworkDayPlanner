const date = moment().format('dddd, MMM Do');

// puts the current date on the page
$("#currentDay").html(date);

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

// // saves items typed in the scheduler to local storage 
let saveaptInfo = [];

$(".saveBtn").click(function() {
        saveaptInfo = [];
        for (let s = 0; s < workTime.length; s++) {
            let description = $(`#${workTime[s]}Note`).val();
            saveaptInfo.push (description)
        }
        console.log(saveaptInfo);
        localStorage.setItem("saveaptInfo",JSON.stringify(saveaptInfo))
});

if (localStorage.getItem("saveaptInfo") !== null) {
    scheduler = JSON.parse(localStorage.getItem('saveaptInfo'));
        console.log(scheduler);
    for (let l = 0; l < workTime.length; l++) {
        let displayApt = scheduler[l];
        console.log(displayApt)
        $(`#${workTime[l]}Note`).val(displayApt);
    } 
}


