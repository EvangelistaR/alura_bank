class MensagemView extends View {

  udpate(model: string){
    this._elemento.innerHTML = this.template(model);
  }

  template(model: string){
    return `<p class="alert alert-info">${model}</p>`;
  }
}