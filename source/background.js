var paused = 0;
var playing = 1;
var clickInterval = 300;
var clickCounter = 0;
var timer = null;

function getYandexMusicUrl() {
    return 'http://music.yandex.ru/';
}

function isYandexMusicUrl(url) {
    var ymUrl = getYandexMusicUrl();
    return url.indexOf(ymUrl) == 0;
}

function openYandexMusicInNewTab() {
    chrome.tabs.create({"url" : getYandexMusicUrl() });
}

function runScriptOnYMTab(scriptFile) {
    chrome.tabs.getAllInWindow(undefined, function(tabs) {
        var foundKey = false;
        for (var i = 0, tab; tab = tabs[i]; i++) {
            if (tab.url && isYandexMusicUrl(tab.url)) {
                chrome.tabs.executeScript(tab.id, {"file": scriptFile});
                foundKey = true;
                break;
            }
        }
        if (!foundKey)
            openYandexMusicInNewTab();
    });
}

function play() {
    runScriptOnYMTab("scripts/play.js");
}

function previous() {
    runScriptOnYMTab("scripts/prev.js");
}

function next() {
    runScriptOnYMTab("scripts/next.js");
}

function updateMainButtonState(state) {
    chrome.browserAction.setIcon({
        path: state == paused ? "images/icon-play.png" : "images/icon-pause.png"
    });
}

function clickHandler() {
    clickCounter += 1;
    clearTimeout(timer);
    timer = setTimeout(clickTimeout, clickInterval);
}

function clickTimeout() {
    switch (clickCounter) {
        case 3:
            previous();
            break;
        case 2:
            next();
            break;
        default:
            play();
            break;
    }
    clickCounter = 0;
}

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('click');
    clickHandler();
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('message ' + request);
    updateMainButtonState(request == "playing" ? playing : paused);
});