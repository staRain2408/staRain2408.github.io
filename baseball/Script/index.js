let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
    }
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active";
    }
    setTimeout(showSlides, 5000); // 5秒後切換下一張幻燈片
}

function currentSlide(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {n = 1}
    if (n < 1) {n = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[n-1]) {
        slides[n-1].style.display = "block";  
    }
    if (dots[n-1]) {
        dots[n-1].className += " active";
    }
    slideIndex = n; // 更新當前索引
}