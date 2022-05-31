const enterCostforBoxPrice = document.querySelector('.costForBoxApple')
const enterappleNumInBox = document.querySelector('.appleNumberInBox')
const enterPacketSize = document.querySelector('.PacketSize')
const enterProfitNeeded = document.querySelector('.profietNeeded')


const displayPacketNumber = document.querySelector('.Numberofpackets')
const displayCostperApple = document.querySelector('.costperApple')
const displayCostperPacket = document.querySelector('.CostperPacket')
const displayRecommendedprice = document.querySelector('.Recprice')

const calculateButton = document.querySelector('.Calculate')

const apples = applePricePlan();

calculateButton.addEventListener('click', function(){
    apples.costPriceBox (Number(enterCostforBoxPrice.value))
    apples.AppleNumberInBox(Number(enterappleNumInBox.value))
    apples.packetSizeApple(Number(enterPacketSize.value))
    apples.requiredprofit(Number(enterProfitNeeded.value))

    displayPacketNumber.innerHTML = apples.NumberofPackets();
    displayCostperApple.innerHTML = apples.pricePerApple();
    displayCostperPacket.innerHTML = apples.pricePerPacket();
    displayRecommendedprice.innerHTML = apples.recommendPacketPrice();

})

