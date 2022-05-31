"use strict";

function applePricePlan() {
  var box = 0;
  var AppleB = 0;
  var packetS = 0;
  var prof = 0;
  var packetNum = 0;
  var packetPrice = 0;
  var priceperApple = 0;
  var recommend = 0;

  function costPriceBox(boxPrice) {
    box = boxPrice;
  }

  function AppleNumberInBox(AppleBox) {
    AppleB = AppleBox;
  }

  function packetSizeApple(packetSize) {
    packetS = packetSize;
  }

  function requiredprofit(profit) {
    prof = profit;
  }

  function NumberofPackets() {
    packetNum = AppleB / packetS;
    return packetNum;
  }

  function pricePerApple() {
    priceperApple = box / AppleB;
    return priceperApple;
  }

  function pricePerPacket() {
    packetPrice = box / packetNum;
    return packetPrice;
  }

  function recommendPacketPrice() {
    recommend = (prof / 100 * box + box) / packetNum;
    return recommend;
  }

  return {
    costPriceBox: costPriceBox,
    AppleNumberInBox: AppleNumberInBox,
    packetSizeApple: packetSizeApple,
    requiredprofit: requiredprofit,
    NumberofPackets: NumberofPackets,
    pricePerApple: pricePerApple,
    pricePerPacket: pricePerPacket,
    recommendPacketPrice: recommendPacketPrice
  };
}