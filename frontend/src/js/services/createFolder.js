import { $wrapperRoot } from "../components/folder.js"

let dir = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/create.php'

const $content = document.querySelector('.folders-path')

function creatFolder(folder) {
    dir = `http://localhost/LeyberProject/PHP-fileSystem/backend/folder/create.php?folder=${folder}`
    fetch(dir)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            //$content.innerHTML = '';
            console.log(response)
            let listOfResults = response.replace('Array', ' ')
            console.log(listOfResults)
            listOfResults = JSON.parse(listOfResults)
            $wrapperRoot.render($content, listOfResults)
        })
    }

    creatFolder(dir)

export { creatFolder }