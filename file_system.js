import { get, set } from 'https://unpkg.com/idb-keyval@5.0.2/dist/esm/index.js';

const button = document.querySelector('button');

const load = async () => {
    global.directoryHandle = await get('folder');
    if (!global.directoryHandle) {
        button.style.display = "block";
        return;
    }

    console.log(global.directoryHandle);
}

const attach_folder = async () => {
    global.directoryHandle = await window.showDirectoryPicker();
    await set('folder', global.directoryHandle);
}

button.addEventListener('click', attach_folder);
load();

export {
    load, attach_folder
}
