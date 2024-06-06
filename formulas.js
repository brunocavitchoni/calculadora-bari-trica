/* 
PEP = Perda do Excesso de Peso
EP = Excesso de Peso
EP = Excesso de peso
PPO = Peso pré operatório
PA = peso atual
PI = Peso ideal

PercentualPEP = PEP * 100 / EP 

PEP = PPO - PA

PI = altura^2 * 25

EP = PPO - PI

DADOS QUE COLETA: Altura, PA, PPO

*/
 

const nome = prompt('Nome do(a) paciente: ')
const altura = Number(prompt('Altura: '));
const PA = Number(prompt("Peso atual: "));
const PPO = Number(prompt("Peso Pré-operatório: "));

function getPI(altura) {
    return Math.pow(altura,2) * 25;
};

function getEP(PPO, PI){
    return PPO - PI;
};

function getPEP(PPO,PA){
    return PPO - PA;
};

function getPercentualPEP(PEP,EP){
    return (PEP * 100) / EP;
};

const PI = getPI(altura);
const EP = getEP(PPO,PI);
const PEP = getPEP(PPO,PA);
const percentualPEP = getPercentualPEP(PEP,EP);


console.log(`

Peso ideal: ${PI.toFixed(2)} kg
Excesso de peso: ${EP.toFixed(2)} kg
Perda do excesso de peso: ${PEP.toFixed(2)} kg
%Perda do excesso e peso: ${percentualPEP.toFixed(2)} %`);
