const illustrations = document.querySelectorAll('.lust-head');
let lustHead1 =document.querySelector('.lust-head-1');
let lustHead2 =document.querySelector('.lust-head-2');
let lustHead3 =document.querySelector('.lust-head-3');
let lustCont1 = document.querySelector('.cont-1');
let lustCont2  = document.querySelector('.cont-2');
let lustCont3  = document.querySelector('.cont-3');

// const links = document.querySelectorAll('.illustration-heading a');
// const pseudoElement = links.querySelector(':before');


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.illustration-heading a');
  
    links.forEach(link  => {
      link.addEventListener('click', function () {
        // Toggle the active class on the clicked link
        links.forEach((l) => {
            l.classList.remove('active');
      })
      link.classList.add('active');
      });
    });
  });
  

// illustration container selection
function lustHead2Validation (e){
    lustCont2.classList.add('cont-active');
    lustCont1.style.display = 'none';
    lustCont3.style.display = 'none';
    console.log(e);
    }
lustHead2.addEventListener('click', lustHead2Validation);


function lustHead1Validation (){
    lustCont1.style.display = 'flex';
    lustCont2.classList.remove('cont-active');
    lustCont3.style.display = 'none';
    }
lustHead1.addEventListener('click', lustHead1Validation);


function lustHead3Validation (){
    lustCont1.style.display = 'none';
    lustCont2.classList.remove('cont-active');
    lustCont3.style.display = 'flex';
    }
lustHead3.addEventListener('click', lustHead3Validation);



// question section starts

let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll('.answer');
let question1 =document.querySelector('.bookmark-question-1 h2');
let question2 = document.querySelector('.bookmark-question-2 h2');
let question3 = document.querySelector('.bookmark-question-3 h2');
let question4 = document.querySelector('.bookmark-question-4 h2');
let allQuestions = document.querySelectorAll('.bookmark-question h2');
// let answer1cont = document.querySelector('.question-1-answer p');
// let answer2 = document.querySelector('.question-2-answer p');
// let answer3 = document.querySelector('.question-3-answer p');
// let question1cont = document.querySelector('.question-1');
// let question2cont = document.querySelector('.question-2');
// let question3cont = document.querySelector('question-3');



function mainAnim (){
    document.querySelector('.main-image svg:last-child').classList.add('shake-vertical');
}
mainAnim ();
let shakeVerticals = document.querySelectorAll('.lust svg:last-child'); 



// Assuming you have arrays like questions and answers
shakeVerticals.forEach(anim => {
    anim.classList.add('shake-vertical');
});

function toggleAnswerVisibility(index) {
    const answerDisplayStyle = getComputedStyle(answers[index]).display;

    if (answerDisplayStyle === 'none') {
        answers[index].style.display = 'block';
        allQuestions[index].style.color = 'red';
    } else {
        answers[index].style.display = 'none';
        allQuestions[index].style.color = 'black';
    }
}

questions.forEach((question, index) => {
    question.addEventListener('click', (e) => {
        if (e.isTrusted === true) {
            toggleAnswerVisibility(index);
        }
    });
});




