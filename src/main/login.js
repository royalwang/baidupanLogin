import {BrowserWindow} from 'electron'

let loginWindow = null;

const loginUrl = process.env.NODE_ENV === 'development' ? `http://localhost:9080/#/login` : `file://${__dirname}/index.html/#/login`;

function createLoginWindow() {
    loginWindow = new BrowserWindow({
        width: 662,
        height: 442,
        useContentSize: true,
        frame: false,
        resizable: false
    });

    loginWindow.setMenu(null);

    loginWindow.loadURL(loginUrl);
}

createLoginWindow();