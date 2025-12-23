const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 450,
    height: 600,
    size: "stretch",
    showCover: true,
    usePortrait: false,
    // الحل السحري: إيقاف التقليب عند الضغط وتفعيله فقط عند السحب
    disableFlipByClick: true, 
    clickEventForward: false,
    swipeDistance: 30,
    showPageCorners: true // يظهر زوايا الصفحة ليعرف المستخدم أنه يمكنه السحب من هناك
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// كود إضافي للتأكد من أن المتصفح يعطي الأولوية للكتابة
const inputs = document.querySelectorAll('input, textarea, button');
inputs.forEach(el => {
    // منع انتقال أي حدث للمكتبة عند التعامل مع المربعات
    ['click', 'mousedown', 'touchstart'].forEach(eventType => {
        el.addEventListener(eventType, (e) => {
            e.stopPropagation();
        }, { passive: false });
    });
});
