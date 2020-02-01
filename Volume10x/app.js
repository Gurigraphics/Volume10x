var EVENT = {}

EVENT.super = (event) => { 
    chrome.tabs.executeScript({
      file: 'super.js'
    })  
}

EVENT.normal = (event) => { 
    chrome.tabs.executeScript({
      file: 'normal.js'
    })  
}
