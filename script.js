const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 450,
    height: 600,
    size: "stretch",
    showCover: true,
    usePortrait: false,
    clickEventForward: false // يمنع التقليب التلقائي عند الضغط داخل الصفحة
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// كود إضافي لمنع التقليب عند الضغط على المدخلات
document.querySelectorAll('input, textarea, button').forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation(); // يمنع وصول النقرة للمكتبة المسؤولة عن التقليب
    });
});
