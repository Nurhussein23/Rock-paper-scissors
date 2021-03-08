let userScore = 0;
const computerScore = 0;

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

  result_p.innerHTML = `${convertLetter(userChoice)} beats ${convertLetter(ComputerChoice)} You win`
}


function Lose(){
  
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
      console.log('COMPUTER WINS')
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      console.log('Its a draw')
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