function budgestCalculator(laptop, tablet, mobile){
    const laptoPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalBudget = laptop*laptoPrice + tablet*tabletPrice + mobile*mobilePrice;
    return totalBudget;
}

console.log(budgestCalculator(1,1,1));