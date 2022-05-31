function applePricePlan(){

    var box = 0;
    var AppleB = 0;
    var packetS = 0;
    var prof = 0;
    var packetNum = 0;
    var packetPrice = 0;
    var priceperApple = 0;
    var recommend = 0;

    function costPriceBox(boxPrice){
        if (boxPrice>0){
            box = boxPrice;
        }
    }
    function AppleNumberInBox(AppleBox){
        if(AppleBox > 0){
        AppleB = AppleBox;
        }
    }
    function packetSizeApple(packetSize){
        if (packetSize > 0){
        packetS = packetSize;
        }
    }
    function requiredprofit(profit){
        if(profit > 0){
        prof = profit;
        }
    }
    function NumberofPackets(){
        packetNum = AppleB/packetS;
        return packetNum;
    }
    function pricePerApple(){
        priceperApple = box/AppleB;
      return priceperApple.toFixed(2);
    }
    function pricePerPacket(){
        packetPrice = box/packetNum;
        return packetPrice.toFixed(2);
    }
    function recommendPacketPrice(){
        recommend = ((prof/100)*box + box)/packetNum
        return recommend.toFixed(2);

    }
    return {
        costPriceBox,
        AppleNumberInBox,
        packetSizeApple,
        requiredprofit,
        NumberofPackets,
        pricePerApple,
        pricePerPacket,
        recommendPacketPrice
    }


}