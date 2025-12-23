document.addEventListener('DOMContentLoaded', function() {
    // 1. إعداد الكتاب
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
        mobileScrollSupport: false
    });

    // تحميل الصفحات من الـ HTML
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // 2. وظيفة إضافة الرسائل
    window.addMessage = function() {
        const name = document.getElementById('guestName').value;
        const msg = document.getElementById('guestMessage').value;
        const container = document.getElementById('messagesContainer');

        if (name && msg) {
            const div = document.createElement('div');
            div.className = 'message-item';
            div.innerHTML = `<strong>${name}:</strong> ${msg}`;
            
            container.appendChild(div);

            // مسح الخانات بعد الكتابة
            document.getElementById('guestName').value = '';
            document.getElementById('guestMessage').value = '';
            
            alert('تمت إضافة رسالتك للدفتر بنجاح!');
        } else {
            alert('يرجى كتابة الاسم والرسالة');
        }
    }
});
