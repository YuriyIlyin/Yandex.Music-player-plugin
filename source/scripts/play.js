var btn = document.getElementById('play');

if (btn == null) {
    jq_btn = $('.b-jambox__play');
    jq_btn.attr('id', 'play');

    btn = document.getElementById('play');
    btn.addEventListener('click', function () {
        if (jq_btn.hasClass('b-jambox__playing'))
            chrome.extension.sendMessage("playing");
        else
            chrome.extension.sendMessage("paused");
    }, false);
}

var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("click",
    true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null
);
btn.dispatchEvent(evt);
