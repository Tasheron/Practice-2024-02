require('./bootstrap');

IMask(document.querySelector('.mask'), {
    mask: '+{7} (000) 000-00-00'
});

document.querySelector('.popup-plan--close').addEventListener('click', () => {
    document.querySelector('.popup-plan').style.display = 'none';
})

document.querySelector('.popup-open-btn-vip').addEventListener('click', () => {
    document.querySelector('.popup-plan').style.display = 'block';
    document.querySelector('input.plan').value = 'vip';
})

document.querySelector('.popup-open-btn-free').addEventListener('click', () => {
    document.querySelector('.popup-plan').style.display = 'block';
    document.querySelector('input.plan').value = 'free';
})

urlParams = new URLSearchParams(window.location.search);
success = urlParams.get('success');

if (success) {
    window.history.replaceState(null, '', window.location.pathname);
}