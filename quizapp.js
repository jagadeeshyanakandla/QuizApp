const quizData = [
    {
        question:"what does HTML stands for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hypertext Machine Language",
        d:"Hypertext Manipulation Language",
         correct: "a",
    },

     {
        question:"what does CSS stands for?",
        a:"Cascading Style Sheets",
        b:"Cascading Sheets Style",
        c:"Creative Style Sheets",
        d:"Creative Sheets Style",
        correct:"a",
     },

     {
        question:"what does JS stands for?",
        a:"Java Source",
        b:"Java Style",
        c:"Java Sheet",
        d:"Java Script",
        correct:"d",

     },
     {
        question:"In which year Java Script was launched?",
        a:"1997",
        b:"1996",
        c:"1995",
        d:"1994",
        correct:"c",
     },
      

]

const quiz = document.getElementById("quiz");

const answerEls=document.querySelectorAll(".answer");

const questionEl=document.getElementById("question");


const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let currentQuiz = 0

let score=0

loadQuiz()

 function loadQuiz(){
  

const currentQuizData = quizData[currentQuiz]

questionEl.innerText = currentQuizData.question

a_text.innerText=currentQuizData.a
b_text.innerText=currentQuizData.b
c_text.innerText=currentQuizData.c
d_text.innerText=currentQuizData.d

}
function getSelected(){
  let answer

  answerEls.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer
}
  
submitBtn.addEventListener('click',() => {

  const answer=getSelected()
  // console.log(answer)

  if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML = `
                          <h3> You have answered correctly ${score}/${quizData.length}</h3>

                          <button onclick="location.reload()">Reload</button>
                          `
    }

  }
 })