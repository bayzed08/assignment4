//Total calculation with vat
function totalCalculation(calSubTotal, firstEconInput, firstEconInputNum)
{
    firstEconInput.value = firstEconInputNum;
    var calVat = calSubTotal * 0.1;
    var calTotal = calSubTotal + calVat;
    document.getElementById('calSubTotal').innerText = calSubTotal;
    document.getElementById('calVat').innerText = calVat;
    document.getElementById('calTotal').innerText = calTotal;
}

// calculation upto subtotal
function passengerandCostCalculation(id, isIncrease, isfirstClass) {
    var firstEconInput = document.getElementById(id);
    var firstEconInputNum = parseInt(firstEconInput.value);
    //get subtotal default value
    var CalDefault = document.getElementById('calSubTotal').innerText;
    var CalDefaultNum = parseFloat(CalDefault);
    if (isIncrease == true) {
        firstEconInputNum = firstEconInputNum + 1;
        if (isfirstClass == true) {
            var calSubTotal = CalDefaultNum + 150;
            totalCalculation(calSubTotal, firstEconInput, firstEconInputNum);
        } else {
            var calSubTotal = CalDefaultNum + 100;
            totalCalculation(calSubTotal, firstEconInput, firstEconInputNum);
        }
    } else {
        firstEconInputNum = firstEconInputNum - 1;
        if (firstEconInputNum < 0) {
            alert("Negative Value Not allowed");
        }
        else {
            if (isfirstClass == true) {
                var calSubTotal = CalDefaultNum - 150;
                totalCalculation(calSubTotal, firstEconInput, firstEconInputNum);
            } else {
                var calSubTotal = CalDefaultNum - 100;
                totalCalculation(calSubTotal, firstEconInput, firstEconInputNum);
            }
        }

    }

}
// function set all default value
function setDefaultValue() {
    document.getElementById('first-Input').value = 0;
    document.getElementById('economy-input').value = 0;
    document.getElementById('calSubTotal').innerText = "0";
    document.getElementById('calVat').innerText = "0";
    document.getElementById('calTotal').innerText = "0";
}
//Book Confirmation message and refresh page
document.getElementById('bookBtn').addEventListener('click', function() {
    var firstClassPass = document.getElementById('first-Input').value;
    var economyClassPass = document.getElementById('economy-input').value;
    var totalCalculation = document.getElementById('calTotal').innerText
        //console.log(firstClassPass,economyClassPass,totalCalculation);
    var isconfirm = confirm("Press Ok button For Confirmation");
    //console.log(isconfirm);
    if (isconfirm == true) {
        alert('Congratulations,You have booked for ' + firstClassPass +
            ' firstclass seat and ' + economyClassPass +
            ' econmy class seat and total price with vat is ' + totalCalculation
        );
        setDefaultValue(); // set all default value
    } else {
        alert("Thank you for visiting us betterluck for next time");
    }
});



// //firstclass plus
// document.getElementById('first-plusBtn').addEventListener('click',function(){
//  var firstInput=document.getElementById('first-Input');
//  firstInputNum=parseInt(firstInput.value);
//  var newfirstInputNum=firstInputNum+1;
//  firstInput.value=newfirstInputNum;
//  var CalDefault=document.getElementById('calSubTotal').innerText;
//  var CalDefaultNum=parseFloat(CalDefault);
//  var calSubTotal=CalDefaultNum+150;
//  var calVat=calSubTotal* 0.1;
//  var calTotal=calSubTotal+calVat;
//  document.getElementById('calSubTotal').innerText=calSubTotal;
//  document.getElementById('calVat').innerText=calVat;
//  document.getElementById('calTotal').innerText=calTotal;
// });
//Firstclas minus
// document.getElementById('first-MinusBtn').addEventListener('click',function(){
//     var firstInput=document.getElementById('first-Input');
//     firstInputNum=parseInt(firstInput.value);
//     var newfirstInputNum=firstInputNum-1;
//     firstInput.value=newfirstInputNum;
//     var CalDefault=document.getElementById('calSubTotal').innerText;
//     var CalDefaultNum=parseFloat(CalDefault);
//     var calSubTotal=CalDefaultNum-150;
//     var calVat=calSubTotal* 0.1;
//     var calTotal=calSubTotal+calVat;
//     document.getElementById('calSubTotal').innerText=calSubTotal;
//     document.getElementById('calVat').innerText=calVat;
//     document.getElementById('calTotal').innerText=calTotal;
//    });
///Econmy Plus
// document.getElementById('economy-PlusBtn').addEventListener('click', function() {
//     var firstInput = document.getElementById('economy-input');
//     firstInputNum = parseInt(firstInput.value);
//     var newfirstInputNum = firstInputNum + 1;
//     firstInput.value = newfirstInputNum;
//     var CalDefault = document.getElementById('calSubTotal').innerText;
//     var CalDefaultNum = parseFloat(CalDefault);
//     var calSubTotal = CalDefaultNum + 100;
//     var calVat = calSubTotal * 0.1;
//     var calTotal = calSubTotal + calVat;
//     document.getElementById('calSubTotal').innerText = calSubTotal;
//     document.getElementById('calVat').innerText = calVat;
//     document.getElementById('calTotal').innerText = calTotal;
// });
////
///Econmy Minus
// document.getElementById('economy-MinusBtn').addEventListener('click', function() {
//     var firstInput = document.getElementById('economy-input');
//     firstInputNum = parseInt(firstInput.value);
//     var newfirstInputNum = firstInputNum - 1;
//     firstInput.value = newfirstInputNum;
//     var CalDefault = document.getElementById('calSubTotal').innerText;
//     var CalDefaultNum = parseFloat(CalDefault);
//     var calSubTotal = CalDefaultNum - 100;
//     var calVat = calSubTotal * 0.1;
//     var calTotal = calSubTotal + calVat;
//     document.getElementById('calSubTotal').innerText = calSubTotal;
//     document.getElementById('calVat').innerText = calVat;
//     document.getElementById('calTotal').innerText = calTotal;
// });
