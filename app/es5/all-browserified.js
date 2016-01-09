(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _of = require("babel-runtime/core-js/array/of");

var _of2 = _interopRequireDefault(_of);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Arrays", function () {

   it("should return the first matching element using find", function () {
      var arr = [1, 5, 10];
      var match = arr.find(function (x) {
         return x > 8;
      });

      expect(match).toBe(10);
   });

   it("should return the first matching index using findIndex", function () {
      var match = [1, 5, 10].findIndex(function (i) {
         return i > 3;
      });
      expect(match).toBe(1);
   });

   it("should fill in the entire array when fill is called", function () {
      var arr = [1, 2, 3, 4, 5];
      arr.fill('a'); // every element in this array is now 'a'
      expect(arr[3]).toBe('a');
   });

   it("should fill in some of the array when fill is called with args", function () {
      var arr = [1, 2, 3, 4, 5];
      arr.fill('a', 2, 3); // every element in this array is now 'a'
      expect(arr[2]).toBe('a');
      expect(arr[1]).toBe(2);
      expect(arr[3]).toBe(4);
   });

   it("should create a new array with 1 arg when given 1 arg when of is called", function () {
      var arr = new Array(3);
      var ofArr = (0, _of2.default)(3);
      expect(arr.length).toBe(3);
      expect(ofArr.length).toBe(1);
   });

   it("should create a new array from an array-like object when from is called", function () {
      // arrayLike is not a true array
      var arrayLike = document.querySelectorAll('div');
      expect(arrayLike.forEach).toBe(undefined);

      var fromArray = (0, _from2.default)(arrayLike);
      expect(fromArray.forEach).toBeDefined();
   });

   it("should return entries from the entries function", function () {
      var a = ['Joe', 'Jim', 'John'];
      var entries = a.entries();

      var firstEntry = entries.next().value;
      expect(firstEntry[0]).toBe(0);
      expect(firstEntry[1]).toBe("Joe");
   });

   it("should enumerate keys with the keys function", function () {
      var a = ['Joe', 'Jim', 'John'];
      var keys = a.keys();

      var firstKey = keys.next().value;
      expect(firstKey).toBe(0);
   });
});
"use strict";

