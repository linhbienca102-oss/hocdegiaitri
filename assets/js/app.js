// EduSphere App JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Học để giải trí đã sẵn sàng!');
    
    // Thêm hiệu ứng loading cho cards
    const cards = document.querySelectorAll('.subject-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log('Đang chuyển đến môn học:', this.querySelector('h3').textContent);
        });
    });
    
    // Kiểm tra xem Feather Icons đã load chưa
    if (typeof feather !== 'undefined') {
        feather.replace();
    } else {
        console.warn('Feather Icons chưa được load');
    }

});
