document.addEventListener("DOMContentLoaded", function() {
    const text = "All or Nothing";
    const typewriterElement = document.getElementById("typewriter");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            document.getElementById("adventurine-blink").style.opacity = 1;

            setTimeout(function() {
                const splash = document.getElementById("splash-screen");
                splash.style.opacity = '0';
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 1000); 
            }, 3000);
        }
    }

    typeWriter(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".adventurine-img");
    let currentIndex = 0;  // Mulai dari gambar kedua, karena kamu ingin gambar tengah sebagai awal

    function updateSlider() {
        const offset = -currentIndex * 270;  // Pastikan angka ini sesuai dengan lebar gambar
        document.querySelector(".image-slider").style.transform = `translateX(${offset}px)`; // Perbaikan di sini dengan menggunakan backticks
    }

    document.querySelector(".next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length; 
        updateSlider();
    });

    document.querySelector(".prev").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;  
        updateSlider();
    });

    updateSlider();
});