describe("arrow functions", function () {

  it("provide a compact syntax to define a function", function () {

    var add = function add(x, y) {
      return x + y;
    };
    var square = function square(x) {
      return x * x;
    };
    var three = function three() {
      return 3;
    };

    expect(add(2, 3)).toBe(5);
    expect(square(2)).toBe(4);
    expect(three()).toBe(3);
  });

  it("can be used with array methods", function () {

    var numbers = [1, 2, 3, 4];
    var sum = 0;

    numbers.forEach(function (n) {
      return sum += n;
    });
    expect(sum).toBe(10);

    var doubled = numbers.map(function (n) {
      return 2 * n;
    });
    expect(doubled).toEqual([2, 4, 6, 8]);
  });

  it("lexically binds to this", function (done) {
    var _this = this;

    this.name = "Hakan";

    setTimeout(function () {
      expect(_this.name).toBe("Hakan");
      done();
    }, 15);
  });
});
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("the class keyword", function () {

  it("can create a class", function () {
    var Employee = (function () {
      function Employee() {
        (0, _classCallCheck3.default)(this, Employee);
      }

      (0, _createClass3.default)(Employee, [{
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
        (0, _classCallCheck3.default)(this, Employee);

        this._name = name;
      }

      (0, _createClass3.default)(Employee, [{
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
        (0, _classCallCheck3.default)(this, Employee);

        this.name = name;
      }

      (0, _createClass3.default)(Employee, [{
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
        (0, _classCallCheck3.default)(this, Person);

        this.name = name;
      }

      (0, _createClass3.default)(Person, [{
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
      (0, _inherits3.default)(Employee, _Person);

      function Employee() {
        (0, _classCallCheck3.default)(this, Employee);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Employee).apply(this, arguments));
      }

      (0, _createClass3.default)(Employee, [{
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
        (0, _classCallCheck3.default)(this, Person);

        this.name = name;
      }

      (0, _createClass3.default)(Person, [{
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
      (0, _inherits3.default)(Employee, _Person2);

      function Employee(title, name) {
        (0, _classCallCheck3.default)(this, Employee);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Employee).call(this, name));

        _this2._title = title;
        return _this2;
      }

      (0, _createClass3.default)(Employee, [{
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
        (0, _classCallCheck3.default)(this, Person);

        this.name = name;
      }

      (0, _createClass3.default)(Person, [{
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
      (0, _inherits3.default)(Employee, _Person3);

      function Employee(title, name) {
        (0, _classCallCheck3.default)(this, Employee);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Employee).call(this, name));

        _this3._title = title;
        return _this3;
      }

      (0, _createClass3.default)(Employee, [{
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

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    var _doWork2 = (0, _slicedToArray3.default)(_doWork, 3);

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

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    var _doWork2 = (0, _slicedToArray3.default)(_doWork, 4);

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

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("generators", function () {

  it("can build an iterable", function () {

    var numbers = _regenerator2.default.mark(function numbers(start, end) {
      var i;
      return _regenerator2.default.wrap(function numbers$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = start;

            case 1:
              if (!(i <= end)) {
                _context.next = 8;
                break;
              }

              console.log(i);
              _context.next = 5;
              return i;

            case 5:
              i++;
              _context.next = 1;
              break;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, numbers, this);
    });

    var sum = 0;
    var iterator = numbers(1, 5);
    console.log("next");
    var next = iterator.next();
    while (!next.done) {
      sum += next.value;
      console.log("next");
      next = iterator.next();
    }

    expect(sum).toBe(15);
  });

  it("can build an iterable - for of", function () {

    var numbers = _regenerator2.default.mark(function numbers(start, end) {
      var i;
      return _regenerator2.default.wrap(function numbers$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              i = start;

            case 1:
              if (!(i <= end)) {
                _context2.next = 8;
                break;
              }

              console.log(i);
              _context2.next = 5;
              return i;

            case 5:
              i++;
              _context2.next = 1;
              break;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, numbers, this);
    });

    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(numbers(1, 5)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        sum += n;
        console.log("next");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var iterator = numbers(1, 5);
    console.log("next");

    expect(sum).toBe(15);
  });

  it("can take a parameter from next(param)", function () {

    var range = _regenerator2.default.mark(function range(start, end) {
      var current, delta;
      return _regenerator2.default.wrap(function range$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              current = start;

            case 1:
              if (!(current <= end)) {
                _context3.next = 8;
                break;
              }

              _context3.next = 4;
              return current;

            case 4:
              delta = _context3.sent;

              current += delta || 1;
              _context3.next = 1;
              break;

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, range, this);
    });

    var result = [];
    var iterator = range(1, 10);
    var next = iterator.next();
    while (!next.done) {
      result.push(next.value);
      next = iterator.next(2);
    }

    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  it("can take a parameter from next(param) - building it manually", function () {

    var range = _regenerator2.default.mark(function range(start, end) {
      var current, _delta;

      return _regenerator2.default.wrap(function range$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              current = start;

            case 1:
              if (!(current <= end)) {
                _context4.next = 8;
                break;
              }

              _context4.next = 4;
              return current;

            case 4:
              _delta = _context4.sent;

              current += _delta || 1;
              _context4.next = 1;
              break;

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, range, this);
    });

    var range2 = function range2(start, end) {
      var current = start;
      var first = true;
      return {
        next: function next() {
          var delta = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

          var result = {
            value: undefined,
            done: true
          };
          if (!first) {
            current += delta;
          }
          if (current <= end) {
            result.value = current;
            result.done = false;
          }
          first = false;
          return result;
        }
      };
    };

    var result = [];
    var iterator = range2(1, 10);
    var next = iterator.next();
    while (!next.done) {
      result.push(next.value);
      next = iterator.next(2);
    }

    expect(result).toEqual([1, 3, 5, 7, 9]);
  });
});
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _iterator9 = require("babel-runtime/core-js/symbol/iterator");

var _iterator10 = _interopRequireDefault(_iterator9);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("iterables", function () {

  it("can work with iterators at a low level", function () {

    var sum = 0;
    var numbers = [1, 2, 3, 4];

    // for loop
    sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    expect(sum).toBe(10);

    // for in
    sum = 0;
    for (var i in numbers) {
      sum += numbers[i];
    }
    expect(sum).toBe(10);

    // iterator
    sum = 0;
    var iterator = numbers.values();
    var next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toBe(10);
  });
});

describe("for of", function () {

  it("can work with iterables at a higher level", function () {
    var sum = 0;
    var numbers = [1, 2, 3, 4];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(numbers), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        sum += i;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    expect(sum).toBe(10);
  });
});

describe("iterable", function () {

  it("can be built by implementing Symbol.iterator manually without a generator", function () {
    var Company = (function () {
      function Company() {
        (0, _classCallCheck3.default)(this, Company);

        this.employees = [];
      }

      (0, _createClass3.default)(Company, [{
        key: "addEmployees",
        value: function addEmployees() {
          for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
            names[_key] = arguments[_key];
          }

          this.employees = this.employees.concat(names);
        }
      }, {
        key: _iterator10.default,
        value: function value() {
          return new ArrayIterator(this.employees);
        }
      }]);
      return Company;
    })();

    var ArrayIterator = (function () {
      function ArrayIterator(array) {
        (0, _classCallCheck3.default)(this, ArrayIterator);

        this.array = array;
        this.index = 0;
      }

      (0, _createClass3.default)(ArrayIterator, [{
        key: "next",
        value: function next() {
          var result = {
            value: undefined,
            done: true
          };

          if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
          }

          return result;
        }
      }]);
      return ArrayIterator;
    })();

    var count = 0;
    var company = new Company();
    company.addEmployees("Tim", "Sue", "Joy", "Tom");

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator3.default)(company), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var employee = _step2.value;

        count += 1;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    expect(count).toBe(4);
  });

  it("can be built by implementing Symbol.iterator", function () {
    var Company = (function () {
      function Company() {
        (0, _classCallCheck3.default)(this, Company);

        this.employees = [];
      }

      (0, _createClass3.default)(Company, [{
        key: "addEmployees",
        value: function addEmployees() {
          for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            names[_key2] = arguments[_key2];
          }

          this.employees = this.employees.concat(names);
        }
      }, {
        key: _iterator10.default,
        value: _regenerator2.default.mark(function value() {
          var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, e;

          return _regenerator2.default.wrap(function value$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _iteratorNormalCompletion3 = true;
                  _didIteratorError3 = false;
                  _iteratorError3 = undefined;
                  _context.prev = 3;
                  _iterator3 = (0, _getIterator3.default)(this.employees);

                case 5:
                  if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                    _context.next = 13;
                    break;
                  }

                  e = _step3.value;

                  console.log(e);
                  _context.next = 10;
                  return e;

                case 10:
                  _iteratorNormalCompletion3 = true;
                  _context.next = 5;
                  break;

                case 13:
                  _context.next = 19;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context["catch"](3);
                  _didIteratorError3 = true;
                  _iteratorError3 = _context.t0;

                case 19:
                  _context.prev = 19;
                  _context.prev = 20;

                  if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                  }

                case 22:
                  _context.prev = 22;

                  if (!_didIteratorError3) {
                    _context.next = 25;
                    break;
                  }

                  throw _iteratorError3;

                case 25:
                  return _context.finish(22);

                case 26:
                  return _context.finish(19);

                case 27:
                case "end":
                  return _context.stop();
              }
            }
          }, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        })
      }]);
      return Company;
    })();

    var count = 0;
    var company = new Company();
    company.addEmployees("Tim", "Sue", "Joy", "Tom");

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = (0, _getIterator3.default)(company), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var employee = _step4.value;

        count += 1;
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    expect(count).toBe(4);
  });

  it("can be used in functional compositions", function () {
    var Company = (function () {
      function Company() {
        (0, _classCallCheck3.default)(this, Company);

        this.employees = [];
      }

      (0, _createClass3.default)(Company, [{
        key: "addEmployees",
        value: function addEmployees() {
          for (var _len3 = arguments.length, names = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            names[_key3] = arguments[_key3];
          }

          this.employees = this.employees.concat(names);
        }
      }, {
        key: _iterator10.default,
        value: _regenerator2.default.mark(function value() {
          var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _e;

          return _regenerator2.default.wrap(function value$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _iteratorNormalCompletion5 = true;
                  _didIteratorError5 = false;
                  _iteratorError5 = undefined;
                  _context2.prev = 3;
                  _iterator5 = (0, _getIterator3.default)(this.employees);

                case 5:
                  if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                    _context2.next = 13;
                    break;
                  }

                  _e = _step5.value;

                  console.log(_e);
                  _context2.next = 10;
                  return _e;

                case 10:
                  _iteratorNormalCompletion5 = true;
                  _context2.next = 5;
                  break;

                case 13:
                  _context2.next = 19;
                  break;

                case 15:
                  _context2.prev = 15;
                  _context2.t0 = _context2["catch"](3);
                  _didIteratorError5 = true;
                  _iteratorError5 = _context2.t0;

                case 19:
                  _context2.prev = 19;
                  _context2.prev = 20;

                  if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                  }

                case 22:
                  _context2.prev = 22;

                  if (!_didIteratorError5) {
                    _context2.next = 25;
                    break;
                  }

                  throw _iteratorError5;

                case 25:
                  return _context2.finish(22);

                case 26:
                  return _context2.finish(19);

                case 27:
                case "end":
                  return _context2.stop();
              }
            }
          }, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        })
      }]);
      return Company;
    })();

    var filter = _regenerator2.default.mark(function filter(items, predicate) {
      var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, item;

      return _regenerator2.default.wrap(function filter$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _iteratorNormalCompletion6 = true;
              _didIteratorError6 = false;
              _iteratorError6 = undefined;
              _context3.prev = 3;
              _iterator6 = (0, _getIterator3.default)(items);

            case 5:
              if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                _context3.next = 14;
                break;
              }

              item = _step6.value;

              console.log("filtering", item);

              if (!predicate(item)) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return item;

            case 11:
              _iteratorNormalCompletion6 = true;
              _context3.next = 5;
              break;

            case 14:
              _context3.next = 20;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              _didIteratorError6 = true;
              _iteratorError6 = _context3.t0;

            case 20:
              _context3.prev = 20;
              _context3.prev = 21;

              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }

            case 23:
              _context3.prev = 23;

              if (!_didIteratorError6) {
                _context3.next = 26;
                break;
              }

              throw _iteratorError6;

            case 26:
              return _context3.finish(23);

            case 27:
              return _context3.finish(20);

            case 28:
            case "end":
              return _context3.stop();
          }
        }
      }, filter, this, [[3, 16, 20, 28], [21,, 23, 27]]);
    });

    var take = _regenerator2.default.mark(function take(items, number) {
      var count, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _item;

      return _regenerator2.default.wrap(function take$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              count = 0;

              if (!(number < 1)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              _iteratorNormalCompletion7 = true;
              _didIteratorError7 = false;
              _iteratorError7 = undefined;
              _context4.prev = 6;
              _iterator7 = (0, _getIterator3.default)(items);

            case 8:
              if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                _context4.next = 19;
                break;
              }

              _item = _step7.value;

              console.log("taking", _item);
              _context4.next = 13;
              return _item;

            case 13:
              count++;

              if (!(count >= number)) {
                _context4.next = 16;
                break;
              }

              return _context4.abrupt("return");

            case 16:
              _iteratorNormalCompletion7 = true;
              _context4.next = 8;
              break;

            case 19:
              _context4.next = 25;
              break;

            case 21:
              _context4.prev = 21;
              _context4.t0 = _context4["catch"](6);
              _didIteratorError7 = true;
              _iteratorError7 = _context4.t0;

            case 25:
              _context4.prev = 25;
              _context4.prev = 26;

              if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
              }

            case 28:
              _context4.prev = 28;

              if (!_didIteratorError7) {
                _context4.next = 31;
                break;
              }

              throw _iteratorError7;

            case 31:
              return _context4.finish(28);

            case 32:
              return _context4.finish(25);

            case 33:
            case "end":
              return _context4.stop();
          }
        }
      }, take, this, [[6, 21, 25, 33], [26,, 28, 32]]);
    });

    var count = 0;
    var company = new Company();
    company.addEmployees("Tim", "Sue", "Joy", "Tom");

    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = (0, _getIterator3.default)(take(filter(company, function (e) {
        return e[0] === "T";
      }), 1)), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var employee = _step8.value;

        count += 1;
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8.return) {
          _iterator8.return();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }

    expect(count).toBe(1);
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

var _isSafeInteger = require("babel-runtime/core-js/number/is-safe-integer");

var _isSafeInteger2 = _interopRequireDefault(_isSafeInteger);

var _minSafeInteger = require("babel-runtime/core-js/number/min-safe-integer");

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _maxSafeInteger = require("babel-runtime/core-js/number/max-safe-integer");

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

var _isInteger = require("babel-runtime/core-js/number/is-integer");

var _isInteger2 = _interopRequireDefault(_isInteger);

var _isNan = require("babel-runtime/core-js/number/is-nan");

var _isNan2 = _interopRequireDefault(_isNan);

var _isFinite = require("babel-runtime/core-js/number/is-finite");

var _isFinite2 = _interopRequireDefault(_isFinite);

var _parseFloat = require("babel-runtime/core-js/number/parse-float");

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _parseInt = require("babel-runtime/core-js/number/parse-int");

var _parseInt2 = _interopRequireDefault(_parseInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Numbers", function () {
  var a = 10;
  var hexd = 0xa;

  it("should support octal literals", function () {

    // The old way.
    // This doesn't transpile with Babel 6 - invalid number
    //var octal = 071;

    // New way
    var octal = 57;
    expect(octal).toBe(57);
  });

  it("should support binary literals", function () {
    var bin = 13;
    expect(bin).toBe(13);
  });

  it("should parse octal values with Number function", function () {
    var octNum = Number("0o71");
    expect(octNum).toBe(57);
  });

  it("should parse binary values with Number function", function () {
    var octNum = Number("0b101");
    expect(octNum).toBe(5);
  });

  it("should expose parseInt and parseFloat", function () {
    expect((0, _parseInt2.default)("3")).toBe(3);
    expect((0, _parseFloat2.default)("3.2")).toBe(3.2);
  });

  it("should not convert strings when calling Number.isFinite vs global", function () {
    expect(isFinite("1")).toBe(true);
    expect((0, _isFinite2.default)("1")).toBe(false);
  });

  it("should not convert strings when calling Number.isNaN vs global", function () {
    expect(isNaN("NaN")).toBe(true);
    expect((0, _isNan2.default)("NaN")).toBe(false);
  });

  it("should correctly detect integers with isInteger", function () {
    expect((0, _isInteger2.default)(1)).toBe(true);
    expect((0, _isInteger2.default)(1.0)).toBe(true);
    expect((0, _isInteger2.default)(1.5)).toBe(false);
  });

  it("should expose max and min safe integer constants", function () {
    expect(Math.pow(2, 53)).toBe(Math.pow(2, 53) + 1); // js weirdness
    expect(Math.pow(2, 53) + 3).toBe(Math.pow(2, 53) + 5); // js weirdness

    expect(_maxSafeInteger2.default).toBe(Math.pow(2, 53) - 1);
    expect(_minSafeInteger2.default).toBe(Math.pow(2, 53) * -1 + 1);
  });

  it("should indicate safe integers with isSafeInteger", function () {
    expect((0, _isSafeInteger2.default)(9007199254740991)).toBe(true); //Math.pow(2,53)
    expect((0, _isSafeInteger2.default)(9007199254740992)).toBe(false); //Math.pow(2,53) + 1
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", " + ", " is ", ""], ["", " + ", " is ", ""]);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


},{"babel-runtime/core-js/array/from":2,"babel-runtime/core-js/array/of":3,"babel-runtime/core-js/get-iterator":4,"babel-runtime/core-js/number/is-finite":6,"babel-runtime/core-js/number/is-integer":7,"babel-runtime/core-js/number/is-nan":8,"babel-runtime/core-js/number/is-safe-integer":9,"babel-runtime/core-js/number/max-safe-integer":10,"babel-runtime/core-js/number/min-safe-integer":11,"babel-runtime/core-js/number/parse-float":12,"babel-runtime/core-js/number/parse-int":13,"babel-runtime/core-js/object/get-prototype-of":18,"babel-runtime/core-js/symbol/iterator":22,"babel-runtime/helpers/classCallCheck":23,"babel-runtime/helpers/createClass":24,"babel-runtime/helpers/inherits":25,"babel-runtime/helpers/possibleConstructorReturn":26,"babel-runtime/helpers/slicedToArray":27,"babel-runtime/helpers/taggedTemplateLiteral":28,"babel-runtime/regenerator":127}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":30}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/of"), __esModule: true };
},{"core-js/library/fn/array/of":31}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":32}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":33}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-finite"), __esModule: true };
},{"core-js/library/fn/number/is-finite":34}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-integer"), __esModule: true };
},{"core-js/library/fn/number/is-integer":35}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-nan"), __esModule: true };
},{"core-js/library/fn/number/is-nan":36}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/is-safe-integer"), __esModule: true };
},{"core-js/library/fn/number/is-safe-integer":37}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/max-safe-integer"), __esModule: true };
},{"core-js/library/fn/number/max-safe-integer":38}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/min-safe-integer"), __esModule: true };
},{"core-js/library/fn/number/min-safe-integer":39}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/parse-float"), __esModule: true };
},{"core-js/library/fn/number/parse-float":40}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/number/parse-int"), __esModule: true };
},{"core-js/library/fn/number/parse-int":41}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":42}],15:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":43}],16:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":44}],17:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":45}],18:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":46}],19:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":47}],20:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":48}],21:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":49}],22:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":50}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
},{"../core-js/object/define-property":16}],25:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":14,"../core-js/object/set-prototype-of":19,"../helpers/typeof":29}],26:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":29}],27:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();
},{"../core-js/get-iterator":4,"../core-js/is-iterable":5}],28:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperties = require("../core-js/object/define-properties");

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _freeze = require("../core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (strings, raw) {
  return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {
    raw: {
      value: (0, _freeze2.default)(raw)
    }
  }));
};
},{"../core-js/object/define-properties":15,"../core-js/object/freeze":17}],29:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

