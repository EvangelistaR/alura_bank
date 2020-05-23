class Negociacoes{

  // Aqui temos um array do tipo negociacao
  private _negociacoes: Negociacao[] = [];
  // private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return [].concat(this._negociacoes);
  }
}