let bot = document.getElementById('bot');
let foot = document.getElementById('foot');
let button = document.getElementById('js-ppp');
let hide = document.getElementById('hide');

function showPhatPhucc() {
    bot.style.display = 'block';
    foot.style.bottom = '0';
    foot.style.position = 'relative';
}

function hidePhatPhucc() {
    bot.style.display = 'none';
    foot.style.bottom = '0';
    foot.style.position = 'fixed';
}


button.addEventListener('click', showPhatPhucc);
hide.addEventListener('click', hidePhatPhucc);

