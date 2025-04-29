window.onload = function() {
    // Typewriter Effect
    const text = "Adventurine, a shrewd and calculating strategist of the Interastral Peace Corporation.";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("description").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start the Typewriter Effect after the page loads
    typeWriter();

    // Animate Stats Bar after a small delay
    setTimeout(() => {
        document.getElementById("intelligence").style.width = "95%";
        document.getElementById("luck").style.width = "80%";
        document.getElementById("charisma").style.width = "90%";
    }, 2000); // Delay untuk sinkron dengan typewriter selesai
};
