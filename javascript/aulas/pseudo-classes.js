//AO USAR O OPERADOR NEW, A FUNÇÃO É ENTENDIDA COMO UM CONSTRUTOR

function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    };

}

var p = new Pessoa('Sérgio', 'Sobrinho');
console.log(p.nome); //Sérgio
console.log(p.nomeCompleto()); //Sérgio Sobrinho


// ACESSANDO O CONSTRUTOR

function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    };

}

var p = new Pessoa('Sérgio', 'Sobrinho');
console.log(p.constructor); // function Pessoa(nome, sobrenome)
console.log(p.constructor === Pessoa); // true
console.log(Pessoa.prototype.constructor === p.constructor); // true



// CRIANDO UM OBJETO PELO CONSTRUTOR

function Pessoa(nome, sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    };

}

var p = new Pessoa.prototype.constructor('Sérgio', 'Sobrinho');
var p2 = new p.constructor('Aline', 'Lima');
console.log(p.nomeCompleto()); // Sérgio Sobrinho
console.log(p2.nomeCompleto()); // Aline Lima

//

function Pessoa( nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
        this.nomeCompleto = function() {
            return this.nome + ' ' + this.sobrenome;
    
        };
    }
    
var p = new Pessoa.prototype.constructor( 'Bob', 'Marley' );
var p2 = new p.constructor( 'Ziggy', 'Marley' );
console.log( p.nomeCompleto() ); //Bob Marley
console.log( p2.nomeCompleto() ); //Ziggy Marley


// 

function Pessoa( nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
    
};
    
Pessoa.prototype.digaOla = function() {
    return 'Olá, ' + this.nomeCompleto();
};


var p = new Pessoa( 'Bob', 'Marley' );
console.log( p.digaOla() );
    

//

function Pessoa( nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    }
    Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
    };
    var p = new Pessoa( 'Bob', 'Marley' );
    var nc = p.nomeCompleto;
    nc();
    nc.call( p );


    function Calculo() {
        this.soma = function( arr ) {
        for ( var s = 0, len = arr.length, i = 0; i < len; ++i ) {
        s += arr[ i ];
        }
        return s;
        };
        this.media = function( arr ) {
        var len = arr.length;
        return len > 0 ? this.soma( arr ) / len : 0;
        };
        }
        var c = new Calculo();
        var s = c.soma;
        s( [ 10, 20, 30 ] ); // 60
        var m = c.media;
        m( [ 10, 20, 30 ] ); // TypeError: soma is not a function
        m.call( c, [ 10, 20, 30 ] ); // 20