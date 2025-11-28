document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const text = "Gameplay Programmer";
    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
