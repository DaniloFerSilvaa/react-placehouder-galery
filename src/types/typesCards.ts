type Naipe = 'Paus' | 'Copas' | 'Espadas' | 'Ouros';
type ValorCarta = 'Ás' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Valete' | 'Dama' | 'Rei';

export type Carta = {
  valor: ValorCarta;
  naipe: Naipe;
};

type Baralho = Carta[];

// Função para sacar uma carta
export function sacarCarta(): Carta {
    const naipe: Naipe[] = ['Paus', 'Copas', 'Espadas', 'Ouros'];
    const valor: ValorCarta[] = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];

    let randomNipe: number = Math.random() * 3
    let randomValor: number = Math.random() * 12 

    let newRanNipe = Math.trunc(randomNipe);
    let newRanValor = Math.trunc(randomValor);
    

    const carta = {naipe: naipe[newRanNipe], valor: valor[newRanValor]}

    return carta;
    
}

let result = sacarCarta();

console.log(result);

let randomNipe: number = Math.random() * 3
let randomValor: number = Math.random() * 12 

let newRanNipe = Math.trunc(randomNipe);
let newRanValor =Math.trunc(randomValor);

console.log(newRanNipe)
console.log(newRanValor)
