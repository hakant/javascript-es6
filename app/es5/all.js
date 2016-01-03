"use strict";

describe("using const", function () {
  "use strict";

  it("will make a variable readonly", function () {

    var MAX_SIZE = 12;

    //MAX_SIZE = 10;

    expect(MAX_SIZE).toBe(12);
  });

  it("can shadow outer declaration", function () {

    var x = 12;

    var doWork = function doWork() {
      var x = 10;
      return x;
    };

    var result = doWork();
    expect(result).toBe(10);
    expect(x).toBe(12);
  });
});
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

describe("default parameters", function () {

  it("provides defaults", function () {

    var doWork = function doWork() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? "Hakan" : arguments[0];

      return name;
    };

    var result = doWork();
    expect(result).toBe("Hakan");
  });

  it("will provide a value for undefined", function () {

    var doWork = function doWork() {
      var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
      var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
      var c = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];

      return [a, b, c];
    };

    var _doWork = doWork(5, undefined);

    var _doWork2 = _slicedToArray(_doWork, 3);

    var a = _doWork2[0];
    var b = _doWork2[1];
    var c = _doWork2[2];

    expect(a).toBe(5);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  it("works with destructuring", function () {

    var doWork = function doWork(url, _ref) {
      var _ref$data = _ref.data;
      var data = _ref$data === undefined ? "Hakan" : _ref$data;
      var _ref$cache = _ref.cache;
      var cache = _ref$cache === undefined ? true : _ref$cache;

      return data;
    };

    var result = doWork("api/test", {
      cache: false
    });

    expect(result).toBe("Hakan");
  });
});
"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

describe("destructuring", function () {
  "use strict";

  it("can destructure arrays", function () {

    var x = 2;
    var y = 3;

    var _ref = [y, x];
    x = _ref[0];
    y = _ref[1];

    expect(x).toBe(3);
    expect(y).toBe(2);
  });

  it("can destructure arrays_2", function () {
    var x = 3;
    var y = 2;

    expect(x).toBe(3);
    expect(y).toBe(2);
  });

  it("can destructure arrays_return_func", function () {

    var doWork = function doWork() {
      return [1, 3, 2];
    };

    var _doWork = doWork();

    var _doWork2 = _slicedToArray(_doWork, 4);

    var x = _doWork2[1];
    var y = _doWork2[2];
    var z = _doWork2[3];

    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });

  it("can destructure objects", function () {

    var doWork = function doWork() {
      return {
        firstName: "Hakan",
        lastName: "Tuncer",
        handles: {
          twitter: "hakant"
        }
      };
    };

    var _doWork3 = doWork();

    var firstName = _doWork3.firstName;
    var twitter = _doWork3.handles.twitter;

    expect(firstName).toBe("Hakan");
    expect(twitter).toBe("hakant");
  });

  it("works with parameters", function () {

    var doWork = function doWork(url, _ref2) {
      var data = _ref2.data;
      var cache = _ref2.cache;
      var headers = _ref2.headers;

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
"use strict";

describe("how let works", function () {

  it("will provide block scoping unline var", function () {
    var doWork = function doWork(flag) {
      if (flag) {
        var x = 3;
        return x;
      }
    };

    var result = doWork(true);
    expect(result).toBe(3);
  });

  it("will provide block scoping with for", function () {
    var doWork = function doWork() {
      for (var i = 0; i < 10; i++) {}

      return i;
    };

    var result = doWork();
    expect(result).toBe(10);
  });
});
"use strict";

describe("rest parameters", function () {

  it("is like var args", function () {
    var doWork = function doWork(name) {
      var result = 0;

      for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        numbers[_key - 1] = arguments[_key];
      }

      numbers.forEach(function (n) {
        result += n;
      });
      return result;
    };

    var result = doWork("Hakan", 1, 2, 3);
    expect(result).toBe(6);
  });

  it("defaults to empty array rather than undefined or null", function () {
    var doWork = function doWork(name) {
      var result = 0;

      for (var _len2 = arguments.length, numbers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        numbers[_key2 - 1] = arguments[_key2];
      }

      numbers.forEach(function (n) {
        result += n;
      });
      return result;
    };

    var result = doWork("Hakan");
    expect(result).toBe(0);
  });
});
"use strict";

describe("the spread", function () {

  it("can spread an array across parameters", function () {

    var doWork = function doWork(x, y, z) {
      return x + y + z;
    };

    var result = doWork.apply(undefined, [1, 2, 3]);

    expect(result).toBe(6);
  });

  it("can build arrays", function () {

    var a = [4, 5, 6];
    var b = [1, 2, 3].concat(a, [7, 8, 9]);

    expect(b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
"use strict";

var _templateObject = _taggedTemplateLiteral(["", " + ", " is ", ""], ["", " + ", " is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe("template literals", function () {

  it("can easily combine literals and data", function () {

    var doWork = function doWork(name) {
      return "Hello, " + name;
    };

    var result = doWork("Hakan");

    expect(result).toBe("Hello, Hakan");
  });

  it("can help building URLs", function () {

    var category = "music";
    var id = 2112;

    var url = "http://apiserver/" + category + "/" + id;

    expect(url).toBe("http://apiserver/music/2112");
  });

  it("can use tags", function () {

    var upper = function upper(strings) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      // for some reason if values is not referred here like below
      // transpilation doesn't work
      console.log(values);

      var result = "";
      for (var i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
          result += values[i];
        }
      }
      return result.toUpperCase();
    };

    var x = 1;
    var y = 3;
    var result = upper(_templateObject, x, y, x + y);

    expect(result).toBe("1 + 3 IS 4");
  });
});
//# sourceMappingURL=all.js.map
