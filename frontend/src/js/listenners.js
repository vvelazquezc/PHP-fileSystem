import { $wrapperRoot } from "././components/folder.js"

//requiring path and fs modules
const $elements = document.getElementsByClassName('folders-root')

let hey = function(){
    let secondTree = document.querySelectorAll('.folders-path')[1]
    //selects me the text part of the object
    let relativeText = this.querySelector('.text').textContent

    const dir = `./backend/folder/getSecondTree.php?subfolder=${relativeText}`

    function getRelativePath(dir) {
        fetch(dir, {
            method: 'get',
            // may be some code of fetching comes here
        }).then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        }).then(function(response) {
            const ret = response.replace(`${relativeText}`,'')

            const listOfResults = JSON.parse(ret)
            secondTree.innerHTML=""
            $wrapperRoot.render(secondTree, listOfResults)})
        }
    getRelativePath(dir)

}

function addEventListenerByClass(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', hey)
    }
}

setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($elements)
}, 1100);
