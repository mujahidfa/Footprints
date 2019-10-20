// Runs as soon as user launches the Google Maps website
chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.google.com', pathPrefix: '/maps/dir', schemes: ['https'] },
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});