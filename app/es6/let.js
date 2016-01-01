describe("how let works", function(){

  it("will provide block scoping unline var", function() {
    var doWork = function(flag){
      if (flag){
        let x = 3;
        return x;
      }
    }

    var result = doWork(true);
    expect(result).toBe(3);
  });

  it("will provide block scoping with for", function() {
    var doWork = function(){
      for (var i = 0; i < 10; i++){ 

      }

      return i;
    }

    var result = doWork();
    expect(result).toBe(10);
  });

});
