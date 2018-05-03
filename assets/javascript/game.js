$function()




//objects

var Shelob ={
    name: "Shelob",
    health: 200,
    attack: 7,
    image:"./assets/images/Shelob.png",
}

var Aragorn ={
    name: "Aragorn",
    health: 100,
    attack: 10,
    image:"./assets/images/Aragorn.jpg",
}


var Gollum ={
    name:"Gollum",
    health:100,
    attack:4,
    image= "./assets/images/Gollum.jpg",
}

var Sauron ={
    name:"Sauron",
    health:500,
    attack:20,
    image="./assets/images/Gollum.jpg",
}

//set variables
var characters=["Aragorn, Shelob, Gollum, Sauron"];
var gameRunning= false;
var userHp;
var newHp;
var enemyHp;
var newEnHp;
var heroes=[];

// Change Html file, to more basic, will append things where needed, that was the point of this excercise, compeletely misunderstood Will continue at 3:30 am.//
// Working it out.

//Pseudo-code: Create divs related to each character and append them to the html file.


//Not really working but I get the idea of it need to hash it out some more. Might have to do with my HTML Setup, will work on it.
    for (var i=0; i<characters.length;i++ ){
        var $hero= $("<div id= 'characters.length[i].name'>");
        $hero.append('<div class="Character-Region" >' + characters[i].name);
        $hero.append(characters[i].image);
        $hero.append('<div class="Health">'+ characters[i].health);
        $hero.attr('data-name', characters[i].name);
        $hero.attr('data-attack',characters[i].name);
        $hero.attr('data-health',characters[i].health);

        heroes.push(characters.name);
        $('#heroes').append(hero);
    }



