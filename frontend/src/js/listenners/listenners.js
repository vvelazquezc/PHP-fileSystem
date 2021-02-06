import { $wrapperRoot } from "../components/folder.js"
import { showTree } from "./menuTree.js"
import { getInfoFolder } from "../services/info.js";
import { renderFolder } from "../services/gettree.js";
import { onEdit } from "./menuEdit.js";

const $elements = document.getElementsByClassName('folders-root')


function addEventListenerClick(list) {

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', (e) => {
            e.stopPropagation()
            list[i].classList.remove('hover')
            list[i].classList.add('hover')
            const nameFolder = list[i].textContent.trim()
            getInfoFolder(nameFolder)
            onEdit(list[i], nameFolder);
        })
    }
}

function addEventListenerDblClick(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('dblclick', (e) => {
            e.stopPropagation()
            const nameFolder = `/${list[i].textContent.trim()}`
            renderFolder(nameFolder, true)
            renderFolder('/', false)

        })
    }
}

setTimeout(function(){
    addEventListenerClick($elements)
    addEventListenerDblClick($elements)
}, 1100);
