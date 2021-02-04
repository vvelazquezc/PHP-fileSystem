import { $wrapperRoot } from "../components/folder.js"

let dir = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/create.php'

const $content = document.querySelector('.folders-path')

function creatFolder(folder) {
    dir = `http://192.168.64.2/php/PHP-fileSystem/backend/folder/create.php?folder=${folder}`
    fetch(dir)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            $content.innerHTML = '';
            const listOfResults = JSON.parse(response)
            $wrapperRoot.render($content, listOfResults)
        })
    }

    creatFolder(dir)

export { creatFolder }