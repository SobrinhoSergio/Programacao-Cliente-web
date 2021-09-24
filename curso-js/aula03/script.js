const names = ['Fellipe', 'Sérgio', 'André', 'Marco', 10, false];

const firstName = names[0];

console.log(names);

console.log(firstName);

names.push("Pedro"); //adiciona no final da lista 

console.log(names);

names.unshift('Programador'); //adiciona no início da array

console.log(names);

names.pop(); //remove o último índice da lista

console.log(names); 


names[3] = 'Gustavo';

console.log(names);

console.log(names.indexOf('Gustavo'));

console.log(names.sort()); //ele faz um sorteio de dados na array

console.log(names.isArray());