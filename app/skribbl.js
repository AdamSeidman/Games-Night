const numColors = 22
const numBrushes = 4
const numTools = 3

let color = 0
let brush = 0
let tool = 0

let skribblKey = function (event) {
    switch (event.code) {
        case "F16":
            tool = (tool + 1) % numTools
            document.getElementsByClassName("tool")[tool].click()
            break
        case "F17":
            brush = (brush + 1) % numBrushes
            document.getElementsByClassName("brushSize")[brush].click()
            break
        case "F18":
            color = (color + 1) % numColors
            document.getElementsByClassName("colorItem")[color].click()
            break
        
    }
}
