import { renderTree } from "../services/getTree.js";

const $folders = document.getElementsByClassName('folder')

function addEventListenerByClass(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', () => {
            const parent = list[i].parentNode
            parent.classList.add('hover-folder')
            showTree(true)
        })
    }
}
function showTree(boolean) {
    const isTree = boolean
    renderTree('/', false, isTree)
}

setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($folders)
}, 1100);

export { showTree }

