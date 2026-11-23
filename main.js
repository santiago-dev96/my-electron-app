// You can just require "electron" but if you require
// "electron/main" you get typings.
const { app, BrowserWindow } = require('electron/main')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  // If the app is still running without any windows open
  // (macOS) then we can listen for the "activate" event to
  // open a new window.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// On macOS you don't need to explicitly close
// the app when all windows are closed. For the
// other platforms supported by Electron we do
// need to quit the app.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})