document.addEventListener('DOMContentLoaded', function() {
    // إعداد حركة تقليب الصفحات
 const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 450,
    height: 600,
    size: "stretch",
    showCover: true,
    usePortrait: false, // يمنع تداخل الصفحات في العرض المزدوج
    flippingTime: 1000,
    swipeDistance: 30
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // تحميل الصفحات
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // وظيفة إضافية للتأكد من أن النموذج لا يعطل حركة الصفحات
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('mousedown', (e) => e.stopPropagation());
    });
});
