function Calc() {
    let a = parseInt(document.getElementById("amount").value);
    let b = 23000 * a;
    document.getElementById("result").innerHTML = 'Result: ' + b + ' VND'
}