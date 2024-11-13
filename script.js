// Lấy phần tử nút "Không"
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Hàm di chuyển nút "Không"
function moveButton() {
    const offsetX = Math.random() * 200 - 100;
    const offsetY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Hàm chuyển hướng đến trang chúc mừng sinh nhật
function goToBirthdayPage() {
    window.location.href = 'birthday.html';
}

// Gán sự kiện
noBtn.addEventListener('mouseover', moveButton);
yesBtn.addEventListener('click', goToBirthdayPage);
