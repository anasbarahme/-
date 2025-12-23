document.addEventListener('DOMContentLoaded', function() {
    // إعداد حركة تقليب الصفحات
    const pageFlip = new St.PageFlip(document.getElementById("book"), {
        width: 450, // عرض الصفحة الواحدة
        height: 600, // طول الصفحة
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false // لضمان تجربة لمس سلسة
    });

    // تحميل الصفحات
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // وظيفة إضافية للتأكد من أن النموذج لا يعطل حركة الصفحات
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('mousedown', (e) => e.stopPropagation());
    });
});
