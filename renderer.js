const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (${versions.node()}) and Electron (v${versions.electron()})`