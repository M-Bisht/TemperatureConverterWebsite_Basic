const total = () => {
    let input = document.getElementById("input").value;
    let select = document.getElementById("select");
    let dropdown = select.options[select.selectedIndex].value;

    let result;

    if (dropdown == "Celsius to Fahrenheit")
    {result = `${input}&deg; Celsius = ${Math.round((input * 9) / 5 + 32)}&deg; Fahrenheit`;}

    else{result = `${input}&deg; Fahrenheit = ${Math.round((input - 32 )* 5 / 9)}&deg; Celsius`;}

    document.getElementById("p").innerHTML = result;
};