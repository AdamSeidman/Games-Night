const skribblNumColors = 22
const skribblNumBrushes = 4
const skribblNumTools = 3

let skribblObj = {
    color: 0,
    brush: 0,
    tool: 0
}

let skribblKey = function (event) {
    switch (event.code) {
        case "F16":
            skribblObj.tool = (skribblObj.tool + 1) % skribblNumTools
            document.getElementsByClassName("tool")[skribblObj.tool].click()
            break
        case "F17":
            skribblObj.brush = (skribblObj.brush + 1) % skribblNumBrushes
            document.getElementsByClassName("brushSize")[skribblObj.brush].click()
            break
        case "F18":
            skribblObj.color = (skribblObj.color + 1) % skribblNumColors
            document.getElementsByClassName("colorItem")[skribblObj.color].click()
            break
        
    }
}
