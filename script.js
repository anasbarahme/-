const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 450,
    height: 600,
    size: "stretch",
    showCover: true,
    startPage: 0,
    disableFlipByClick: false // يسمح بالتقليب عند الضغط على الأطراف
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));
