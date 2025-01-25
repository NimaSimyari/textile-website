// تغییر زبان
document.getElementById('language-toggle').addEventListener('click', function() {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'fa') {
        document.documentElement.lang = 'en';
        this.textContent = 'FA';
    } else {
        document.documentElement.lang = 'fa';
        this.textContent = 'EN';
    }
});

// فرم تماس
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('پیام شما با موفقیت ارسال شد!');
});