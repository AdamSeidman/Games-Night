let windowName = window.location.href.toLowerCase()
windowName = windowName.substring(windowName.indexOf(":") + 3)
windowName = windowName.substring(0, windowName.indexOf("/"))

let keyFunctions = {
    "skribbl.io": skribblKey,
    "garticphone.com": garticKey
}

if (!Object.keys(keyFunctions).includes(windowName)) {
    keyFunctions[windowName] = function () {}
}

window.addEventListener("keydown", e => {
    keyFunctions[windowName](e)
}, true)