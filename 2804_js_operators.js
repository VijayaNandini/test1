//April 28, 2023 - JavaScript Operators

//just for reference
function addTwoNumbers(){
    var a = 10;
    var b = 100;
    console.log(a + b);
    //return a + b ;
}



// expecting two numbers
function addition(){

    //var msg = welcome_message();
    //console.log(msg);
    console.log(welcome_message());

    var input1 = document.getElementById('input1').value; //this is in string format
    console.log("Input1 : " + input1);
    console.log("Type of Input1 : " + typeof(input1) );
    
    var input1Int = Number.parseInt(input1) ;
    console.log("input1Int: " + input1Int + " Type of input1Int: " + typeof(input1Int));

    //var input2 = 100;
    var input2 = document.getElementById('input2').value; //this is in string format
    console.log("Input2 : " + input2);
    console.log("Type of Input2 : " + typeof(input2) );

    var input2Int = Number.parseInt(input2) ;
    console.log("input2Int: " + input2Int + " Type of input2Int: " + typeof(input2Int));

    //var addResult = input1 + input2 ;
    var addResult = input1Int + input2Int ;

    console.log("This is addition result: " + addResult);
    //console.log("This is addition result: " + input1 + input2);

    //document.getElementById('result').innerHTML = addResult ;
    document.getElementById('result').value = addResult ;

    //return input1 + input2 ;
}


function welcome_message(){
    return "Hi Pooja and Sarumathi. Welcome to today's class.";
}


function subtraction(){
    var input1 = document.getElementById('input1').value; //this is in string format
    var input2 = document.getElementById('input2').value; //this is in string format

    //var subtractionResult = Number.parseInt(input1) - Number.parseInt(input2);
    var subtractionResult = Number.parseFloat(input1) - Number.parseFloat(input2);
    //document.getElementById('result').innerHTML = subtractionResult ;
    document.getElementById('result').value = subtractionResult ;
}