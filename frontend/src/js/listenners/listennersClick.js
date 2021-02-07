import { $wrapperRoot } from "../components/folder.js"
import { showTree } from "./menuTree.js"
import { getInfoFolder } from "../services/info.js";
import { renderFolder } from "../services/gettree.js";
import { onEdit, onRemove } from "./menuEdit.js";

const $elements = document.getElementsByClassName('folders-root')
const $files = document.getElementsByClassName('file')


function listenerClickFolder(list) {

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', (e) => {
            e.stopPropagation()
            list[i].classList.remove('hover')
            list[i].classList.add('hover')
            const nameFolder = list[i].textContent.trim()
            const type = 'folder'
            getInfoFolder(nameFolder, type)
            onEdit(list[i], nameFolder, type, '');
            onRemove(list[i], nameFolder);
        })
    }
}

function listenerDblClickFolder(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('dblclick', (e) => {
            e.stopPropagation()
            const nameFolder = `/${list[i].textContent.trim()}`
            renderFolder(nameFolder, true)
            renderFolder('/', false)

        })
    }
}


function listenerClickFile(list) {

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', (e) => {
            e.stopPropagation()
            list[i].parentNode.classList.add('hover')
            const nameFile = list[i].textContent.trim()
            const name_splitted = nameFile.split('.')
            const extension = name_splitted.pop()
            console.log(extension);
            const type = 'file'
            getInfoFolder(nameFile, extension)
            onEdit(list[i], nameFile, type, extension);
            // onRemove(list[i], nameFolder);
        })
    }
}
setTimeout(function(){
    listenerClickFolder($elements)
    listenerDblClickFolder($elements)
    listenerClickFile($files)
    // listenerDblClickFile($elements)
}, 1100);
