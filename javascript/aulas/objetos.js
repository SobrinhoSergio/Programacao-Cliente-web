/*OBJETOS*/


//DECLARAÇÃO EM VARIÁVEL

var telefone = {

    ddd: '222',
    numero: '2745-2121', 
    conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }

};

console.log(telefone.ddd); // 22
console.log(telefone.numero); // 2745-2121
console.log(telefone.conteudo()); // (22) 2745-21212


//AGREGANDO PROPRIEDADES (atribuição dinâmica)

var telefone = {};

telefone.ddd= '222';
    
telefone.numero= '2745-2121'; 
    
telefone.conteudo= function(){
        
    return '('+ this.ddd +')' + this.numero;

}

console.log(telefone.ddd); // 22
console.log(telefone.numero); // 2745-2121
console.log(telefone.conteudo()); // (22) 2745-21212


//AGREGANDO PROPRIEDADES COMO arrays

var telefone = {};

telefone["ddd"] = '222';
    
telefone["numero"] = '2745-2121'; 
    
telefone["conteudo"] = function(){
        
    return '('+ this.ddd +')' + this.numero;

}

console.log(telefone.ddd); // 22
console.log(telefone.numero); // 2745-2121
console.log(telefone.conteudo()); // (22) 2745-21212



//ACESSANDO PROPRIEDADES COM UM ARRAY DEL

var telefone = {

    ddd: '222',
    numero: '2745-2121', 
    conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }

};

console.log(telefone["ddd"]); // 22
console.log(telefone["numero"]); // 2745-2121
console.log(telefone["conteudo"]()); // (22) 2745-21212



//ACESSANDO AS PROPRIEDADES EM UM LAÇO 

var telefone = {

    ddd: '222',
    numero: '2745-2121', 
    conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }

};

for (var p in telefone){
    console.log(p);
}

/*-------SAÍDA---------*/
// ddd
// telefone
// conteudo
/*----------------------*/



//ACESSANDO AS PROPRIEDADES EM UM LAÇO (acessan do os valores das propriedades)

var telefone = {

    ddd: '222',
    numero: '2745-2121', 
    conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }

};

for (var p in telefone){
    console.log(p + " = " + telefone[p]);
}

/*-------SAÍDA---------*/
// ddd = 22
// telefone = 2745-2121
/* conteudo = conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }
*/
/*----------------------*/



//ACESSANDO AS PROPRIEDADES EM UM LAÇO 

var telefone = {

    ddd: '222',
    numero: '2745-2121', 
    conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }

};

for (var p in telefone){
    console.log(typeof telefone[p]);
}

/*-------SAÍDA---------*/
// string
// string
// function
/*----------------------*/



//ACESSANDO AS PROPRIEDADES EM UM LAÇO 

var telefone = {

    ddd: '222',
    numero: '2745-2121', 
    conteudo: function(){
        return '('+ this.ddd +')' + this.numero;
    }

};

for (var p in telefone){
    var valor = "function" === typeof telefone[p]
        ? telefone[p]() : telefone[p];
    console.log(p + "=" + valor);

}

/*-------SAÍDA---------*/
// ddd = 22
// numero = 2745-2121
// conteudo = (22) 2745-2121
/*----------------------*/