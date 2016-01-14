import {Employee} from "./employee";

export class Company{
  hire(...names){
    this.employees = names.map(n => new Employee(n));
  }
  doWork(){
    let work = [];
    for(let e of this.employees){
      work.push(e.doWork());
    }

    return work;
  }
}
