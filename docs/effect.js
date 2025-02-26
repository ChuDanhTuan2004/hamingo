window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Auto chuyển slide mỗi 5 giây
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");

    // Tạo khung viền hồng
    const activeIndicator = document.createElement("div");
    activeIndicator.classList.add("service-indicator");
    document.querySelector(".services-list").appendChild(activeIndicator);

    function moveActiveIndicator(target) {
        const rect = target.getBoundingClientRect();
        const listRect = document.querySelector(".services-list").getBoundingClientRect();

        activeIndicator.style.width = `${rect.width}px`;
        activeIndicator.style.left = `${rect.left - listRect.left}px`;
    }

    // Xử lý hiệu ứng khi di chuột vào từng mục
    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            moveActiveIndicator(this);
        });
    });

    // Ẩn khung hồng khi rời chuột khỏi danh sách
    document.querySelector(".services-list").addEventListener("mouseleave", function () {
        activeIndicator.style.width = "0";
    });
});