exports.default = function (obj) {
  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":21}],30:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":56,"../../modules/es6.array.from":108,"../../modules/es6.string.iterator":124}],31:[function(require,module,exports){
require('../../modules/es6.array.of');
module.exports = require('../../modules/$.core').Array.of;
},{"../../modules/$.core":56,"../../modules/es6.array.of":110}],32:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":106,"../modules/es6.string.iterator":124,"../modules/web.dom.iterable":126}],33:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":107,"../modules/es6.string.iterator":124,"../modules/web.dom.iterable":126}],34:[function(require,module,exports){
require('../../modules/es6.number.is-finite');
module.exports = require('../../modules/$.core').Number.isFinite;
},{"../../modules/$.core":56,"../../modules/es6.number.is-finite":111}],35:[function(require,module,exports){
require('../../modules/es6.number.is-integer');
module.exports = require('../../modules/$.core').Number.isInteger;
},{"../../modules/$.core":56,"../../modules/es6.number.is-integer":112}],36:[function(require,module,exports){
require('../../modules/es6.number.is-nan');
module.exports = require('../../modules/$.core').Number.isNaN;
},{"../../modules/$.core":56,"../../modules/es6.number.is-nan":113}],37:[function(require,module,exports){
require('../../modules/es6.number.is-safe-integer');
module.exports = require('../../modules/$.core').Number.isSafeInteger;
},{"../../modules/$.core":56,"../../modules/es6.number.is-safe-integer":114}],38:[function(require,module,exports){
require('../../modules/es6.number.max-safe-integer');
module.exports = 0x1fffffffffffff;
},{"../../modules/es6.number.max-safe-integer":115}],39:[function(require,module,exports){
require('../../modules/es6.number.min-safe-integer');
module.exports = -0x1fffffffffffff;
},{"../../modules/es6.number.min-safe-integer":116}],40:[function(require,module,exports){
require('../../modules/es6.number.parse-float');
module.exports = parseFloat;
},{"../../modules/es6.number.parse-float":117}],41:[function(require,module,exports){
require('../../modules/es6.number.parse-int');
module.exports = parseInt;
},{"../../modules/es6.number.parse-int":118}],42:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":82}],43:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":82}],44:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":82}],45:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/$.core').Object.freeze;
},{"../../modules/$.core":56,"../../modules/es6.object.freeze":119}],46:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":56,"../../modules/es6.object.get-prototype-of":120}],47:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":56,"../../modules/es6.object.set-prototype-of":121}],48:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":56,"../modules/es6.object.to-string":122,"../modules/es6.promise":123,"../modules/es6.string.iterator":124,"../modules/web.dom.iterable":126}],49:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":56,"../../modules/es6.object.to-string":122,"../../modules/es6.symbol":125}],50:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":104,"../../modules/es6.string.iterator":124,"../../modules/web.dom.iterable":126}],51:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],52:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],53:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":75}],54:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":55,"./$.wks":104}],55:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],56:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],57:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":51}],58:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],59:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":63}],60:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":66,"./$.is-object":75}],61:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":82}],62:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":56,"./$.ctx":57,"./$.global":66}],63:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],64:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":53,"./$.ctx":57,"./$.is-array-iter":72,"./$.iter-call":76,"./$.to-length":101,"./core.get-iterator-method":105}],65:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":82,"./$.to-iobject":100}],66:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],67:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],68:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":82,"./$.descriptors":59,"./$.property-desc":87}],69:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":66}],70:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],71:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":55}],72:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":81,"./$.wks":104}],73:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":55}],74:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./$.is-object')
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"./$.is-object":75}],75:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],76:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":53}],77:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":82,"./$.hide":68,"./$.property-desc":87,"./$.set-to-string-tag":93,"./$.wks":104}],78:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":82,"./$.export":62,"./$.has":67,"./$.hide":68,"./$.iter-create":77,"./$.iterators":81,"./$.library":84,"./$.redefine":89,"./$.set-to-string-tag":93,"./$.wks":104}],79:[function(require,module,exports){
var ITERATOR     = require('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":104}],80:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],81:[function(require,module,exports){
module.exports = {};
},{}],82:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],83:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":82,"./$.to-iobject":100}],84:[function(require,module,exports){
module.exports = true;
},{}],85:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":55,"./$.global":66,"./$.task":98}],86:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":56,"./$.export":62,"./$.fails":63}],87:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],88:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":89}],89:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":68}],90:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],91:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":82,"./$.an-object":53,"./$.ctx":57,"./$.is-object":75}],92:[function(require,module,exports){
'use strict';
var core        = require('./$.core')
  , $           = require('./$')
  , DESCRIPTORS = require('./$.descriptors')
  , SPECIES     = require('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":82,"./$.core":56,"./$.descriptors":59,"./$.wks":104}],93:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":82,"./$.has":67,"./$.wks":104}],94:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":66}],95:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":51,"./$.an-object":53,"./$.wks":104}],96:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],97:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":58,"./$.to-integer":99}],98:[function(require,module,exports){
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":55,"./$.ctx":57,"./$.dom-create":60,"./$.global":66,"./$.html":69,"./$.invoke":70}],99:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],100:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":58,"./$.iobject":71}],101:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":99}],102:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":58}],103:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],104:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":66,"./$.shared":94,"./$.uid":103}],105:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":54,"./$.core":56,"./$.iterators":81,"./$.wks":104}],106:[function(require,module,exports){
var anObject = require('./$.an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":53,"./$.core":56,"./core.get-iterator-method":105}],107:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./$.classof":54,"./$.core":56,"./$.iterators":81,"./$.wks":104}],108:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $export     = require('./$.export')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$export($export.S + $export.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./$.ctx":57,"./$.export":62,"./$.is-array-iter":72,"./$.iter-call":76,"./$.iter-detect":79,"./$.to-length":101,"./$.to-object":102,"./core.get-iterator-method":105}],109:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":52,"./$.iter-define":78,"./$.iter-step":80,"./$.iterators":81,"./$.to-iobject":100}],110:[function(require,module,exports){
'use strict';
var $export = require('./$.export');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./$.fails')(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , $$     = arguments
      , $$len  = $$.length
      , result = new (typeof this == 'function' ? this : Array)($$len);
    while($$len > index)result[index] = $$[index++];
    result.length = $$len;
    return result;
  }
});
},{"./$.export":62,"./$.fails":63}],111:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export   = require('./$.export')
  , _isFinite = require('./$.global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});
},{"./$.export":62,"./$.global":66}],112:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./$.export');

