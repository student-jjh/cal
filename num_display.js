window.resizeTo(300,300);
let space=document.getElementById('cal-space');
//숫자 버튼 
const num_one = document.getElementById('one-button');
const num_two = document.getElementById('two-button');
const num_three = document.getElementById('three-button');
const num_four = document.getElementById('four-button');
const num_five = document.getElementById('five-button');
const num_six = document.getElementById('six-button');
const num_seven = document.getElementById('seven-button');
const num_eight = document.getElementById('eight-button');
const num_nine = document.getElementById('nine-button');
const num_zero = document.getElementById('zero-button');
// 계산 기호
const plus_button =document.getElementById('plus-button');
const minus_button =document.getElementById('minus-button');
const divide_button =document.getElementById('divide-button');
const multiple_button =document.getElementById('multiple-button');
const equal_button = document.getElementById('equal-button');
const reverse_button = document.getElementById('reverse-button');
const percent_button = document.getElementById('percent-button');
// 중간 과정 
let calReady=false;
let FIRST_NUM=0;
let SECOND_NUM=0;
let CAL;
let RESULT=0;
// all clear
const allClearButton = document.getElementById('all-clear');

function handleNumClick(event){
    if (space.innerText=='0'){
        space.innerText=event.target.value;
    } else{
        space.innerText=space.innerText+event.target.value;
    }
}


function handleCal(event) {
    FIRST_NUM=space.innerText;
    CAL=event.target.value;
    space.innerText='0';
}
function handleEqualClick(event) {
    SECOND_NUM=space.innerText;
    space.innerText=eval(FIRST_NUM+CAL+SECOND_NUM);
}
function allClear(){
    FIRST_NUM=0;
    SECOND_NUM=0;
    CAL=NaN;
    space.innerText='0';
}

function handleReverse(){
    space.innerText=eval('-1*'+space.innerText);
}

function percent(){
    space.innerText=eval('0.01*'+space.innerText);
}


num_one.addEventListener('click',handleNumClick);
num_two.addEventListener('click',handleNumClick);
num_three.addEventListener('click',handleNumClick);
num_four.addEventListener('click',handleNumClick);
num_five.addEventListener('click',handleNumClick);
num_six.addEventListener('click',handleNumClick);
num_seven.addEventListener('click',handleNumClick);
num_eight.addEventListener('click',handleNumClick);
num_nine.addEventListener('click',handleNumClick);
num_zero.addEventListener('click',handleNumClick);

plus_button.addEventListener("click",handleCal);
minus_button.addEventListener("click",handleCal);
divide_button.addEventListener("click",handleCal);
multiple_button.addEventListener("click",handleCal);
equal_button.addEventListener("click",handleEqualClick);
reverse_button.addEventListener('click',handleReverse);
percent_button.addEventListener('click',percent);

allClearButton.addEventListener('click',allClear);