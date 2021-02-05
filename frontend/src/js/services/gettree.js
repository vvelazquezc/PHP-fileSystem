import { $wrapperRoot } from "../components/folder.js"

const dir = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/gettree.php'
const $content = document.querySelector('.folders-path')
console.log('hello')



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
    }

getAbsolutePath(dir)



