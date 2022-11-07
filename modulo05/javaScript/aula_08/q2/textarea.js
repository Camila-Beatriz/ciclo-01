let button = document.getElementById("button");

button = addEventListener("click", function () {
    let textArea = document.getElementById("area").value;
    console.log(textArea);

    try {
        JSON.parse(textArea);
        console.log(JSON.parse(textArea));

        document.getElementById("result").innerHTML = "Parsable JSON string!";

    }

    catch (error) {
        console.error("Error parsing JSON string!");

        document.getElementById("result").innerHTML = "Error parsing JSON string!";


    }
});

