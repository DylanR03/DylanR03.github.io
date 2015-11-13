function mygame() {

var username = prompt("What is your name?");
confirm("Greetings" + username + ". Are you ready to begin?");
  
alert("Please answer the questions with the answers given and please use capital letters");

alert("You hear of a quest to kill a mighty monster, if the beast is slain and you bring it's head to the Emperor then you will be rewarded by being named the king of a small land in the West.");        

alert("Very well then, your first challenge during the journey is crossing a famous marsh that is known for it's hostility towards travellers. The marsh is safe and dry for now but it is dark and there will most likely be creatures lurking around the marsh but you fear there is a storm on the way")

var answer = prompt("Will you cross the marsh? (yes or no)")
switch(answer) {
  case "yes":
    alert("You tried to cross it but in the dark you could not see a thing and unfortunately you were hunted down by a pack of marsh cannibals")
    break;
    
  case "Yes":
    alert("You tried to cross it but in the dark you could not see a thing and unfortunately you were hunted down by a pack of marsh cannibals")
    break;
    
  case "no":
    alert("You were fortunate as the storm dissipated before reaching you so you made it across the marsh safely")
    break;
    
  case "No":
    alert("You were fortunate as the storm dissipated before reaching you so you made it across the marsh safely")
    break;
}

alert("You must now travel through the Dragon's Spine, a treacherous mountain range that is all but barren and is prowled by packs of man-eating mountain frogs!")

var answer = prompt("A pack of frogs passes by you camp and settles down very near to it, do you attempt to scare them away and try to kill them or will you keep a low profile and hide? (Drive them away or Hide)")
switch(answer) {
  case "Drive them away":
    alert("You scared them away as the frogs are cowards and afraid of loud noises due to their excellent sense of hearing!")
    break;
    
  case "Hide":
    alert(" The frogs have excellent senses of smell and hearing, they could hear you breathing a mile off! They ate you as soon as you fell asleep")
    break;
        
    case "drive them away":
         alert("You scared them away as the frogs are cowards and afraid of loud noises due to their excellent sense of hearing!")
    break;
        
         case "hide":
    alert(" The frogs have excellent senses of smell and hearing, they could hear you breathing a mile off! They ate you as soon as you fell asleep")
    break;
}

var answer = prompt("On your travels you come across a field rich with berry bushes of all kinds, it is a good time to stock up on food as there is also plentiful hunting will you Pick berries, Go hunting or Rest first? (pick one: Pick berries, Go hunting, Rest)")
switch(answer) {
  case "Pick berries":
    alert("After picking berries you continue on your travels and noticing that you were followed by the frogs you go to the nearest town for a few days.")
    break;  
        
  case "pick berries":
    alert("After picking berries you continue on your travels and noticing that you were followed by the frogs you go to the nearest town for a few days.")
    break;  
    
  case "Go hunting":
    alert("After hunting you continue on your travels and noticing that you were followed by the frogs you go to the nearest town for a few days")
    break;
        
  case "go hunting":
    alert("After hunting you continue on your travels and noticing that you were followed by the frogs you go to the nearest town for a few days")
    break;
     
  case "Rest":
    alert("Unfortunately for you, the frogs hold massive grudges against their enemies and so they followed you and murdered you in your sleep")
    break;
        
  case "rest":
    alert("Unfortunately for you, the frogs hold massive grudges against their enemies and so they followed you and murdered you in your sleep")
    break;
   
 
}

var answer = prompt("You stay at the local inn, they happen to be hosting a local rugby tournament but their team is missing a player and they ask you to play for them, will you play? (Yes or No)")
switch(answer) {
  case "Yes":
    alert("You and the rest of the team play very well and end up winning the tournament, the owners of the inn thank you by letting you have a room for free and giving you provisions for the rest of your journey")
    break;
        
  case "yes":
    alert("You and the rest of the team play very well and end up winning the tournament, the owners of the inn thank you by letting you have a room for free and giving you provisions for the rest of your journey")
    break;
    
  case "No":
    alert(" You refuse to play even if they let you stay at the inn for free so they kick you out onto the streets and you soon get murdered by a local gang")
    break;
        
  case "no":
    alert(" You refuse to play even if they let you stay at the inn for free so they kick you out onto the streets and you soon get murdered by a local gang")
    break;
    
 
}

alert("After travelling for a few days you finally make it to the cave where the monster is said to live in.")

var answer = prompt("You enter the cave, all you see is a fluffy little white bunny rabbit. Will you kill it? (Yes or No)")
switch(answer) {
  case "Yes":
    alert("Well done! You slayed the mighty bunny beast and became king of Rono, a small land to the west and lived a long and luxurious life.")
    break;
        
  case "yes":
    alert("Well done! You slayed the mighty bunny beast and became king of Rono, a small land to the west and lived a long and luxurious life.")
    break;
    
  case "No":
    alert(" Turns out that the bunny was the monster, it leaped at you and tore out your throat with it's little bunny teeth.")
    
  case "no":
    alert(" Turns out that the bunny was the monster, it leaped at you and tore out your throat with it's little bunny teeth.")
}  
    var rating = prompt("Please Rate my game out of 10!")
    if (rating < 6) {
      alert("Thanks for the rating!")
    }
else {
      alert("Thanks for the support!")
            }
            }