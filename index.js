function Calc() {
    let a = document.getElementById("opt1").value;
    let b = document.getElementById("opt2").value;
    let c = document.getElementById("amount").value;

    if (a == b) {
        document.getElementById("result").innerHTML = "Result: " + c + " " + a;
    }

    if (a == "VND" && b == "USD") {
        document.getElementById("result").innerHTML = "Result: " + c / 23000 + " USD"
    }

    if (a == "USD" && b == "VND") {
        document.getElementById("result").innerHTML = "Result: " + c * 23000 + " VND"
    }
}