$export($export.S, 'Number', {isInteger: require('./$.is-integer')});
},{"./$.export":62,"./$.is-integer":74}],113:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./$.export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
},{"./$.export":62}],114:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export   = require('./$.export')
  , isInteger = require('./$.is-integer')
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
},{"./$.export":62,"./$.is-integer":74}],115:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./$.export');

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"./$.export":62}],116:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./$.export');

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
},{"./$.export":62}],117:[function(require,module,exports){
// 20.1.2.12 Number.parseFloat(string)
var $export = require('./$.export');

$export($export.S, 'Number', {parseFloat: parseFloat});
},{"./$.export":62}],118:[function(require,module,exports){
// 20.1.2.13 Number.parseInt(string, radix)
var $export = require('./$.export');

$export($export.S, 'Number', {parseInt: parseInt});
},{"./$.export":62}],119:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});
},{"./$.is-object":75,"./$.object-sap":86}],120:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":86,"./$.to-object":102}],121:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":62,"./$.set-proto":91}],122:[function(require,module,exports){

},{}],123:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $export    = require('./$.export')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same-value')
  , SPECIES    = require('./$.wks')('species')
  , speciesConstructor = require('./$.species-constructor')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
require('./$.set-to-string-tag')(P, PROMISE);
require('./$.set-species')(PROMISE);
Wrapper = require('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":82,"./$.a-function":51,"./$.an-object":53,"./$.classof":54,"./$.core":56,"./$.ctx":57,"./$.descriptors":59,"./$.export":62,"./$.for-of":64,"./$.global":66,"./$.is-object":75,"./$.iter-detect":79,"./$.library":84,"./$.microtask":85,"./$.redefine-all":88,"./$.same-value":90,"./$.set-proto":91,"./$.set-species":92,"./$.set-to-string-tag":93,"./$.species-constructor":95,"./$.strict-new":96,"./$.wks":104}],124:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":78,"./$.string-at":97}],125:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":82,"./$.an-object":53,"./$.descriptors":59,"./$.enum-keys":61,"./$.export":62,"./$.fails":63,"./$.get-names":65,"./$.global":66,"./$.has":67,"./$.is-array":73,"./$.keyof":83,"./$.library":84,"./$.property-desc":87,"./$.redefine":89,"./$.set-to-string-tag":93,"./$.shared":94,"./$.to-iobject":100,"./$.uid":103,"./$.wks":104}],126:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":81,"./es6.array.iterator":109}],127:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":128}],128:[function(require,module,exports){
(function (process,global){
"use strict";

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

  var inModule = (typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = (0, _create2.default)((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_setPrototypeOf2.default) {
      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = (0, _create2.default)(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
        resolve(callInvokeWithMethodAndArg());
      });
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          context._sent = arg;

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../core-js/object/create":14,"../core-js/object/set-prototype-of":19,"../core-js/promise":20,"../core-js/symbol":21,"../core-js/symbol/iterator":22,"../helpers/typeof":29,"_process":129}],129:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
