  // Nome dos personagens, atributos e pontos
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
  // Função para rolar o dado
async function rolldice() {
    return (Math.floor (Math.random() * 6 + 1))             
}
  // Função para sortear o bloco
async function getRandomBlock() {
    let random = Math.random();
    let result = "";

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
            case random < 0.66:
                result = "CURVA";
                break;
            default:
                result = "CONFRONTO";

    }
    return result;
    
}
  // Função para logar o resultado do dado e do teste de habilidade
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}
  // Função para executar a engine da corrida
async function playraceengine(character1, character2) {
  for(let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

     // rolar os dados
  let diceResult1 = await rolldice();
  let diceResult2 = await rolldice();
 
  // teste de habilidade
  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;
  // calcular o resultado do teste de habilidade com base no bloco sorteado e logar o resultado
  if (block === "RETA") {
    totalTestSkill1 = diceResult1 + character1.Velocidade;
    totalTestSkill2 = diceResult2 + character2.Velocidade;

    await logRollResult(
        character1.Nome,
        "Velocidade",
        diceResult1,
        character1.Velocidade
    );
    await logRollResult(
        character2.Nome,
        "Velocidade",
        diceResult2,
        character2.Velocidade
        );
  }
  // calcular o resultado do teste de habilidade com base no bloco sorteado e logar o resultado
  if (block === "CURVA") {
    totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
    totalTestSkill2 = diceResult2 + character2.Manobrabilidade;

    await logRollResult(
        character1.Nome,
        "Manobrabilidade",
        diceResult1,
        character1.Manobrabilidade
    );
    await logRollResult(
        character2.Nome,
        "Manobrabilidade",
        diceResult2,
        character2.Manobrabilidade
        );
  }
  // calcular o resultado do teste de habilidade com base no bloco sorteado e logar o resultado
  if (block === "CONFRONTO") {
    totalTestSkill1 = diceResult1 + character1.Poder;
    totalTestSkill2 = diceResult2 + character2.Poder;
    
    await logRollResult(
        character1.Nome,
        "Poder",
        diceResult1,
        character1.Poder
    );
    await logRollResult(
        character2.Nome,
        "Poder",
        diceResult2,
        character2.Poder
        );
  }

}
}
    
  // Função principal para iniciar a corrida entre os personagens
(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} começando... \n`); 

 await playraceengine(player1, player2);   
})();
