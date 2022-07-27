const numColors = 18
const numBrushes = 5
const numTools = 10

let color = 0
let brush = 0
let tool = 0

let garticKey = function (event) {
    switch (event.code) {
        case "F16":
            tool = (tool + 1) % numTools
            document.getElementsByClassName("tool")[tool].click()
            break
        case "F17":
            brush = (brush + 1) % numBrushes
            document.getElementsByClassName("brush")[brush].click()
            break
        case "F18":
            color = (color + 1) % numColors
            document.getElementsByClassName("color")[color].click()
            break
        
    }
}
