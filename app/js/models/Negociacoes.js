class Negociacoes {
    constructor() {
        // Aqui temos um array do tipo negociacao
        this._negociacoes = [];
    }
    // private _negociacoes: Array<Negociacao> = [];
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
