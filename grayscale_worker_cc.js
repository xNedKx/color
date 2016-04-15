importScripts("./cc-min.js");
var color = new Color
function hToLeft(e){
    var img = e.data.data, m = e.data.mode, c = new Array(3), cache = {}
    for(var i = 0; i < img.height; i++){
        for(var j = 0; j < img.width; j++){
            var pos = (i * img.width + j) * 4,
                key = img.data.slice(pos,pos+4).join("|")
            if( !(img.data[pos] == img.data[pos+1] && img.data[pos+1] == img.data[pos+2]) || (i == img.height-1 && j == img.width-1)){
                if( !cache.hasOwnProperty(key) ){
                    color[0] = img.data[pos]
                    color[1] = img.data[pos+1]
                    color[2] = img.data[pos+2]
                    color.alphaValue = img.data[pos+3]
                    cache[key] = color[m](false).grayscale()[0]
                }
                postMessage({color: cache[key], x: j, y: i})
            }
        }
    }
}
addEventListener("message", hToLeft, false);