/**
 * Main entry point of the electron application.
 *
 * @Author: Sean Wright
 * @Email:  seanrobertwright@gmail.com
 * @Filename: main.js
 * 
 * Copyright (C) Sean Wright.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {app, BrowserWindow} = require('electron')
const OS = require('os')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let win

// Create the browser window.
function createWindow() {

    win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icons/tracking-icon-png-9.jpg',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL(__dirname + '/index.html')
  win.webContents.openDevTools()
  win.on('closed', ()=> {
    win = null
  })
}
  // and load the index.html of the app.
  //var userName = process.env['USERPROFILE'].split(path.sep)[2];
  //var loginId = path.join("domainName", userName);
  //console.log(loginId);
  //mainWindow.setTitle("SHITS" + loginId);

  //alert(username);
  //mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => {

  if (mainWindow === null) {
    createWindow()
  }
});
