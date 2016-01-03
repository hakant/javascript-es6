describe("the class keyword", function() {

  it("can create a class", function() {

    class Employee {

      doWork() {
        return "complete!";
      }

      getName() {
        return "Hakan";
      }

    }

    let e = new Employee();

    expect(e.doWork()).toBe("complete!");
    expect(e.getName()).toBe("Hakan");
    expect(Employee.prototype.doWork.call(e)).toBe("complete!");

  });

  it("can have a constructor", function() {

    class Employee {

      constructor(name) {
        this._name = name;
      }

      doWork() {
        return "complete!";
      }

      getName() {
        return this._name;
      }

    }

    let e1 = new Employee("Hakan");
    let e2 = new Employee("Alex");

    expect(e1.getName()).toBe("Hakan");
    expect(e2.getName()).toBe("Alex");

  });

  it("can have getters and setters", function() {

    class Employee {

      constructor(name) {
        this.name = name;
      }

      doWork() {
        return "complete!";
      }

      get name() {
        return this._name.toUpperCase();
      }

      set name(newValue){
        if (newValue){
          this._name = newValue;
        }
      }

    }

    let e1 = new Employee("Hakan");
    let e2 = new Employee("Alex");

    expect(e1.name).toBe("HAKAN");
    expect(e2.name).toBe("ALEX");

    e1.name = "Chris";
    expect(e1.name).toBe("CHRIS");

    e1.name = null;
    expect(e1.name).toBe("CHRIS");

  });

  it("can have a super class", function() {

    class Person {
      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue){
        if (newValue){
          this._name = newValue;
        }
      }
    }

    class Employee extends Person{
      doWork(){
        return `${this.name} is working`;
      }
    }

    let p1 = new Person("Hakan");
    let e1 = new Employee("Christopher");

    expect(p1.name).toBe("Hakan");
    expect(e1.name).toBe("Christopher");

    expect(e1.doWork()).toBe("Christopher is working");

  });

  it("can invoke super methods", function() {

    class Person {
      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue){
        if (newValue){
          this._name = newValue;
        }
      }
    }

    class Employee extends Person{
      constructor(title, name) {
        super(name);
        this._title = title;
      }
      get title(){
        return this._title;
      }

      doWork(){
        return `${this.name} is working`;
      }
    }

    let e1 = new Employee("Developer", "Hakan");

    expect(e1.name).toBe("Hakan");
    expect(e1.title).toBe("Developer");

  });

  it("can override methods", function() {

    class Person {
      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue){
        if (newValue){
          this._name = newValue;
        }
      }

      doWork(){
        return "free";
      }

      toString(){
        return this.name;
      }
    }

    class Employee extends Person{
      constructor(title, name) {
        super(name);
        this._title = title;
      }
      get title(){
        return this._title;
      }

      doWork(){
        return "paid";
      }
    }

    let p1 = new Person("Alex");
    let e1 = new Employee("Developer", "Hakan");

    expect(p1.doWork()).toBe("free");
    expect(e1.doWork()).toBe("paid");
    expect(p1.toString()).toBe("Alex");
    expect(e1.toString()).toBe("Hakan");

    let makeEveryoneWork = function(...people){
      var results = [];

      for (var i = 0; i < people.length; i++) {
        if (people[i] instanceof Person){
          results.push(people[i].doWork());
        }
      }

      return results;
    };

    expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "paid"]);
  });

});
