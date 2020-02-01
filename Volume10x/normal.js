console.log("Go Normal Volume")
javascript: (() => {  
  function amplify(mediaElem, multiplier) {   
  window.context = window.context || new AudioContext()
  window.source = window.source || context.createMediaElementSource( mediaElem )
  window.source.disconnect(0);
  let result = {
        context: window.context,
        source: window.source,
        gain: context.createGain(),
        media: mediaElem,
        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
        getAmpLevel: function() { return result.gain.gain.value; }
   }
  result.source.connect(result.gain)
  result.gain.connect(context.destination)
  result.amplify(multiplier);
  return result
}
let value = 1
amplify(document.getElementsByTagName('video')[0], value)  
})()
 