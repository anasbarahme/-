// دالة لتحديد مقاسات الكتاب بناءً على نوع الجهاز
function getBookSettings() {
    if (window.innerWidth <= 768) {
        return {
            width: window.innerWidth, // عرض الهاتف بالكامل
            height: window.innerHeight * 0.8, // 80% من طول الشاشة
            mode: "portrait" // وضع الصفحة الواحدة
        };
    } else {
        return {
            width: 450,
            height: 600,
            mode: "landscape" // وضع الصفحتين للكمبيوتر
        };
    }
}

const settings = getBookSettings();

const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: settings.width,
    height: settings.height,
    size: "stretch",
    showCover: true,
    usePortrait: settings.mode === "portrait", // تفعيل وضع الصفحة الواحدة للجوال
    disableFlipByClick: true, // منع التقليب عند النقر للكتابة
    clickEventForward: false,
    swipeDistance: 30
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// إعادة تحميل الصفحة عند تدوير الهاتف لضبط الأبعاد الجديدة
window.onresize = function() {
    location.reload();
};
