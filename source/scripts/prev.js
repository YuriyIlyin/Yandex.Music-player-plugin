//Найдём кнопку с id
var prev_btn = document.getElementById('prev');

//Если ее еще нет, то присвоим нужной кнопке этот id
if (prev_btn == null) {
    //Найдём саму кнопку
    jq_prev_btn = $('.b-jambox__prev');
    jq_prev_btn.attr('id', 'prev');
    prev_btn = document.getElementById('prev');
}

//Нажмём кнопку
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click",
    true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null
);
prev_btn.dispatchEvent(evt);
