
const PETSHOP = "Petshop DH";

console.log(`** ${PETSHOP} **`);

let pets = [
    {
    nome: "Batman",
    tipo: "cão",
    raca: "vira-lata",
    idade: 2,
    genero: "F",
    vacinado: true,
    servicos: ["banho", "tosa", "corte de unha"]
 },{
    nome: "Robin",
    tipo: "cão",
    raca: "pincher",
    idade: 3,
    genero: "M",
    vacinado: false,
    servicos: ["vacinaçao", "tosa"]
 },{
    nome: "Peter",
    tipo: "gato",
    raca: "persa",
    idade: 5,
    genero: "M",
    vacinado: true,
    servicos: []
 },{
    nome: "Mary",
    tipo: "gato",
    raca: "sphynx",
    idade: 6,
    genero: "F",
    vacinado: false,
    servicos: []
 }];

const anoDeNascimento = pet => 2020 - pet.idade;

const vacinarPet = pet => {
    if (!pet.vacinado){
         pet.vacinado = true
         console.log("Pet vacinado com sucesso!");
     }else{
         console.log("Ops, seu pet já está vacinado!");
    }
};

const listarPets = () => {
    for (let pet of pets){
    console.log(`
    ------------------------------------
    Nome: ${pet.nome}
    Tipo: ${pet.tipo}
    Raça: ${pet.raca}
    Idade: ${pet.idade}
    Genero: ${pet.genero}
    Vacinado: ${pet.vacinado ? "Sim" : "Não"}
    Serviços: ${pet.servicos}`);
    }    
};

// listarPets();

const validarDados = (dadosPet) => {
    return (
        dadosPet.nome &&
        dadosPet.idade &&
        dadosPet.genero &&
        dadosPet.tipo &&
        dadosPet.raca   
    );
};

const adicionarPet = novoPet => {
    if(typeof novoPet == "object" && validarDados(novoPet)){
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);

        if(!novoPet.servicos){
           novoPet.servicos = [];
        }

        pets.push(novoPet);
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);

    } else {
        console.log("Ops, insira um objeto válido!");
    }
};

// adicionarPet({
//     nome: "Jane",
//     tipo: "cão",
//     raca: "terrie",
//     idade: 6,
//     genero: "F",
//     vacinado: true,
//     servicos: ["banho", "tosa"]
// })


const tosarPet = pet => {
    pet.servicos.push('tosa');
    console.log(`${pet.nome} está com pêlo aparado!`);
};

const darBanhoPet = pet => {
    pet.servicos.push('banho');
    console.log(`${pet.nome} está de banho tomado!`);
};

const cortarUnhasPet = pet => {
    pet.servicos.push('corte de unha');
    console.log(`${pet.nome} cortou as unhas!`);
};

const atenderPet = (pet, servicos) => {
    console.log(`Bem vindo, ${pet.nome}`);

    for (let servico of servicos) {
        servico(pet);        
    }
    
    const pagar = () => {
        console.log("Pagamento realizado com sucesso!")
    };

    pagar();

    console.log("Volte sempre!");
};

// atenderPet(pets[3], [darBanhoPet, cortarUnhasPet, tosarPet])

const quantidadePetsVacinados = pets => {
    let petsVacinados=[];
    let petsNaoVacinados=[];
    for(let pet of pets){
        if (pet.vacinado){
            petsVacinados.push(pet)
        } else{
            petsNaoVacinados.push(pet)
        }
    }
    console.log(`
    Foram encontrados ${petsVacinados.length} pets vacinados.
    Foram encontrados ${petsNaoVacinados.length} pets não vacinados.
    `);
}

// quantidadePetsVacinados(pets)

const campanhaVacina = pets => {
    console.log("Campanha de vacina 2020\nvacinando...");
    let contadorVacinados = 0;
        for(pet of pets){
        if(!pet.vacinado){
            pet.vacinado = true;
            contadorVacinados++;
        }                
    }
    console.log(`${contadorVacinados} pets foram vacinados nessa campanha!`);
};

// campanhaVacina(pets);

// const buscarNome = nome =>{
//     for(nome of pets){
//         if(nome == pets.nome){
//             console.log(`${nome} foi encontrado!`);
//         }else{
//             console.log(`${nome} não foi encontrado!`);
//         }
//     }
// }

// buscarNome("Batman")