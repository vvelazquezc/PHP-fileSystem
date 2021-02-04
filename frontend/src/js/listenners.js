import { $wrapperRoot } from "././components/folder.js"

//requiring path and fs modules
const $elements = document.getElementsByClassName('folders-root')

setTimeout(function(){ console.log($elements) }, 1000);
console.log($elements)

//const $clicked = $elements.find('.hover')

let hey = function(){
    let secondTree = document.querySelectorAll('.folders-path')[1]
    //selects me the text part of the object
    let relativeText = this.querySelector('.text').textContent
    console.log(relativeText)
    const relativeDir = `./root/${relativeText}`
    //secondTree.style.backgroundColor = 'red'
    console.log(relativeDir)
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
            console.log(response)
            console.log(typeof(response))
            const ret = response.replace(`${relativeText}`,'')

            const listOfResults = JSON.parse(ret)
            console.log(listOfResults)
            listOfResults.map(function(item){
               console.log(item)
                               
            })
            secondTree.innerHTML=""
            $wrapperRoot.render(secondTree, listOfResults)})
        }
    getRelativePath(dir)

}

function addEventListenerByClass(list) {
    for(let i = 0; i < list.length; i++){
        console.log(list[i])
        console.log(typeof(list[i]))
        list[i].addEventListener('click', hey)
        
    }
}

setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($elements)


}, 1100);

