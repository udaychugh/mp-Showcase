function opensheet(valtype)
{
    document.getElementById("sheet").style.visibility = "visible";
    if(valtype == "fuel")
        {
            document.getElementById("value1").innerHTML = "Petrol";
            document.getElementById("value2").innerHTML = "Diesel";
            document.getElementById("value3").innerHTML = "Electric";
            document.getElementById("value4").innerHTML = "CNG";
        }
    else if(valtype == "condition")
        {
            document.getElementById("value1").innerHTML = "Excellent";
            document.getElementById("value2").innerHTML = "Good";
            document.getElementById("value3").innerHTML = "Average";
            document.getElementById("value4").innerHTML = "Bad";
        }
    else{
        alert("something went wrong");
    }
}

function closeSheet()
{
    document.getElementById("sheet").style.visibility = "hidden";
}

document.getElementById("overlay").onclick = function() {
    document.getElementById("sheet").style.visibility = "hidden";
}

document.getElementById("value1").onclick = function() {
    var btnvalue = document.getElementById("value1").innerHTML;
    if(btnvalue == "Petrol" || btnvalue == "Diesel" || btnvalue == "Electric" || btnvalue == "CNG")
        {
            document.getElementById("fuel").value = btnvalue;
        }
    if(btnvalue == "Excellent" || btnvalue == "Good" || btnvalue == "Average" || btnvalue == "Bad")
        {
            document.getElementById("condition").value = btnvalue;
        }
    
    closeSheet();
}

document.getElementById("value2").onclick = function() {
    var btnvalue = document.getElementById("value2").innerHTML;
    if(btnvalue == "Petrol" || btnvalue == "Diesel" || btnvalue == "Electric" || btnvalue == "CNG")
        {
            document.getElementById("fuel").value = btnvalue;
        }
    if(btnvalue == "Excellent" || btnvalue == "Good" || btnvalue == "Average" || btnvalue == "Bad")
        {
            document.getElementById("condition").value = btnvalue;
        }
    
    closeSheet();
}

document.getElementById("value3").onclick = function() {
    var btnvalue = document.getElementById("value3").innerHTML;
    if(btnvalue == "Petrol" || btnvalue == "Diesel" || btnvalue == "Electric" || btnvalue == "CNG")
        {
            document.getElementById("fuel").value = btnvalue;
        }
    if(btnvalue == "Excellent" || btnvalue == "Good" || btnvalue == "Average" || btnvalue == "Bad")
        {
            document.getElementById("condition").value = btnvalue;
        }
    
    closeSheet();
}

document.getElementById("value4").onclick = function() {
    var btnvalue = document.getElementById("value4").innerHTML;
    if(btnvalue == "Petrol" || btnvalue == "Diesel" || btnvalue == "Electric" || btnvalue == "CNG")
        {
            document.getElementById("fuel").value = btnvalue;
        }
    if(btnvalue == "Excellent" || btnvalue == "Good" || btnvalue == "Average" || btnvalue == "Bad")
        {
            document.getElementById("condition").value = btnvalue;
        }
    
    closeSheet();
}