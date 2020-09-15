var EVENT = {}
EVENT.super = (event) => {
  chrome.tabs.executeScript({
   code: `
 amplify(document.getElementsByTagName('video')[0], 10)
 console.log("Super")`
 })
}

EVENT.normal = (event) => {
  chrome.tabs.executeScript({
   code: `
   amplify(document.getElementsByTagName('video')[0], 1)
   console.log("Normal")`
 })
}

function main() {
  chrome.tabs.executeScript({
   code: `var amplify = (mediaElem, multiplier) => {
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
   console.log("Start")`
 })
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btnSuper').addEventListener('click', EVENT.super)
  document.querySelector('.btnNormal').addEventListener('click', EVENT.normal)
  main()
})
