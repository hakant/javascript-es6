describe("objects", function() {

  // You can use is function in place of ===
  // Although there are minor differences, here they are:
  describe("is function", function() {
    it("should consider positive and negative zero to be different", function() {
      expect(0 === -0).toBe(true);
      expect(Object.is(0, -0)).toBe(false);
    });

    it("should consider NaN to be NaN", function() {
      expect(NaN === NaN).toBe(false);
      expect(Object.is(NaN, NaN)).toBe(true);
    });
  });

  describe("assign function", function() {
    it("should apply mixins to objects", function() {
      var shark = {
        bite: function(target) {
          target.hurt = true;
        }
      };

      var person = {};

      var laser = {
        pewpew: function(target) {
          target.exploded = true;
        }
      };

      Object.assign(shark, laser);
      shark.pewpew(person);
      expect(person.exploded).toBe(true);
    });
  });

  describe("property initializer shorthand", function() {
    it("should create properties from local variables", function() {
      var model = "Ford";
      var year = 1969;
      var Classic = {
        model,
        year
      };

      expect(Classic.model).toBe("Ford");
      expect(Classic.year).toBe(1969);
    });
  });

  describe("method initializer shorthand", function() {
    it("should create methods using shorthand", function() {
      var server = {
        getPort() {
          return 8080;
        }
      };

      expect(server.getPort()).toBe(8080);

    });
  });

  describe("computed property names", function() {
    it("should support variables for property names", function() {
      function CreateSimpleObject(propName, propVal) {
        return {
          [propName]: propVal
        };
      }

      var simpleObject = CreateSimpleObject("color", "red");
      expect(simpleObject.color).toBe("red");

    });

    it("should support string concatenation", function() {
      function CreateTriumvirate(first, second, third) {
        return {
          ["member_" + first.name]: first,
          ["member_" + second.name]: second,
          ["member_" + third.name]: third
        };
      }

      var trium = CreateTriumvirate({
        name: "Hakan"
      }, {
        name: "John"
      }, {
        name: "Joe"
      });
      
      expect(trium.member_Hakan).toEqual({
        name: "Hakan"
      });

    });
  });

});
