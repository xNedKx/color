importScripts("cc-min.js")
function worker(e){
    var cs = Color.Set.fn.readImageData(e.data)
    postMessage(cs.analyse())
}
addEventListener("message", worker, false)