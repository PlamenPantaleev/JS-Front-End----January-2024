function browserHistory(object, array) {
    let browser = {browserName: "", openTabs: [], recentlyClosed: [], browserLogs: []};

    browser.browserName = object["Browser Name"];
    browser.openTabs = object["Open Tabs"];
    browser.recentlyClosed = object["Recently Closed"];
    browser.browserLogs = object["Browser Logs"];

    for (const currentLog of array) {
        if (currentLog === "Clear History and Cache") {
            browser.openTabs = [];
            browser.recentlyClosed = [];
            browser.browserLogs = [];
            continue;
        }

        const [command, site] = currentLog.split(" ");
        browser.browserLogs.push(currentLog);

        if (command === "Open") {
            browser.openTabs.push(site);
        } else {
            for (let i = 0; i < browser.openTabs.length; i++) {
                if (browser.openTabs[i] === site) {

                    let openSite = browser.openTabs[i];
                    browser.openTabs.splice(i, 1);
                    browser.recentlyClosed.push(openSite);
                    break;
                }
            }
        }
    }

    for (const key in browser) {
      let value = browser[key];

      if (!Array.isArray(value)) {
        console.log(value);
        continue;
      }

      let log = key;
      const findIndex = (log) => {
        for (let i = 0; i < log.length; i++) {
            if (log[i] === log[i].toUpperCase()) {
                return i;
            }
        }
      }

      let uppercaseIndex = findIndex(log);
      let firstWord = log.substring(0, uppercaseIndex);
      let secondWord = log.substring(uppercaseIndex);
      let currentLog = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + " " + secondWord;

      let text = `${currentLog}: ${browser[key].join(", ")}`;
      console.log(text);
    }
}

// browserHistory(
//   {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": [
//       "Open YouTube",
//       "Open Yahoo",
//       "Open Google Translate",
//       "Close Yahoo",
//       "Open Gmail",
//       "Close Gmail",
//       "Open Facebook",
//     ],
//   },
//   ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
) 
