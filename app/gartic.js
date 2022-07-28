const garticNumColors = 18
const garticNumBrushes = 5
const garticNumTools = 8

let garticObj = {
    color: 0,
    brush: 0,
    tool: 0
}

let garticKey = function (event) {
    switch (event.code) {
        case "F17":
            garticObj.tool = (garticObj.tool + 1) % garticNumTools
            document.getElementsByClassName("tool")[garticObj.tool].click()
            break
        case "F18":
            garticObj.color = (garticObj.color + 1) % garticNumColors
            document.getElementsByClassName("color")[garticObj.color].click()
            break
        case "F19":
            if (garticObj.brush < (garticNumBrushes - 1)) {
                garticObj.brush += 1
            }
            document.getElementsByClassName("thickness")[garticObj.brush].click()
            break
        case "F20":
            if (garticObj.brush > 0) {
                garticObj.brush -= 1
            }
            document.getElementsByClassName("thickness")[garticObj.brush].click()
            break
    }
}
