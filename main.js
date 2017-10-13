var fs = require('fs')
var scores = fs.readFileSync('scores.txt', 'utf-8')

var scoreBoard = scores.split('\n',4)

//console.log(scoreBoard)

const winner = function(scoreBoard){
  let score = 0
  let winningPlayer = ""
  for (var i = 0; i < scoreBoard.length; i++) {
    let players = scoreBoard[i]
    player = players.split(',')
    let tab = 0
    for (var j = 1; j < player.length; j++) {
      tab += parseInt(player[j])
      if(tab>score){
        score = tab
        winningPlayer = player[0]

      }
    }
  }
  //console.log(winningPlayer);
//  console.log(score);
  return `${winningPlayer} ${score}`
}

console.log(winner(scoreBoard))
