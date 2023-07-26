let xp = 0;
let health = 100;
let gold = 50;
let currWeapon = 0;
let fighting;
let mosterHealth, inventory = ["Stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#mosterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown(){
    button1.innerText = "Go to Store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight Dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You return to the Town. You see a sign that says \"store\"."
}

function goStore(){
    button1.innerText = "Buy 10 Health (10 Gold)";
    button2.innerText = "Buy Weapon (30 Gold)";
    button3.innerText = "Go Back to Town Square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the Store"
}

function goCave(){
    console.log("Going to cave...") 
}

function fightDragon(){
    console.log("Fighting Dragon")
}

function buyHealth(){
    
}

function buyWeapon(){

}

