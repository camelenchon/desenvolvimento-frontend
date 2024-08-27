class Pessoa{
    private _nome: string;
    private _idade: number;

    constructor(nome:string, idade:number){
        this._nome = nome;
        this._idade = idade;
    }

    public get idade(){
        return this._idade
    }

    public set(idade: number){
        this._idade = idade
    }
}

let pessoa = new Pessoa('ciclano',10)
console.log(pessoa)