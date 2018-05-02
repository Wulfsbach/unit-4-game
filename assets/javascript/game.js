$function()
//The Fellowship
//Gimli Object


//Legolas Object

var Shelob ={
    name: "Shelob",
    health: 200,
    attack: 7,
}
//Aragorn Object
var Aragorn ={
    name: "Aragorn",
    health: 100,
    attack: 10,

}

// Shelob Object
var Gollum ={
    name:"Gollum",
    health:100,
    attack:4,
}
//Sauron Object
var Sauron ={
    name:"Sauron",
    health:500,
    attack:20,
}

//Variables
var AllyChoice =[gimli, Legolas, Aragorn, Frodo];
var EnemyChoice =[Saruman, Shelob, Sauron];
var $playerChoice;
var $enemyChoice;
//Health and Attack
var myhealth;
var myattack;

var EnenyActive= false;


function Start() {
    //insert Audio

    
}


function charactercreation(char, key){
var charDiv = $("<div class='character' data-name =' " + key + "'>")
var charName = $("<div class='character-name'>").text(character.name)
var charImage = $("<img alt='image' class='character-image'>").attr('src', character.imageURL)
var charHealth = $("<div class='character-health'>").text(character.heatlth)
charDiv.append(charName).append(charImage).append(charHealth)
return CharDiv
}



function ChooseCharacter(){

}
    



