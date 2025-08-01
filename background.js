// Primary ad domains to block
const adRules = [
    // Google Ads/YouTube
    { id: 1, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||doubleclick.net', resourceTypes: ['script', 'image', 'xmlhttprequest', 'media'] } },
    { id: 2, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||googleadservices.com', resourceTypes: ['script', 'image', 'xmlhttprequest'] } },
    { id: 3, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||googlesyndication.com', resourceTypes: ['script', 'image'] } },
    { id: 4, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||2mdn.net', resourceTypes: ['media', 'script'] } },

    // YouTube-specific
    { id: 5, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||youtube.com/pagead/', resourceTypes: ['sub_frame', 'script'] } },
    { id: 6, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||youtube.com/api/stats/ads', resourceTypes: ['xmlhttprequest'] } },

    // Third-party networks
    { id: 7, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||aniview.com', resourceTypes: ['script', 'media'] } },
    { id: 8, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||pubmatic.com', resourceTypes: ['script', 'image'] } },

    // Tracking
    { id: 9, priority: 1, action: { type: 'block' }, condition: { urlFilter: '||scorecardresearch.com', resourceTypes: ['script'] } }
];

// Apply rules on extension install/update
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: adRules.map(rule => rule.id), // Clear old rules
        addRules: adRules
    });
});

// Log blocked requests for debugging
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    console.log('Blocked ad request:', info.request.url);
});