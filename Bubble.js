var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29]

var highScore = printAndGetHighScore(scores);
document.write("Bubble tests: " + scores.length + "<br />");
document.write("Highest bubble score: " + highScore + "<br />");

var bestSolutions = getBestResults(scores, highScore);
document.write("Soutions with the highest score: " + bestSolutions + "<br />");

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
document.write("Bubble Solution #" + mostCostEffective + " is the most cost effective<br />")

function printAndGetHighScore(scores) {
  var highScore = 0;
  var output;
  for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i] + "<br />";
    document.write(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(scores, highScore) {
  var bestSolutions = [];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return highScore;
}

function getMostCostEffectiveSolution(scores, cost, highScore) {
  var cost = 100;
  var index = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i]
      }
    }
  }
  return index;
}
