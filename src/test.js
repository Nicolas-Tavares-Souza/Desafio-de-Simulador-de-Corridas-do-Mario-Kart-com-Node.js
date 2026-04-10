const player1 = {
    Nome: "Mario",
    Velocidade: 5,
    Manobrabilidade: 4,
    Poder:7,
    Pontos: 0
 }
const player2 = {
    Nome: "Peach",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder:5,
    Pontos: 0
}
const player3 = {
    Nome:"Yoshi",
    Velocidade: 3,
    Manobrabilidade: 6,
    Poder: 4,
    Pontos: 0
}
const player4 = {
    Nome: "Bowser",
    Velocidade: 4,
    Manobrabilidade: 6, 
    Poder: 2,
    Pontos: 0
}
const player5 = {
    Nome: "Luigi",
    Velocidade: 4,
    Manobrabilidade: 5,         
    Poder: 6,
    Pontos: 0
}
const player6 = {
    Nome: "Donkey Kong",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 5,   
    Pontos: 0
}
async function rolldice() {
    return (Math.floor (Math.random() * 6 + 1))             
}
async function playraceengine(character1, character2) {}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} começando... \n`); 

 await playraceengine(player1, player2);   
})();