// chrome.tabs.onActivated.addListener(tab=>{
//     console.log(tab)
//     chrome.tabs.get(tab.tabId,cur=>{
//         chrome.scripting.executeScript({
//             target: {tabId: tab.tabId,allFrames:true},
//             files: ['foregroup.js']
//           });
//     });

// })

async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  console.log(tabs);
  return tabs[0];
}

chrome.tabs.onUpdated.addListener(async function () {
  let tab = await getTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    files: ["foregroup.js"],
  });
});
