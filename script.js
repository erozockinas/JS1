// pirma uzduotis
console.log("Pirma uzduotis")

var firstVar = "pirmas kintamasis";
var secondVar = 1;
var thirdVar = true;

console.log(firstVar, "tipas: ", typeof firstVar);
console.log(secondVar, "tipas: ", typeof secondVar);
console.log(thirdVar, "tipas: ", typeof thirdVar);


// antra uzduotis
console.log("----------------")
console.log("Antra uzduotis")

var age = 30;
var citizenshipStatus = true;
var daysInCountry = 300;

console.log("amzius", age, "pilietybe", citizenshipStatus, "dienos valstybeje", daysInCountry)

if(age>=18 && citizenshipStatus && daysInCountry >= 30){
    console.log("Jeej,tu gali balsuoti");
}

// trecia uzduotis
console.log("----------------")
console.log("Trecia uzduotis")

var age = 39;
var bmi = 29;
var smokes = false;

console.log("metai: ",age, "bmi", bmi, "ruko", smokes);

if(age<30&&bmi<25&&smokes==false) {
    console.log("Sveikinimai, tavo rizika maza");  
}

else if (age>=30&&age<=50&&bmi>25&&bmi<30&&smokes==false) {
    console.log("tavo rizika vidutine");
}

else if (age>50&&bmi>=30&&smokes==true) {
    console.log("tavo rizika LABAI didele");
}

else if (age>50||bmi>=30||smokes==true) {
    console.log("tavo rizika didele");
}

else {
    console.log("neapibrėžta rizika");
}