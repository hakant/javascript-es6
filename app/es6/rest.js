describe("rest parameters", function() {

  it("is like var args", function() {
    let doWork = function(name, ...numbers){
      let result = 0;
      numbers.forEach(function(n){
        result += n;
      })
      return result;
    }

    let result = doWork("Hakan", 1, 2, 3);
    expect(result).toBe(6);

  });

  it("defaults to empty array rather than undefined or null", function() {
    let doWork = function(name, ...numbers){
      let result = 0;
      numbers.forEach(function(n){
        result += n;
      })
      return result;
    }

    let result = doWork("Hakan");
    expect(result).toBe(0);

  });

});
