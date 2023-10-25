document.addEventListener("DOMContentLoaded", function() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num3 = document.getElementById("num3");
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            num1.innerHTML = "$19.99";
            num2.innerHTML = "$29.99";
            num3.innerHTML = "$39.99";
        } else {
            num1.innerHTML = "$199.99";
            num2.innerHTML = "$299.99";
            num3.innerHTML = "$399.99";
        }
    });
});