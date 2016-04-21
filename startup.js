/* global chrome */

chrome.windows.onCreated.addListener(function () {
    chrome.tabs.query({
        url: '*://mail.google.com/*'
    }, function (tabs) {
        if (!tabs.length) {
            chrome.tabs.create({
                url: 'https://mail.google.com/mail/ca/u/0/#inbox',
                index: 0,
                active: false,
                pinned: true
            })
        }
    })
})
