//Найдём кнопку с id
var btn = document.getElementById('prev');

//Если ее еще нет, то присвоим нужной кнопке этот id
if (btn == null) {
    //Найдём саму кнопку
    jq_btn = $('.b-jambox__prev');
    jq_btn.attr('id', 'prev');
    btn = document.getElementById('prev');
}

//Нажмём кнопку
var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click",
    true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null
);
btn.dispatchEvent(evt);