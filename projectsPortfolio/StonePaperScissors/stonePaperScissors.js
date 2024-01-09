function play() {
  let options = ['stone', 'paper', 'scissors'];
  let electionComputer = options[Math.floor(Math.random() * options.length)];
  let electionUser = document.getElementById('electionUser').value.toLowerCase();
  let resultElement = document.getElementById('result');

  if (electionUser === 'stone' || electionUser === 'paper' || electionUser === 'scissors') {
    if (electionUser === electionComputer) {
      resultElement.textContent = `Tie! Both chose ${electionUser}`;
    } else if (
      (electionUser === 'stone' && electionComputer === 'scissors') ||
      (electionUser === 'paper' && electionComputer === 'stone') ||
      (electionUser === 'scissors' && electionComputer === 'paper')
    ) {
      resultElement.textContent = `¡You won! You chose: ${electionUser}. And the computer chose: ${electionComputer}`;
    } else {
      resultElement.textContent = `¡You lose! You chose: ${electionUser}. And the computer chose: ${electionComputer}`;
    }
  } else {
    resultElement.textContent = 'The word you introduced is not correct. Please choose: stone, paper, or scissors';
  }
}
