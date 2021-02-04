import { $wrapperRoot } from "../components/folder.js"

const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/gettree.php'
const $content = document.querySelector('.folders-path')

function renderFolder(folderAbsolutePath) {
    fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            $content.innerHTML = ''
            const listOfResults = JSON.parse(response)
            $wrapperRoot.render($content, listOfResults)
        })
}

renderFolder('/')

export { renderFolder }