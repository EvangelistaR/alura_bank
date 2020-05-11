class Negociacao{
    // Usando o underline convenciona que essas propriedades não podem ser acessadas
    // Definindo propriedades da classe, tipo de dados
    constructor(private _data: Date, private _quantidade: number, private _valor: number){}

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}