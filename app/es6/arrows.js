describe("arrow functions", function() {

  it("provide a compact syntax to define a function", function() {

    let add = (x, y) => x + y;
    let square = x => x * x;
    let three = () => 3;

    expect(add(2,3)).toBe(5);
    expect(square(2)).toBe(4);
    expect(three()).toBe(3);
  });

  it("can be used with array methods", function() {

    var numbers = [1,2,3,4];
    var sum = 0;

    numbers.forEach(n => sum += n);
    expect(sum).toBe(10);

    var doubled = numbers.map(n => 2 * n);
    expect(doubled).toEqual([2,4,6,8]);
  });

  it ("lexically binds to this", function(done){
    
    this.name = "Hakan";

    setTimeout(() => {
      expect(this.name).toBe("Hakan");
      done();
    }, 15);

  });

});
