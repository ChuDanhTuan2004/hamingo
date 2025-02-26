function scrollServices(direction) {
    const list = document.querySelector(".services-list");
    const scrollAmount = 200;
    list.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

// Danh sách bài báo
const newsData = [
    { title: "HaMinGo đề xuất", content: "Các dịch vụ tốt nhất từ HaMinGo...", image: "https://via.placeholder.com/400" },
    { title: "Bảo hiểm và tài chính", content: "Đây là thông tin về bảo hiểm và tài chính...", image: "https://via.placeholder.com/400" },
    { title: "Xem phim dễ dàng", content: "Bạn có thể mua vé xem phim trực tuyến dễ dàng.", image: "https://via.placeholder.com/400" },
    { title: "Ví Nhân Ái", content: "Ví Nhân Ái giúp bạn quyên góp từ thiện nhanh chóng.", image: "https://via.placeholder.com/400" },
    { title: "Trò chơi", content: "Danh sách các trò chơi hot nhất.", image: "https://via.placeholder.com/400" },
    { title: "Điện thoại - Data", content: "Dịch vụ nạp tiền điện thoại và Data 4G/5G.", image: "https://via.placeholder.com/400" }
];

function showNews(index) {
    document.getElementById("news-title").innerText = newsData[index].title;
    document.getElementById("news-content").innerText = newsData[index].content;
    document.getElementById("news-image").src = newsData[index].image;
    document.getElementById("news-box").style.display = "block";
}

function closeNews() {
    document.getElementById("news-box").style.display = "none";
}