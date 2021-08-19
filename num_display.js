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
const back_button = document.getElementById('back-button');
const comma_button = document.getElementById('comma-button');
// 중간 과정 
let calReady=false;
let FIRST_NUM='ready';
let SECOND_NUM='ready';
let CAL=-1;
let RESULT=0;
let NEWNUM=true;
let MIDDLE_CAL=false;
let CALBUTTONCLICKED=false;
let EQUALCLICK=false;
let temp_num=NaN;
// all clear
const allClearButton = document.getElementById('all-clear');
// 숫자 클릭시 작동하는 이벤트
function handleNumClick(event){
    if (CAL!=-1){
        SECOND_NUM='non_ready';
    }
    if (space.innerText=='0' || NEWNUM === true){
        space.innerText=event.target.value;
        NEWNUM=false;
    } else{
        space.innerText=space.innerText+event.target.value;
    }
}
//계산 기능 누를 때 작동하는 이벤트
function handleCal(event) {
    NEWNUM=true;
    if (CAL == -1 || SECOND_NUM =='ready'){
        FIRST_NUM=space.innerText;
        CAL=event.target.value;
    }else if (CAL !=-1){
        SECOND_NUM=space.innerText;
        space.innerText=eval(FIRST_NUM+CAL+SECOND_NUM);
        CAL=event.target.value;
        FIRST_NUM=space.innerText;
        SECOND_NUM='ready'
    }
    EQUALCLICK=false;
//=표시 클릭하면 작동하는 이벤트    
}
function handleEqualClick(event) {
    if (EQUALCLICK==false){
        SECOND_NUM=space.innerText;
        space.innerText=eval(FIRST_NUM+CAL+SECOND_NUM);
        FIRST_NUM=space.innerText;
        NEWNUM=true;
        EQUALCLICK=true;
        temp_num=SECOND_NUM;
        SECOND_NUM='ready';
    }else{
        SECOND_NUM=temp_num
        space.innerText=eval(FIRST_NUM+CAL+SECOND_NUM);
        FIRST_NUM=space.innerText;
        NEWNUM=true;
        SECOND_NUM='ready';
    }
    
}
//AC버튼 누를 때 작동하는 이벤트
function allClear(){
    FIRST_NUM='ready';
    SECOND_NUM='ready';
    CAL=-1;
    space.innerText='0';
    EQUALCLICK=false;
}
//+/-버튼 누를 때 작동하는 이벤트
function handleReverse(){
    space.innerText=eval('-1*'+space.innerText);
    NEWNUM=true;
}
//화면에 나와있는 숫자를 하나씩 지워가면서 나오게 하는 이벤트
function back(){
    if (space.innerText!='0'){
        space.innerText=space.innerText.slice(0,-1);
        if (space.innerText=='' ||space.innerText=='-'){
            space.innerText='0';
        }
    }
}
//소숫점 표시하기 위한 이벤트
function comma() {
    if (space.innerText.indexOf('.')==-1 && NEWNUM===false) {
        console.log("1");
        space.innerText=space.innerText+'.';
    }else if(NEWNUM===true){
        space.innerText='0.'
        NEWNUM=false;
    }   
}
//숫자 버튼에 이벤트 할당
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
//계산 기호 및 기능에 이벤트 할당
plus_button.addEventListener("click",handleCal);
minus_button.addEventListener("click",handleCal);
divide_button.addEventListener("click",handleCal);
multiple_button.addEventListener("click",handleCal);
equal_button.addEventListener("click",handleEqualClick);
reverse_button.addEventListener('click',handleReverse);
back_button.addEventListener('click',back);
comma_button.addEventListener('click',comma);
allClearButton.addEventListener('click',allClear);