function updateNumber(isIncreasing, product, price) {
    const Number = document.getElementById(product + '-number');
    const NumberValue = Number.value;
    let NewNumber = parseInt(NumberValue);
    if (isIncreasing == true) {
        NewNumber = NewNumber + 1;

    }
    else if (NewNumber > 0) {

        NewNumber = NewNumber - 1;

    }
    Number.value = NewNumber;

    const Price = document.getElementById(product + '-price');

    const updatedPrice = price * NewNumber;
    Price.innerText = updatedPrice;
    // subtotal calcultaion

    calculateTotal();



}


//case increasing
document.getElementById("case-plus").addEventListener('click', function () {

    updateNumber(true, 'case', 59);

}


)
//case decreasing
document.getElementById("case-minus").addEventListener('click', function () {
    updateNumber(false, 'case', 59);



}


)
//phone increasing
document.getElementById("phone-plus").addEventListener('click', function () {

    updateNumber(true, 'phone', 1219);

}
)
//phone decreasing
document.getElementById("phone-minus").addEventListener('click', function () {

    updateNumber(false, 'phone', 1219);

}
)
// 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotalAmount = phoneTotal + caseTotal;
    const tax = subTotalAmount / 10;
    const total = subTotalAmount + tax;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = subTotalAmount;
    const taxAmount = document.getElementById('tax-amount');
    taxAmount.innerText = tax;
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = total;

}
