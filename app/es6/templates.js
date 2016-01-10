describe("template literals", function() {

  it("can easily combine literals and data", function() {

    let doWork = function(name) {
      return `Hello, ${name}`;
    };

    let result = doWork("Hakan");

    expect(result).toBe("Hello, Hakan");

  });

  it("can help building URLs", function() {

    let category = "music";
    let id = 2112;

    let url = `http://apiserver/${category}/${id}`;

    expect(url).toBe("http://apiserver/music/2112");

  });

  // // TODO: Look into this - transpilation gets broken
  // it("can use tags", function(){
  //
  //   let upper = function(strings, ...values){
  //
  //     // for some reason if values is not referred here like below
  //     // transpilation doesn't work
  //     console.log(values);
  //
  //     let result = "";
  //     for (var i = 0; i < strings.length; i++) {
  //       result += strings[i];
  //       if (i < values.length) {
  //         result += values[i];
  //       }
  //     }
  //     return result.toUpperCase();
  //   };
  //
  //   var x = 1;
  //   var y = 3;
  //   var result = upper `${x} + ${y} is ${x+y}`;
  //
  //   expect(result).toBe("1 + 3 IS 4");
  //
  // });

});
