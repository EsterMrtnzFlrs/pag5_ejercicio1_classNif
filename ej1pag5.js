
class Nif {
    constructor(numDni){//pasa valores,parametro solo se utiliza aquí
        this._dni = numDni;
        this._letraDni = this.calculaLetra();
    }
    get dni(){//retorna valor para utilizarlo
        return this._dni;
    }
    set dni(nuevoNumDni){//asignacion, no accedes directamente al valor del atributo
        this._dni=nuevoNumDni;
        this._letraDni = this.calculaLetra();//cambia atributo
    }

    calculaLetra(){ //calcula y devuelve
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

        return letras[this._dni%23];
    }

    mostrar(){
        return `${this._dni}-${this._letraDni}`
    }
    
}
let nifEster = new Nif (53729835);
/*console.log(nifEster);
nifEster.dni = 53729834;
console.log(nifEster);*/
console.log(nifEster.mostrar());