var d = 10;

function quarantine(days){
  if (days < 5){
    return "Long way to go...";
  }
  else if (days >= 7 && days < 10){
    return "Half way through!";
  }
  else if (days >= 10 && days < 14){
    return "Almost there!";
  }
  else if (days == 14){
    return "HOME SWEET HOME";
  }
}

console.log("Quarantine days left: " + d);
console.log(quarantine(d));
