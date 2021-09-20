/*classNomeDaClasse{
    constructor( ... ) {
         ... 
    }
    
    metodo1( ... ) {
         ... 
    }
    
    metodo2( ... ) {
         ... 
    }
    
    metodoN( ... ) { 
        ... 
    }
}*/

//

class Pessoa {
     constructor( nome ) {
          this.nome = nome;
     }
}

const p = new Pessoa( 'Ana');

console.log( p.nome);

//

class Pessoa {
     nome = '';
     constructor( nome ) {
          this.nome= nome;
     }
}

const p = new Pessoa( 'Ana');
console.log( p.nome);

//

class Pessoa {
     nome = '';
     sobrenome = '';
     
     constructor( nome, sobrenome ) {
          this.nome= nome;
          this.sobrenome= sobrenome;
     }
     
     nomeCompleto() {
          returnthis.nome+ ' '+ this.sobrenome;
     }
}

const p = new Pessoa( 'Clarice','Linspector');
console.log( p.nomeCompleto() );


//permite declaração dinâmica, similar à uma função 
//exemplo

const Pessoa = class{
     
     constructor( nome ) {
          this.nome= nome;
     }
};

constp = new Pessoa( 'Ana');
console.log( p.nome);

//

class Pessoa {
     _nome = '';
     constructor( nome ) { 
          this._nome = nome; 
     }
     
     getnome() { 
          return this._nome; 
     }
}

const p = new Pessoa( 'Ana');
console.log( p.nome); // Ana
console.log( p.nome() ); // Error

//

class Pessoa {
     _nome = '';
     constructor( nome ) { 
          this._nome = nome; 
     }
     
     getnome() { 
          return this._nome; 
     }
     
     setnome( valor ) { 
          
          this._nome = valor; 
     }

}

const p = new Pessoa( 'Ana');
console.log( p.nome); // Ana 
p.nome= 'Sérgio';
console.log( p.nome); // Sérgio

//

class Pessoa {
     _nome = '';
     
     constructor( nome ) { 
          this.nome= nome; 
     } 
     
     // Chama setter
     
     getnome() { 
          return this._nome; 
     
     }
     
     setnome( valor ) { 
          
          this._nome = nome; 
     
     }
}

const p = new Pessoa( 'Ana');
console.log( p.nome); // Ana
p.nome= 'Sérgio';
console.log( p.nome); // Sérgio

//

class Documento {
     validar() { 
          return false; 
     }
}

class CPF extends Documento {
     constructor( numero ) { 
          this.numero= numero; 
     }
     
     validar() { 
          /* ...realiza validação... */
     }
}

//

class Cliente {
     constructor( nome, email) {
          this.nome= nome;
          this.email= email;
     }
}

class ClientePJ extends Cliente {
     constructor( nome, email, cnpj) {
          super( nome, email);
          this.cnpj= cnpj;
     }
}

const clientes = [ 
     new Cliente( 'Ana', 'ana@site.com'),
     new ClientePJ( 'Acme', 'contato@acme.com', '38.987.303/0001-12') 

];

//


class Cliente {
     constructor( nome, email) { 
          this.nome= nome; 
          this.email= email; 
     }
     
     validar() { 
          /* ... */ 
     }

}

class ClientePJ extends Cliente {
     
     constructor( nome, email, cnpj) { 
          super( nome, email); 
          this.cnpj= cnpj; 
     }
     
     validar() {
          super.validar();
          if( ! this.cnpj|| this.cnpj.length!= 14 ) {
               throw new Error( 'CNPJ deve ter 14 dígitos numéricos.');
          }
          
          const cnpj= new CNPJ( this.cnpj);
          
          if( ! cnpj.validar() ) {
               throw new Error( 'CNPJ inválido.');
          }
     }

}

// 

class Calculo {
     static soma( x, y ) {
          returnx + y;
     }
     
     static media( x, y ) {
          return Calculo.soma( x, y ) / 2;
     
     }

}

Calculo.soma( 10, 20 ); // 30
Calculo.media( 10, 20 ); // 15