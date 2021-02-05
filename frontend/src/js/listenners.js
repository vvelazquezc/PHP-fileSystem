import { $wrapperRoot } from "././components/folder.js"
import { showTree } from "./listenners/menuTree.js"
import { getInfoFolder } from "./services/info.js";

//requiring path and fs modules
const $elements = document.getElementsByClassName('folders-root')


function addEventListenerByClass(list) {

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', (e) => {
            e.stopPropagation()
            list[i].classList.remove('hover')
            list[i].classList.add('hover')
            const nameFolder = list[i].textContent.trim()
            console.log(nameFolder);
            getInfoFolder(nameFolder)
        })
        // list[i].addEventListener('dblclick', (e) => {
        //     e.stopPropagation()
        //     console.log('dble!')
        // })
    }
}

setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($elements)
}, 1100);
