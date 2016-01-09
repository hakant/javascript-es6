describe("Arrays", function(){

   it ("should return the first matching element using find", function(){
     var arr = [1,5,10];
     var match = arr.find(x => x > 8);

     expect(match).toBe(10);
   });

   it("should return the first matching index using findIndex", function(){
      var match = [1,5,10].findIndex(i => i > 3);
      expect(match).toBe(1);
   });

   it("should fill in the entire array when fill is called", function(){
      var arr = [1,2,3,4,5];
      arr.fill('a');    // every element in this array is now 'a'
      expect(arr[3]).toBe('a');
   });

   it ("should fill in some of the array when fill is called with args", function(){
      var arr = [1,2,3,4,5];
      arr.fill('a', 2, 3);    // every element in this array is now 'a'
      expect(arr[2]).toBe('a');
      expect(arr[1]).toBe(2);
      expect(arr[3]).toBe(4);
   });

   it("should create a new array with 1 arg when given 1 arg when of is called", function(){
      var arr = new Array(3);
      var ofArr = Array.of(3);
      expect(arr.length).toBe(3);
      expect(ofArr.length).toBe(1);
   });

   it("should create a new array from an array-like object when from is called", function(){
      // arrayLike is not a true array
      var arrayLike = document.querySelectorAll('div');
      expect(arrayLike.forEach).toBe(undefined);

      var fromArray = Array.from(arrayLike);
      expect(fromArray.forEach).toBeDefined();
   });

   it("should return entries from the entries function", function(){
      var a = ['Joe', 'Jim', 'John'];
      var entries = a.entries();

      var firstEntry = entries.next().value;
      expect(firstEntry[0]).toBe(0);
      expect(firstEntry[1]).toBe("Joe");
   });

   it("should enumerate keys with the keys function", function(){
      var a = ['Joe', 'Jim', 'John'];
      var keys = a.keys();

      var firstKey = keys.next().value;
      expect(firstKey).toBe(0);
   });
});
