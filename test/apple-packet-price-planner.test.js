describe('applePricePlan function', function(){
  it('should get the number of packets when there are 20 apples in a box', function(){
    var appleSet = applePricePlan();

    appleSet.AppleNumberInBox(20);
    appleSet.packetSizeApple(5)

    assert.equal(4, appleSet.NumberofPackets())
  })
  it('should give me cost price per apple', function(){
    var appleSet = applePricePlan();

    appleSet.AppleNumberInBox(20);
    appleSet.costPriceBox(50)

    assert.equal(2.5, appleSet.pricePerApple())
  })
  it('should give me cost the price per apple packet', function(){
    var appleSet = applePricePlan();

    appleSet.costPriceBox(50);
    appleSet.AppleNumberInBox(30);
    appleSet.packetSizeApple(6);
    appleSet.requiredprofit(20);


    assert.equal(20.00, appleSet.pricePerPacket())
  })

  it('should give me the recommended price of an apple packet', function(){
    var appleSet = applePricePlan();


    appleSet.costPriceBox(100);
    appleSet.packetSizeApple(4);
    appleSet.requiredprofit(20);
    appleSet.AppleNumberInBox(30);

    assert.equal(30.00, appleSet.recommendPacketPrice())
  })

})




