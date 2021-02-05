import { $wrapperRoot } from "././components/folder.js"
//requiring path and fs modules
const $elements = document.getElementsByClassName('folders-root')

setTimeout(function(){ console.log($elements) }, 1000);


const secondTreeRender = function(){
    const secondTree = document.querySelectorAll('.folders-path')[1]
    //selects me the text part of the object
    const relativeText = this.querySelector('.text').textContent
    console.log(relativeText)
    let relativeDir = `http://localhost/LeyberProject/PHP-fileSystem/root/${relativeText}`
    console.log(relativeDir)
    const dir = `http://localhost/LeyberProject/PHP-fileSystem/backend/folder/getSecondtree.php?subfolder=${relativeText}`
    //we put the address in the header
    const rootHeader = document.querySelector('.pathRoot')
    rootHeader.innerHTML=relativeDir
    
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

    const thirdTreeRender = () => {
        //const firstTree = document.querySelectorAll('.folders-path')[0]
        console.log(this)
        const firstTree = document.querySelectorAll('.folders-path')[0]
        //selects me the text part of the object
        const relativeText = this.querySelector('.text').textContent
        console.log(relativeText)
        let relativeDir = `http://localhost/LeyberProject/PHP-fileSystem/root/${relativeText}`
        console.log(relativeDir)
        const dir = `http://localhost/LeyberProject/PHP-fileSystem/backend/folder/getSecondtree.php?subfolder=${relativeText}`
        //we put the address in the header
        const rootHeader = document.querySelector('.pathRoot')
        rootHeader.innerHTML=relativeDir
        
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
                firstTree.innerHTML=""
                
                if (listOfResults.length)
                $wrapperRoot.render(firstTree, listOfResults)})
            }
        getRelativePath(dir)
    }
    function addEventListenerByClass2(list) {
        for(let i = 0; i < list.length; i++){

            list[i].addEventListener('click', function(){
                console.log(this)
            })
        }
    }
    const generatedTree = document.querySelectorAll('.folders-path')[1].children
    console.log(generatedTree)
    setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
        addEventListenerByClass2(generatedTree)
    
    }, 300);
    addEventListenerByClass2(generatedTree)

}



function addEventListenerByClass(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', secondTreeRender)
        
    }
}


//Here we add the second function


setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($elements)

}, 1200);
