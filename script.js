//your JS code here. If required.
//your JS code here. If required.
// Function to get the browser name and version
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName;
  let version;

  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
  } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
    browserName = "Internet Explorer";
  } else {
    browserName = "Unknown Browser";
  }

  const start = userAgent.indexOf(browserName) + browserName.length + 1;
  const end = userAgent.indexOf(" ", start);
  version = userAgent.substring(start, end);

  return {
    name: browserName,
    version: version,
  };
}

// Display the browser information on the page
function displayBrowserInfo() {
  const browserInfoElement = document.getElementById("browser-info");
  const browserInfo = getBrowserInfo();
  const message = `You are using ${browserInfo.name} version ${browserInfo.version}.`;
  browserInfoElement.textContent = message;
}

displayBrowserInfo();
