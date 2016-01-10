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
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("async generators", function () {

  it('should be difficult to read with regular async code', function () {
    console.log('start');
    oldPause(500, function () {
      console.log('middle');
      oldPause(500, function () {
        console.log('end');
      });
    });
  });

  it("should be easier to read with generators", function (done) {
    var main = _regenerator2.default.mark(function main() {
      return _regenerator2.default.wrap(function main$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("start");
              _context.next = 3;
              return pause(500);

            case 3:
              console.log("middle");
              _context.next = 6;
              return pause(500);

            case 6:
              console.log("end");

              done();

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, main, this);
    });

    async.run(main);
  });

  it("should work with returned data", function (done) {
    var main = _regenerator2.default.mark(function main() {
      var price;
      return _regenerator2.default.wrap(function main$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getStockPrice();

            case 2:
              price = _context2.sent;

              if (!(price > 45)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 6;
              return executeTrade();

            case 6:
              _context2.next = 9;
              break;

            case 8:
              console.log("trade not made");

            case 9:
              done();

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, main, this);
    });

    async.run(main);
  });

  it("should work with errors", function (done) {
    var main = _regenerator2.default.mark(function main() {
      var price;
      return _regenerator2.default.wrap(function main$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return getStockPrice();

            case 3:
              price = _context3.sent;

              if (!(price > 45)) {
                _context3.next = 9;
                break;
              }

              _context3.next = 7;
              return executeTrade();

            case 7:
              _context3.next = 10;
              break;

            case 9:
              console.log("trade not made");

            case 10:
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](0);

              console.log("error! " + _context3.t0.message);

            case 15:
              done();

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, main, this, [[0, 12]]);
    });

    async.run(main);
  });

  it("should also work with promises", function (done) {
    var main = _regenerator2.default.mark(function main() {
      var price;
      return _regenerator2.default.wrap(function main$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return getStockPriceP();

            case 3:
              price = _context4.sent;

              if (!(price > 45)) {
                _context4.next = 9;
                break;
              }

              _context4.next = 7;
              return executeTradeP();

            case 7:
              _context4.next = 10;
              break;

            case 9:
              console.log("trade not made");

            case 10:
              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4['catch'](0);

              console.log("error! " + _context4.t0.message);

            case 15:
              done();

            case 16:
            case 'end':
              return _context4.stop();
          }
        }
      }, main, this, [[0, 12]]);
    });

    asyncP.run(main);
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

  // TODO: Check why this doesn't pass in Chrome
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

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Maps", function () {

  it("should contain zero items when constructed", function () {
    var map = new _map2.default();
    expect(map.size).toBe(0);
  });

  it("should contain 1 item when one item is added", function () {
    var map = new _map2.default();
    map.set("age", 35);
    expect(map.size).toBe(1);
  });

  it("should return the value when get is called with the correct key", function () {
    var map = new _map2.default();
    map.set("age", 35);
    expect(map.get("age")).toBe(35);
  });

  it('should allow an object to be the key', function () {
    var ageMap = new _map2.default();
    var ralph = { 'name': 'Ralph' };
    ageMap.set(ralph, 29);

    expect(ageMap.get(ralph)).toBe(29);
  });

  it("should contain items when given an array in the constructor", function () {
    var map = new _map2.default([['name', 'John'], ['age', 15], ['weight', '155']]);
    expect(map.size).toBe(3);
  });

  it("should find the correct item when has is called", function () {
    var map = new _map2.default([['name', 'John'], ['age', 15], ['weight', '155']]);
    expect(map.has('age')).toBe(true);
  });

  it("should not allow duplicate keys", function () {
    var map = new _map2.default();
    var key = {};
    map.set(key, 'first');
    map.set(key, 'second');
    expect(map.get(key)).toBe('second');
  });

  it("should have no items after clear is called", function () {
    var map = new _map2.default();
    map.set(1, 'a');
    map.set(2, 'b');
    map.set(3, 'c');
    map.clear();
    expect(map.size).toBe(0);
  });

  it("should remove an item when delete is called", function () {
    var map = new _map2.default();
    var key1 = {};
    var key2 = {};
    map.set(key1, 100);
    map.set(key2, 200);
    map.delete(key2);
    expect(map.has(key2)).toBe(false);
  });

  it("should call the callback function for each item when forEach is called", function () {
    var map = new _map2.default([['name', 'John'], ['age', 15], ['weight', '155']]);
    var iterationCount = 0;
    map.forEach(function (value, key) {
      iterationCount++;
      // use value & key
    });
    expect(iterationCount).toBe(3);
  });

  it("should support for of iteration", function () {
    var map = new _map2.default([['name', 'John'], ['age', 15], ['weight', '155']]);
    var iterationCount = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(map), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = (0, _slicedToArray3.default)(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        // item is an array like ['name', 'John']
        iterationCount++;
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

    expect(iterationCount).toBe(3);
  });

  it("should return an iterator of arrays of key value pairs when entries is called", function () {
    var map = new _map2.default();
    map.set('name', 'Joe');
    var items = map.entries();
    var first = items.next().value;
    expect(first[0]).toBe('name');
    expect(first[1]).toBe('Joe');
  });

  it("should return an iterator of values when values is called", function () {
    var map = new _map2.default();
    map.set(1, 'a');
    var values = map.values();
    var first = values.next().value;
    expect(first).toBe('a');
  });

  it("should return an iterator of keys when keys is called", function () {
    var map = new _map2.default();
    map.set(1, 'a');
    var keys = map.keys();
    var firstKey = keys.next().value;
    expect(firstKey).toBe(1);
  });

  it("should be able to be constructed with an iterator", function () {
    var map = new _map2.default();
    map.set('1');
    map.set('2');
    map.set('3');
    var map2 = new _map2.default(map.entries());
    expect(map2.size).toBe(3);
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

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sets represent a unique set of objects

describe("Sets", function () {

  it("should contain zero items when constructed", function () {
    var set = new _set2.default();
    expect(set.size).toBe(0);
  });

  it("should contain 1 item when one item is added", function () {
    var set = new _set2.default();
    set.add("somevalue");
    expect(set.size).toBe(1);
  });

  it("should allow objects as a key", function () {
    var set = new _set2.default();
    var key = {};
    set.add(key);
    expect(set.has(key)).toBe(true);
  });

  it("should contain items when given an array in the constr.", function () {
    var set = new _set2.default([1, 2, 3]);
    expect(set.has(1)).toBe(true);
  });

  it("should not allow duplicate values", function () {
    var set = new _set2.default();
    var key = {};
    set.add(key);
    set.add(key);
    expect(set.size).toBe(1);
  });

  it("should have no items after clear is called", function () {
    var set = new _set2.default();
    set.add(1);
    set.add(2);
    set.add(3);
    set.clear();
    expect(set.size).toBe(0);
  });

  it("should remove an item when delete is called", function () {
    var set = new _set2.default();
    set.add(1);
    set.add(2);
    set.delete(1);
    expect(set.size).toBe(1);
  });

  it("should call a callback function once for each item when foreach is invoked", function () {
    var set = new _set2.default();
    set.add("Tom");
    set.add("Dick");
    set.add("Harry");

    var iterationCount = 0;
    set.forEach(function (item) {
      return iterationCount++;
    });
    expect(iterationCount).toBe(3);
  });

  it("should support for of iteration", function () {
    var set = new _set2.default();
    set.add("Tom");
    set.add("Dick");
    set.add("Harry");

    var iterationCount = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(set), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        iterationCount++;
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

    expect(iterationCount).toBe(3);
  });

  it("should return an iterator of arrays when entries is called", function () {
    var set = new _set2.default();
    set.add(1);

    var entries = set.entries();
    var firstEntry = entries.next().value;

    expect(firstEntry[0]).toBe(1);
    expect(firstEntry[1]).toBe(1);
  });

  it("should return an iterator of values when values is called", function () {
    var set = new _set2.default();
    set.add(1);

    var entries = set.values();
    var firstEntry = entries.next().value;

    expect(firstEntry).toBe(1);
  });

  it("should be able to be constructed with an iterator", function () {
    var set = new _set2.default();
    set.add(1);
    set.add(2);
    set.add(3);

    var set2 = new _set2.default(set.values());
    expect(set2.size).toBe(3);
    expect(set).toEqual(set2); // they're equal
    expect(set).not.toBe(set2); // but they're not the same
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
'use strict';

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _weakSet = require('babel-runtime/core-js/weak-set');

var _weakSet2 = _interopRequireDefault(_weakSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('WeakSets', function () {
  it('should not have properties & methods that relate to the entire set', function () {
    var set = new _weakSet2.default();
    expect(set.size).toBe(undefined);
    expect(set.entries).toBe(undefined);
    expect(set.values).toBe(undefined);
    expect(set.forEach).toBe(undefined);
  });

  it('should be able to find items with has', function () {
    var set = new _weakSet2.default();
    var item = { name: 'Joe' };
    set.add(item);
    expect(set.has(item)).toBe(true);
  });

  it('should be able to remove items with delete', function () {
    var set = new _weakSet2.default();
    var item = { name: 'Joe' };
    set.add(item);
    set.delete(item);
    expect(set.has(item)).toBe(false);
  });

  // TODO: Do weaksets have clear method?
  // it('should remove all items when clear is called', function() {
  //   var set = new WeakSet();
  //   var item = {name:'Joe'};
  //   set.add(item);
  //   set.clear();
  //   expect(set.has(item)).toBe(false);
  // });
});

describe('WeakMaps', function () {
  it('should not have properties & methods that relate to the entire set', function () {
    var map = new _weakMap2.default();

    expect(map.size).toBe(undefined);
    expect(map.entries).toBe(undefined);
    expect(map.keys).toBe(undefined);
    expect(map.values).toBe(undefined);
    expect(map.forEach).toBe(undefined);
  });

  it('should be able to determine existince of items with has', function () {
    var map = new _weakMap2.default();
    var key = {};
    map.set(key, 'a');
    expect(map.has(key)).toBe(true);
  });

  it('should be able to get the correct value', function () {
    var map = new _weakMap2.default();
    var key = {};
    map.set(key, 'a');
    expect(map.get(key)).toBe('a');
  });

  it('should be able to remove items with delete', function () {
    var map = new _weakMap2.default();
    var key = {};
    map.set(key, 'a');
    map.delete(key);
    expect(map.has(key)).toBe(false);
  });

  // Do weakmaps have clear method?
  // it('should remove all items when clear is called', function() {
  //   var map = new WeakMap();
  //   var key = {};
  //   map.set(key, 'a');
  //   var key2 = {};
  //   map.set(key2, 'b');
  //   map.clear();
  //   expect(map.has(key)).toBe(false);
  //   expect(map.has(key2)).toBe(false);
  // });
});
//# sourceMappingURL=all.js.map
