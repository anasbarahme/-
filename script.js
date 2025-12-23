function initPageFlip() {
    const bookContainer = document.getElementById("book");
    const isMobile = window.innerWidth <= 768;

    // تدمير أي نسخة قديمة إذا وجدت (لتجنب التداخل)
    if (window.pageFlip) {
        window.pageFlip.destroy();
    }

    // إعدادات مخصصة تماماً لكل جهاز
    const settings = {
        width: isMobile ? window.innerWidth : 450,
        height: isMobile ? window.innerHeight * 0.8 : 600,
        size: isMobile ? "fixed" : "stretch", // استخدام fixed للجوال يمنع التمدد الخاطئ
        showCover: true,
        usePortrait: isMobile, // صفحة واحدة للجوال
        disableFlipByClick: true, // لمنع مشكلة الكتابة
        swipeDistance: 30,
        clickEventForward: false,
        useMouseEvents: true
    };

    window.pageFlip = new St.PageFlip(bookContainer, settings);
    window.pageFlip.loadFromHTML(document.querySelectorAll(".page"));
}

// تشغيل عند التحميل
window.addEventListener('DOMContentLoaded', initPageFlip);

// إعادة التشغيل عند تدوير الشاشة بذكاء (بعد ثانية واحدة لضمان استقرار الأبعاد)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initPageFlip, 500);
});

// منع التقليب عند الضغط على المدخلات
document.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') {
        e.stopPropagation();
    }
}, true);
