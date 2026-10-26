const { app, BrowserWindow } = require('electron');

function createWindow () {
  const mainWindow = new BrowserWindow({
    kiosk: true,              // Locks to full screen
    autoHideMenuBar: true,    // Hides the top menu
    alwaysOnTop: true,        // Prevents other windows from overlapping
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag:true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});