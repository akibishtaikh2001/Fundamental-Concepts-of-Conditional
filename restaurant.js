const age = 52;
const price = 500;
if (age <= 12) {
    console.log('you can eat for a free');
}
else if (age >= 60) {
    //50% discount
    const dicount = price * 50 / 100;
    const payAmount = price - dicount;
    console.log(payAmount);
}
else if (age >= 50) {
    //25% discount
    const dicount = price * 25 / 100;
    const payAmount = price - dicount;
    console.log(payAmount);
}
else if (age >= 40) {
    //10% discount
    const dicount = price * 10 / 100;
    const payAmount = price - dicount;
    console.log(payAmount);
}
else {
    console.log(price);
}