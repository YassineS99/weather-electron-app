const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('weatherAPI', {
  fetchWeather: async (city) => {
    // Use the browser's fetch API (Electron 17+ supports fetch in preload)
    const res = await fetch(`https://wttr.in/${city}?format=%C+%t+%h`);
    if (!res.ok) throw new Error('Network response not ok');
    return res.text();
  }
});
