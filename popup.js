let adCount = 0;

// Listen for blocked ads (requires declarativeNetRequestFeedback permission)
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    adCount++;
    document.getElementById('counter').textContent = adCount;
});