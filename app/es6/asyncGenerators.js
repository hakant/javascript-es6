describe("async generators", function(){

  it('should be difficult to read with regular async code', function() {
    console.log('start');
    oldPause(500, function() {
      console.log('middle');
      oldPause(500, function() {
        console.log('end');
      });
    });
  });

  it("should be easier to read with generators", function(done){
    let main = function*(){
      console.log("start");
      yield pause(500);
      console.log("middle");
      yield pause(500);
      console.log("end");

      done();
    };

    async.run(main);
  });

  it("should work with returned data", function(done){
    let main = function*(){
      var price = yield getStockPrice();
      if (price > 45){
        yield executeTrade();
      } else{
        console.log("trade not made");
      }
      done();
    };

    async.run(main);

  });

  it("should work with errors", function(done){
    let main = function*(){
      try{
        var price = yield getStockPrice();
        if (price > 45){
          yield executeTrade();
        } else{
          console.log("trade not made");
        }
      } catch(ex){
        console.log("error! " + ex.message);
      }
      done();
    };

    async.run(main);
  });

  it("should also work with promises", function(done){
    let main = function*(){
      try{
        var price = yield getStockPriceP();
        if (price > 45){
          yield executeTradeP();
        } else{
          console.log("trade not made");
        }
      } catch(ex){
        console.log("error! " + ex.message);
      }
      done();
    };

    asyncP.run(main);
  });

});
