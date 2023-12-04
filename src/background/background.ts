// chrome.runtime.onInstalled.addListener(function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     if (tabs[0]) {
//       chrome.runtime.onMessage.addListener(function (
//         request,
//         sender,
//         sendResponse,
//       ) {
//         if (request.action == 'startCaption') {
//           console.warn('Hellow World! from background');
//         }
//       });
//       // chrome.tabs.sendMessage(tabs[0].id as number, {
//       //   action: 'showCaption',
//       //   caption: 'Live captions are now available!',
//       // });
//     }
//   });
// });

chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0]) {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.message === 'StartCaption') {
          console.warn('background ts111');
        }
      });
    }
  });
});

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   if (tabs[0]) {
//     chrome.tabs.sendMessage(tabs[0].id as number, {
//       target: 'modal',
//       type: 'toggleModal',
//     });
//   }
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'StartCaption') {
    console.warn('background ts');
  }
});

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.target === 'background') {
//     if (request.type === 'message') {
//       chrome.runtime.sendMessage(chrome.runtime.id, {
//         target: 'app',
//         type: 'setMessage',
//         body: 'How are you',
//       });
//     }
//   }
// });
