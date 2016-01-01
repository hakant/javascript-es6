describe("using const", function() {
  "use strict";

  it("will make a variable readonly", function() {

    const MAX_SIZE = 12;

    //MAX_SIZE = 10;

    expect(MAX_SIZE).toBe(12);

  });

  it("can shadow outer declaration", function(){

    const x = 12;

    var doWork = function(){
      let x = 10;
      return x;
    }

    var result = doWork();
    expect(result).toBe(10);
    expect(x).toBe(12);

  });
});
