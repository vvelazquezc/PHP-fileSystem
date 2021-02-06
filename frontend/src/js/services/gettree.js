import { $wrapperRoot } from "../components/folder.js"

const dir = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/gettree.php'
const $content = document.querySelector('.folders-path')

function getAbsolutePath(dir) {
    fetch(dir, {
        method: 'get',
        // may be some code of fetching comes here
    }).then(function(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text()
        }
        throw new Error(response.statusText)
    }).then(function(response) {
        const listOfResults = JSON.parse(response)
        listOfResults.map(function(item){
           // console.log(item)
            
        })
        $wrapperRoot.render($content, listOfResults)})
    // .then(
    //     function listenerHelper(className, event, fn) {
    //         let list = document.getElementsByClassName(className)
    //         for(let i = 0; i < list.length; i++){
    //             list[i].addEventListener(event, fn)
    //         }
    //     },

    //     listenerHelper('text', 'click' , function() {
    //         console.log('I was clicked')
    //     })
        
        
    //     )
    }

getAbsolutePath(dir)
export { getAbsolutePath }