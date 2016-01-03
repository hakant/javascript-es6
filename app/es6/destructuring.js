describe("destructuring", function() {
  "use strict";

  it("can destructure arrays", function() {

    let x = 2;
    let y = 3;

    [x, y] = [y, x];

    expect(x).toBe(3);
    expect(y).toBe(2);
  });

  it("can destructure arrays_2", function() {

    let [x, y] = [3, 2];

    expect(x).toBe(3);
    expect(y).toBe(2);
  });

  it("can destructure arrays_return_func", function() {

    var doWork = function() {
      return [1, 3, 2];
    };

    let [, x, y, z] = doWork();

    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();

  });

  it("can destructure objects", function() {

    let doWork = function() {
      return {
        firstName: "Hakan",
        lastName: "Tuncer",
        handles: {
          twitter: "hakant"
        }
      }
    };

    let {
      firstName,
      handles: {
        twitter
      }
    } = doWork();

    expect(firstName).toBe("Hakan");
    expect(twitter).toBe("hakant");
  });

  it("works with parameters", function() {

    let doWork = function(url, {
      data, cache, headers
    }) {
      expect(headers).toBeUndefined();
      return data;
    };

    var result = doWork("api/test", {
      data: "test",
      cache: false
    });

    expect(result).toBe("test");

  });

});
