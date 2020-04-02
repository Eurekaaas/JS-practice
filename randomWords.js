var words = ["a burger", "salad", "spaghetti", "dumplings", "a desk", "a book", "a spoon", "a water bottle", "cactus"];

function randomWords(w){
  return words[w]
}

console.log("I ate " + randomWords(Math.floor(Math.random() * words.length)) + " for lunch today.");
