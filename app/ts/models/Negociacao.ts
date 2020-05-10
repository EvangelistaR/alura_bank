class Negociacao{

  // Definição das propriedades
  // Apenas métodos da própria classe poderão alterar as propriedades
  private _data; 
  private _quantidade;
  private _valor;

  // Usando o underline convenciona que essas propriedades não podem ser acessadas
  constructor(data, quantidade, valor){
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

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