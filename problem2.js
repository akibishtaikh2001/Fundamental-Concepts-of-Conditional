//BMI Calculator and Health Category

let weight = 68;
let height = 1.747;

let BMI = weight / (height * height);
console.log(BMI);

if(BMI < 18.5){
    console.log('you are underweight');
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log('You are normal');
}
else if(BMI >= 25 && BMI <=29.9){
    console.log('you are overweight');
}
else{
    console.log('You are obese');
}