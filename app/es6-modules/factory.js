// default means this file has only 1 export
export default class Factory{
  constructor(name){
    this._name = name;
  }

  get name(){
    return this._name;
  }

  doWork() {
    return `${this.name} is working.`;
  }
}
