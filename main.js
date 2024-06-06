const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = e.target.querySelector('#nome');
    const inputAltura = e.target.querySelector('#altura');
    const altura = Number(inputAltura.value);
    const inputPesoAtual = e.target.querySelector('#pesoAtual');
    const PA = Number(inputPesoAtual.value);
    const inputPPO = e.target.querySelector('#ppo');
    const PPO = Number(inputPPO.value);
    if(!pesoAtual) { 
        setResultado('Peso atual inválido', false); 
        return; 
    };
      
    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    };

    if(!PPO) { 
        setResultado('Peso pré-operatório inválido', false); 
        return; 
    };

    const PI = getPI(altura);
    const EP = getEP(PPO, PI);
    const PEP = getPEP(PPO,PA);
    const percentualPEP = getPercentualPEP(PEP,EP);

    const msg = `Peso ideal: ${PI.toFixed(2)} kg </br></br>

    Excesso de peso: ${EP.toFixed(2)} kg </br></br>

    Perda do excesso de peso: ${PEP.toFixed(2)} kg</br></br>

    Percentual da perda do excesso de peso: ${percentualPEP.toFixed(2)} %`

    setResultado(msg, true)
});

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

function setResultado(msg, isValid) {
    resultado.innerHTML = msg;
    if (isValid) {
        resultado.classList.add('paragrafo-resultado'); // Cria uma classe dentro do parágrafo
    } else {
        resultado.classList.add('paragrafo-resultado-invalido')
  }}