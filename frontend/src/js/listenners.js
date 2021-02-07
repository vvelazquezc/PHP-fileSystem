import { $wrapperRoot } from "././components/folder.js"
//requiring path and fs modules
const $elements = document.getElementsByClassName('folders-root')

setTimeout(function(){ console.log($elements) }, 1000);


const secondTreeRender = function(){
    const secondTree = document.querySelectorAll('.folders-path')[1]
    //selects me the text part of the object
    const relativeText = this.querySelector('.text').textContent
    console.log(relativeText)
    const splitRelativeText = relativeText.split("")
    const fileFolderSeparator = splitRelativeText[splitRelativeText.length - 4]
    const mediaTypeIdentifier = splitRelativeText[splitRelativeText.length - 3] + splitRelativeText[splitRelativeText.length - 2] + splitRelativeText[splitRelativeText.length - 1] 
    //console.log(mediaTypeIdentifier)
    //The scope is globa to use it around

    var relativeDir = `http://localhost/LeyberProject/PHP-fileSystem/root/${relativeText}`
    console.log(relativeDir)
    const dir = `http://localhost/LeyberProject/PHP-fileSystem/backend/folder/getSecondtree.php?subfolder=${relativeText}`
    if (fileFolderSeparator != '.'){
        console.log('Im not a file, but a folder')

            
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
            console.log(listOfResults)
            listOfResults.map(function(item){
               console.log(item)
            })
            secondTree.innerHTML=""
            
            if (listOfResults.length)
            $wrapperRoot.render(secondTree, listOfResults)})
        }
    getRelativePath(dir)
// we define what the function does here
    function addEventListenerByClass2(list) {
        for(let i = 0; i < list.length; i++){
            list[i].addEventListener('click',thirdTreeRender)
            
        }
    }

    
    console.log(secondTree)
    const secondTreeItems = secondTree.children
    console.log(secondTreeItems)
    setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
        addEventListenerByClass2(secondTreeItems)
    },300);
    } else if(mediaTypeIdentifier === 'mp4' || mediaTypeIdentifier === 'mp3' || mediaTypeIdentifier === 'jpg' || mediaTypeIdentifier === 'png' ){
        //here we will put the action of the modal
        console.log(this.className)
        console.log(this.attributes)
        this.setAttribute("data-toggle", "modal");
        this.setAttribute("data-target", "#myModal");
        console.log(this.attributes)
        //Setting up the modal properties
        console.log(mediaTypeIdentifier)
        const modal = document.getElementsByClassName('modal-body').className = 'bodyOpen'
        console.log(modal.className)
        modal.style.backgroundImage = `url('"'${relativeDir}'"')`

    }

}

//here you have interaction with the second three items
const thirdTreeRender = function() {
    console.log(this.querySelector('.text').textContent)
    console.log(this)
    var modal = document.createElement("div");
    modal.classList.add("modal");




}

const mediaDisplayer = function(){
    
}

function addEventListenerByClass(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', secondTreeRender)
    }
}
//Here we add the second function
setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($elements)
}, 1100);
