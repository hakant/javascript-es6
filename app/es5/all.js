"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("the class keyword", function () {

  it("can create a class", function () {
    var Employee = (function () {
      function Employee() {
        _classCallCheck(this, Employee);
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return "complete!";
        }
      }, {
        key: "getName",
        value: function getName() {
          return "Hakan";
        }
      }]);

      return Employee;
    })();

    var e = new Employee();

    expect(e.doWork()).toBe("complete!");
    expect(e.getName()).toBe("Hakan");
    expect(Employee.prototype.doWork.call(e)).toBe("complete!");
  });

  it("can have a constructor", function () {
    var Employee = (function () {
      function Employee(name) {
        _classCallCheck(this, Employee);

        this._name = name;
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return "complete!";
        }
      }, {
        key: "getName",
        value: function getName() {
          return this._name;
        }
      }]);

      return Employee;
    })();

    var e1 = new Employee("Hakan");
    var e2 = new Employee("Alex");

    expect(e1.getName()).toBe("Hakan");
    expect(e2.getName()).toBe("Alex");
  });

  it("can have getters and setters", function () {
    var Employee = (function () {
      function Employee(name) {
        _classCallCheck(this, Employee);

        this.name = name;
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return "complete!";
        }
      }, {
        key: "name",
        get: function get() {
          return this._name.toUpperCase();
        },
        set: function set(newValue) {
          if (newValue) {
            this._name = newValue;
          }
        }
      }]);

      return Employee;
    })();

    var e1 = new Employee("Hakan");
    var e2 = new Employee("Alex");

    expect(e1.name).toBe("HAKAN");
    expect(e2.name).toBe("ALEX");

    e1.name = "Chris";
    expect(e1.name).toBe("CHRIS");

    e1.name = null;
    expect(e1.name).toBe("CHRIS");
  });

  it("can have a super class", function () {
    var Person = (function () {
      function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
      }

      _createClass(Person, [{
        key: "name",
        get: function get() {
          return this._name;
        },
        set: function set(newValue) {
          if (newValue) {
            this._name = newValue;
          }
        }
      }]);

      return Person;
    })();

    var Employee = (function (_Person) {
      _inherits(Employee, _Person);

      function Employee() {
        _classCallCheck(this, Employee);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Employee).apply(this, arguments));
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return this.name + " is working";
        }
      }]);

      return Employee;
    })(Person);

    var p1 = new Person("Hakan");
    var e1 = new Employee("Christopher");

    expect(p1.name).toBe("Hakan");
    expect(e1.name).toBe("Christopher");

    expect(e1.doWork()).toBe("Christopher is working");
  });

  it("can invoke super methods", function () {
    var Person = (function () {
      function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
      }

      _createClass(Person, [{
        key: "name",
        get: function get() {
          return this._name;
        },
        set: function set(newValue) {
          if (newValue) {
            this._name = newValue;
          }
        }
      }]);

      return Person;
    })();

    var Employee = (function (_Person2) {
      _inherits(Employee, _Person2);

      function Employee(title, name) {
        _classCallCheck(this, Employee);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Employee).call(this, name));

        _this2._title = title;
        return _this2;
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return this.name + " is working";
        }
      }, {
        key: "title",
        get: function get() {
          return this._title;
        }
      }]);

      return Employee;
    })(Person);

    var e1 = new Employee("Developer", "Hakan");

    expect(e1.name).toBe("Hakan");
    expect(e1.title).toBe("Developer");
  });

  it("can override methods", function () {
    var Person = (function () {
      function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
      }

      _createClass(Person, [{
        key: "doWork",
        value: function doWork() {
          return "free";
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.name;
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        },
        set: function set(newValue) {
          if (newValue) {
            this._name = newValue;
          }
        }
      }]);

      return Person;
    })();

    var Employee = (function (_Person3) {
      _inherits(Employee, _Person3);

      function Employee(title, name) {
        _classCallCheck(this, Employee);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Employee).call(this, name));

        _this3._title = title;
        return _this3;
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return "paid";
        }
      }, {
        key: "title",
        get: function get() {
          return this._title;
        }
      }]);

      return Employee;
    })(Person);

    var p1 = new Person("Alex");
    var e1 = new Employee("Developer", "Hakan");

    expect(p1.doWork()).toBe("free");
    expect(e1.doWork()).toBe("paid");
    expect(p1.toString()).toBe("Alex");
    expect(e1.toString()).toBe("Hakan");

    var makeEveryoneWork = function makeEveryoneWork() {
      var results = [];

      for (var _len = arguments.length, people = Array(_len), _key = 0; _key < _len; _key++) {
        people[_key] = arguments[_key];
      }

      for (var i = 0; i < people.length; i++) {
        if (people[i] instanceof Person) {
          results.push(people[i].doWork());
        }
      }

      return results;
    };

    expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "paid"]);
  });
});
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
