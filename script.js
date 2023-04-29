let firstValue = document.getElementById("first-value");
let secondValue = document.getElementById("second-value");

let firstSelect = document.getElementById("select-first");
let secondSelect = document.getElementById("select-second");

document.getElementById("selected-unit").addEventListener("change", (e) => { 
    let unit = e.target.value;


    switch (unit) {
        case "mass":
            mass();
            break;

        case "time":
            time();
            break;

        case "temperature":
            temperature();
            break;

        case "speed":
            speed();
            break;

        case "area":
            area();
            break;

        case "volume":
            volume();
            break;

        case "energy":
            energy();
            break;

        default:
            length();
            break;
    }
});

function setUnits(arr) {
    firstSelect.innerHTML = "";
    secondSelect.innerHTML = "";
    arr.forEach((element) => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.value = element;
        option1.innerText = element;
        option2.value = element;
        option2.innerText = element;
        secondSelect.append(option1);
        firstSelect.append(option2);
    });
}

function calculateData(unit1, unit2, value1, value2,workingUnit, inputBox) {

    let currentValue = value1;
    
    // -------------------length unit calculation--------
    
    if(workingUnit=='length')
    {       
        
        let units = {
            meter: 1,
            kelometer: 0.001,
            centimeter: 100,
            millimeter: 1000,
            mile: 0.000621371,
            yard: 1.09361,
            foot: 3.28084,
            inch: 39.3701,
        }
        
        
        if (unit1 == 'meter') {
            value1 = value1;
        }
        else if (unit1 == 'kelometer') {
            value1 = value1 * 1000;
        }
        else if (unit1 == 'centimeter') {
            value1 = value1 / 100;
        }
        else if (unit1 == "millimeter") {
            value1 = value1 / 1000;
        }
        else if (unit1 == "mile") {
            value1 = value1 * 1609;
        }
        else if (unit1 == "yard") {
            value1 = value1 / 1.094;
        }
        else if (unit1 == "foot") {
            value1 = value1 / 3.281;
        }
        else if (unit1 == "inch") {
            value1 = value1 / 39.37;
        }

        value2 = value1 * units[unit2];
        
    }
//   -----------------------time unit calculation----------  


else if(workingUnit=='time')
{
    let units ={
            second:1,
            nenosecond:1000000000,
            microsecond:1000000,
            millisecond:1000,
            minute:0.0166667,
            hour:0.000277778,
            day:115700,
            week:1653400,
            month:38052000,
            year:317100000,
            decade:3171000000,
            century:31710000000,
            
        }
        
        if(unit1=='second')
        {
            value1=value1;
        }
        else if(unit1=='nenosecond')
        {
            value1=value1/1000000000;
        }
        else if(unit1=='microsecond'){
            value1 = value1/1000000;
        }
        else if(unit1=='millisecond'){
            value1 = value1/1000;
        }
        else if(unit1=='minute'){
            value1 = value1*60;
        }
        else if(unit1=='hour'){
            value1 = value1*3600;
        }
        else if(unit1=='day'){
            value1 = value1*86400;
        }
        else if(unit1=='week'){
            value1 = value1*604800;
        }
        else if(unit1=='year'){
            value1 = value1*31540000;
        }
        else if(unit1=='month'){
            value1 = value1*2628000;
        }
        else if(unit1=='decade'){
            value1 = value1*315400000;
        }
        else if(unit1=='century'){
            value1 = value1*3154000000;
        }
        
        value2 = value1 * units[unit2];
        
    }


    // ---------------temperature calculation-----------


    else if(workingUnit=='temperature')
    {
        let units = {
            celsius:1,
            fahrenheit:33.8,
            kelvin:274.15,
        }
        
        if(unit1=='celsius')
        {
            value1 = value1;
        }
        else if(unit1=='fahrenheit')
        {
            value1 = value1*(-17.2222);
        }
        else if(unit1=='kelvin')
        {
            value1 = value1*(-272.15);
        }
        value2 = value1 * units[unit2];
    }

    // --------------mass calculation----------
    
    else if(workingUnit=='mass')
    {
        let units ={
            gram:1,
            tonne:0.000001,
            kilogram:0.001,
            milligram:1000,
            microgram:1000000,
            stone:0.000157473,
            pound:0.00220462
            
        }
        
        if(unit1=='gram')
        {
            value1=value1;
        }
        else if(unit1=='tonne')
        {
            value1=value1*1000000;
        }
        else if(unit1=='kilogram')
        {
            value1=value1*1000;
        }
        else if(unit1=='milligram')
        {
            value1=value1/1000;
        }
        else if(unit1=='microgram')
        {
            value1=value1/1000000;
        }
        else if(unit1=='stone')
        {
            value1=value1*6350;
        }
        else if(unit1=='pound')
        {
            value1 = value1*453.6;
        }
        value2 = value1 * units[unit2];
    }
    

    // --------------------- speed calculation------------

    if(workingUnit=='speed')
    {

        let units = {
            "kelometer per second":1,
            "mile per hour":0.621371,
            "foot per second":0.911344,
            "meter per second":0.277778,
            "knot":0.539957,
            
        }
        
        if(unit1=="kelometer per second")
        {
            value1=value1;
        }
        else if(unit1=="mile per hour")
        {
            value1= value1*1.609;
        }
        else if(unit1=="foot per second")
        {
            value1= value1*1.097;
        }
        else if(unit1=="meter per second")
        {
            value1= value1*3.6;
        }
        else if(unit1=="knot")
        {
            value1= value1*1.852;
        }
        value2 = value1 * units[unit2];
    }
    

    // -------------------area calculation -------------

    if(workingUnit=='area')
    {
        let units={
            "square meter": 1,
            "square kilometer":0.000001,
            "square mile":0.0003861,
            "square yard":1.19599,
            "square foot":10.7639,
            "square inch":1550,
            "acre":0.000247105,
            "hectare":0.0001,
        }

        if(unit1=='square meter')
        {
            value1=value1;
        }
       else if(unit1=="square kilometer")
       {
            value1=value1*1000000;
        }
       else if(unit1=="square mile")
        {
            value1=value1*2590000;
        }
        
        else if(unit1=="square yard")
        {
            value1=value1/1.196;
        }
       else if(unit1=="square foot")
        {
            value1=value1/10.764;
        }
        else if(unit1=="square inch")
        {
            value1=value1/1550;
        }
        else if(unit1=="acre")
        {
            value1=value1*4047;
        }
       else if(unit1=="hectare")
        {
            value1=value1*10000;
        }
        

        value2 = value1 * units[unit2];
    }
    
    
    // -------------------  volume calculation-----------


    else if(workingUnit=='volume')
    {
        let units ={
            "liter":1,
            "millileter":1000,
            "cubic meter":0.001
        }
        
        if(unit1=='liter')
        {
            value1=value1;
        }
        else if(unit1=='millileter'){
            
            value1=value1/1000;
        }
        else if(unit1=='millileter'){
            
            value1=value1*1000;
        }
        value2 = value1 * units[unit2];
    }
    

    // ------------------------ energy calculation----------
    
    else if(workingUnit=='energy')
    {
        let units  = {
            "joule":1,
            "kilojoule":0.001,
            "gram calorie":0.239006,
            "kilocalorie":0.000239006,
            "watt hour":0.000277778,
            "kilowatt":0.0027778,
        }
        
        if(unit1=='joule')
        {
            value1=value1;
        }
        else if(unit1=='kilojoule'){
            value1=value1*1000;
        }
        else if(unit1=="gram calorie")
        {
            value1=value1*4.184;

        }
        else if(unit1=="kilocalorie")
        {
            value1=value1*4184;
            
        }
        else if(unit1=="watt hour")
        {
            value1=value1*3600000;
            
        }
        value2 = value1 * units[unit2];
    }

    // --------------------final output show-----------
    
    if (inputBox == "firstinput") {
        firstValue.value = currentValue;
        secondValue.value = value2;
    } else if (inputBox == "secondinput") {
        firstValue.value = value2;
        secondValue.value = currentValue;
    }
    
}



