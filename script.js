const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 450,
    height: 600,
    size: "stretch",
    showCover: true,
    usePortrait: false,
    // الحل الأول: منع التقليب عند النقرة العشوائية
    disableFlipByClick: true, 
    // الحل الثاني: السماح للمتصفح بتمرير الأحداث للعناصر التحتية
    clickEventForward: false 
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// الحل الثالث والمهم جداً:
// سنقوم بتعطيل "التقليب" برمجياً عندما يكون الماوس فوق أي مربع نص
const inputs = document.querySelectorAll('input, textarea, button');

inputs.forEach(input => {
    input.addEventListener('mouseenter', () => {
        // إذا دخل الماوس للمربع، نمنع المكتبة من التقليب
        pageFlip.updateConfig({disableFlipByClick: true});
    });
    
    input.addEventListener('focus', () => {
        // عند البدء بالكتابة، نتأكد أن الصفحة لن تتحرك
        pageFlip.updateConfig({disableFlipByClick: true});
    });

    // منع انتشار حدث النقر تماماً
    input.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
});
