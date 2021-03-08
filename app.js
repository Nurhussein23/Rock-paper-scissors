let userScore = 0;
let computerScore = 0;

// cache dom
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function computerRandom(){
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3)

  return choices[randomNumber]
}

function convertLetter(letter){
  if(letter === 'r') return "ROCK"
  if(letter === 'p') return 'PAPER'
  return 'Scissors'
}


function wins(userChoice,ComputerChoice){
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertLetter(userChoice)} beats ${convertLetter(ComputerChoice)} You win`
  document.getElementById(userChoice).classList.add('green-glow')
  setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')},300)
}


function Lose(userChoice,computerChoice){
  computerScore++
  computerScore_span.innerHTML = computerScore
  userScore_span.innerHTML = userScore
  result_p.innerHTML = `${convertLetter(computerChoice)} beats ${convertLetter(userChoice)} You Lose`
  document.getElementById(userChoice).classList.add('red-glow')
  setTimeout(() =>{document.getElementById(userChoice).classList.remove('red-glow')},300)
}


function draw(userChoice,computerChoice){
  result_p.innerHTML =`${convertLetter(userChoice)} equals ${convertLetter(computerChoice)} Its a Draw` 
   document.getElementById(userChoice).classList.add('grey-glow')
  setTimeout(() =>{document.getElementById(userChoice).classList.remove('grey-glow')},300)
}

function game(userChoice){
 const computerChoice = computerRandom()
  switch(userChoice + computerChoice){
    case 'rs':
    case 'pr':
    case 'sp':
      wins(userChoice,computerChoice)
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      Lose(userChoice,computerChoice)
      break;
    case 'rr':
    case 'pp':
    case 'ss':
     draw(userChoice,computerChoice)
      break;
  }
 
}


function main(){
  rock_div.addEventListener('click',function(){
    game('r')
  })
  paper_div.addEventListener('click',function(){
    game('p')
  })
  scissors_div.addEventListener('click',function(){
    game('s')
  })
}

main()