function takeInput(unit1,unit2,currentUnit) {

    let value1 = 1;
    let value2 = 1;
    firstValue.value=value1;
    secondValue.value=value2;

    firstSelect.addEventListener("change", (e) => {
        unit1 = e.target.value;
        calculateData(unit1, unit2, value1, value2, currentUnit,"firstinput");
    });
    secondSelect.addEventListener("change", (e) => {
        unit2 = e.target.value;
        calculateData(unit1, unit2, value1, value2,currentUnit, "firstinput");
    });
    firstValue.addEventListener("change", (e) => {
        value1 = e.target.value;
        calculateData(unit1, unit2, value1, value2,currentUnit, "firstinput");
    });
    secondValue.addEventListener("change", (e) => {
        value2 = e.target.value;
        calculateData(unit2, unit1, value2, value1,currentUnit, "secondinput");
    });


}


function length() {
    let lenghtUnits = [
        "select unit",
        "meter",
        "kelometer",
        "centimeter",
        "millimeter",
        "mile",
        "yard",
        "foot",
        "inch",
    ];
    setUnits(lenghtUnits);
    takeInput('meter','meter','length');
}


function mass() {
    const massUnits = [
        "gram","tonne", "kilogram","milligram","microgram","pound","stone",
    ];
    setUnits(massUnits);
    takeInput('gram','gram','mass');
}

function temperature() {
    const temperatureUnits = ["celsius", "kelvin", "fahrenheit"];
    setUnits(temperatureUnits);
    takeInput('celsius','celsius','temperature');
}

function time() {
    const timeUnits = [
        "second",
        "nenosecond",
        "microsecond",
        "millisecond",
        "minute",
        "hour",
        "week",
        "year",
        "month",
        "decade",
        "century",
    ];
    setUnits(timeUnits);
    takeInput('second','second','time');
}

function speed() {
    const speedUnits = [
        "kelometer per second",
        "mile per hour",
        "foot per second",
        "meter per second",
        "knot",
    ];
    setUnits(speedUnits);
    takeInput("kelometer per second","kelometer per second","speed");
}

function area() {
    const areaUnit = [
        "square meter",
        "square kilometer",
        "square mile",
        "square yard",
        "square foot",
        "square inch",
        "acre",
        "hectare",
    ];
    setUnits(areaUnit);
    takeInput("square meter","square meter",'area');
}

function volume() {
    const volumeUnits = ["liter", "millileter", "cubic meter"];
    setUnits(volumeUnits);
    takeInput('liter','liter','volume');
}

function energy() {
    const energyUnits = [
        "joule",
        "kilojoule",
        "gram calorie",
        "kilocalorie",
        "watt hour",
        "kilowatt",
    ];
    setUnits(energyUnits);
    takeInput('joule','joule','energy');
}
