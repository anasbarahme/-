// دالة للتأكد من حجم الشاشة
function getOrientation() {
    return window.innerWidth <= 768 ? 'portrait' : 'landscape';
}

const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 450,
    height: 600,
    size: "stretch",
    showCover: true,
    // إذا كان هاتفاً، استخدم وضع الصفحة الواحدة (portrait)
    usePortrait: window.innerWidth <= 768, 
    disableFlipByClick: true,
    swipeDistance: 30,
    clickEventForward: false
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// تحديث الصفحة تلقائياً عند تغيير حجم المتصفح أو تدوير الهاتف
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth <= 768;
    pageFlip.updateConfig({
        usePortrait: isMobile,
        width: isMobile ? window.innerWidth : 450
    });
});
