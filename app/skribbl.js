const skribblNumColors = 22
const skribblNumBrushes = 4

let skribblObj = {
    color: 0,
    brush: 0
}

let skribblKey = function (event) {
    switch (event.code) {
        case "F15":
            document.getElementsByClassName("tool")[2].click()
            break
        case "F16":
            document.getElementsByClassName("tool")[1].click()
            break
        case "F17":
            document.getElementsByClassName("tool")[0].click()
            break
        case "F18":
            skribblObj.color = (skribblObj.color + 1) % skribblNumColors
            document.getElementsByClassName("colorItem")[skribblObj.color].click()
            break
        case "F19":
            if (skribblObj.brush < (skribblNumBrushes - 1)) {
                skribblObj.brush += 1
            }
            document.getElementsByClassName("brushSize")[skribblObj.brush].click()
            break
        case "F20":
            if (skribblObj.brush > 0) {
                skribblObj.brush -= 1
            }
            document.getElementsByClassName("brushSize")[skribblObj.brush].click()
            break
    }
}
