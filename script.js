// دالة لتحديد ما إذا كان المستخدم يستخدم الهاتف
function isMobile() {
    return window.innerWidth <= 768;
}

const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: isMobile() ? window.innerWidth : 450, // عرض الصفحة بناءً على الجهاز
    height: isMobile() ? window.innerHeight * 0.8 : 600,
    size: "stretch",
    showCover: true,
    usePortrait: isMobile(), // تفعيل وضع البورتريه (صفحة واحدة) للهاتف
    disableFlipByClick: true,
    swipeDistance: 30
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// تحديث الحجم تلقائياً عند تدوير الهاتف
window.addEventListener('resize', () => {
    location.reload(); // إعادة التحميل لضبط المقاسات الجديدة
});
