document.addEventListener("DOMContentLoaded", function () {
    const typeSpeed = 50; // Speed of typing in milliseconds

    // Get all elements with the 'typing' class
    const typingElements = document.querySelectorAll(".typing");

    // Function to type out each element's text content
    typingElements.forEach(element => {
        let text = element.textContent; // Get the full text
        element.textContent = ""; // Clear the text for typing effect
        let index = 0;

        function typeLetter() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeLetter, typeSpeed);
            }
        }
        
        typeLetter();
    });
});
