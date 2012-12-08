//Найдём кнопку с id
var next_btn = document.getElementById('next');

//Если ее еще нет, то присвоим нужной кнопке этот id
if (next_btn == null) {
    //Найдём саму кнопку
    jq_next_btn = $('.b-jambox__next');
    jq_next_btn.attr('id', 'next');
    next_btn = document.getElementById('next');
}

//Нажмём кнопку
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click",
    true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null
);
next_btn.dispatchEvent(evt);
