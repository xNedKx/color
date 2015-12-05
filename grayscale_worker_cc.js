importScripts("./cc-min.js");
var color = new Color
function hToLeft(e){
    var img = e.data.data, m = e.data.mode, c = new Array(3)
    for(var i = 0; i < img.height; i++){
        for(var j = 0; j < img.width; j++){
            var pos = (i * img.width + j) * 4
            color[0] = img.data[pos]
            color[1] = img.data[pos+1]
            color[2] = img.data[pos+2]
            color.alphaValue = img.data[pos+3]
            postMessage({color: color[m](0).grayscale().rgb().css(), x: j, y: i})
        }
    }
}
addEventListener("message", hToLeft, false);