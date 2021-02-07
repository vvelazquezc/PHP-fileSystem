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
    const relativeDir = `http://localhost/LeyberProject/PHP-fileSystem/root/${relativeText}`
    //secondTree.style.backgroundColor = 'red'
    console.log(relativeDir)
    const dir = `http://localhost/LeyberProject/PHP-fileSystem/backend/folder/listContent.php?subfolder=${relativeText}`

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

console.log(typeof($elements))

//function to add the the other folders




//


//getAbsolutePath(dir)

let testArray = []
console.log('hello')
//$files = scandir($dir);
//console.log($files)
//First we need to get the array of the content of the folder
//$elements.map(function(file){
    //file.addEventListener('click', function() {
       // console.log(this)
        //It will affect different parts
        //It will update the relative path

        //It will display the info in the .folders-info
       // const general= document.querySelector('.wrapper-roots:first-child')
        //if the element clicked is a file
            //It will update the info but not open the file or modify the the wrapper-root second child
        //If the element is a folder
            //it will update the info and update the wrapper-roots second child
            //addclass hover
    //})

    //file.addEventListener('dblclick', function() {
        //On double click will affect as follows
        //If it is a file
            //it will open the file
            //take out hover
            //
        //If it is a folder
            //It will make folder the one displayed on the first child of the wrapper-roots element
            //It will make the content of the folder displayed in the second child of the wrapper-roots div.
            //hover-folder
    //})

//})