//Criei uma class chamada Heroi, utilizando constructor com 3 propiedades introduzindo o this .

class Heroi {
    constructor(nome, idade, tipo) { 
        this.nome = nome;
        this.idade= idade;
        this.tipo= tipo;
 }
 
 //Usei o método atacar com estrutura de decisão switch case com 1 variável, com o return logo em baixo
 atacar() {
    let ataque;
    switch (this.tipo){
        case 'mago':
            ataque = " usou magia ";
            break;
        case 'guerreiro' :
            ataque = " usou espada ";
            break;
        case 'monge' :
            ataque = "usou artes marciais"
            break;
        case 'ninja' : 
            ataque=  "usou shuriken"
            break;
    }
        	return ` O ${this.tipo} atacou usando ${ataque} `;
    }     

 }

 //Aqui utilizei o 'new' com  função Object Integrada com constantes
const heroi1  = new Heroi("Doutor Estranho", 38, "mago");
const heroi2 =  new Heroi("Atlas", 527, "guerreiro");
const heroi3 =  new Heroi("Buda", 888, "monge");
const heroi4 =  new Heroi("Kakashi Sensei", 29, "ninja");

//No final 4 console.log pra obeter as 4 saídas
console.log(heroi1.atacar());  
console.log(heroi2.atacar());
console.log(heroi3.atacar());
console.log(heroi4.atacar());


    

