let nomeHeroi = "Carcará"
let nivelHeroi = 5400   

switch (true) {
    case nivelHeroi < 1000:
        console.log(`O herói ${nomeHeroi} está no nível Ferro`);
        break;
    case nivelHeroi >= 1000 && nivelHeroi <= 2000:
        console.log(`O herói ${nomeHeroi} está no nível Bronze`);
        break;
    case nivelHeroi >= 2001 && nivelHeroi <= 5000:
        console.log(`O herói ${nomeHeroi} está no nível Prata`);
        break;
    case nivelHeroi >= 5001 && nivelHeroi <= 7000:
        console.log(`O herói ${nomeHeroi} está no nível Ouro`);
        break;
    case nivelHeroi >= 7001 && nivelHeroi <= 8000:
        console.log(`O herói ${nomeHeroi} está no nível Platina`);
        break;
    case nivelHeroi >= 8001 && nivelHeroi <= 9000:
        console.log(`O herói ${nomeHeroi} está no nível Ascendente`);
        break;
    case nivelHeroi >= 9001 && nivelHeroi <= 10000:
        console.log(`O herói ${nomeHeroi} está no nível Imortal`);
        break;
    case nivelHeroi >= 10001:
        console.log(`O herói ${nomeHeroi} está no nível Radiante`);
        break;              
}
