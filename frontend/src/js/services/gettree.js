import { $wrapperRoot } from "../components/folder.js"
import { $wrapperTree } from "../components/tree.js"

const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/gettree.php'
const $content = document.querySelector('.folders-path')
const $folders = document.querySelector('.folders-tree')
const $secondTree = document.querySelectorAll('.folders-path')[1]

function renderFolder(folderAbsolutePath, secondWrapper = false, treeMenu = false) {
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
            if(!treeMenu && !secondWrapper) {
                $wrapperRoot.render($content, listOfResults)
            } else if (!treeMenu && secondWrapper) {
                $wrapperRoot.render($secondTree, listOfResults)
            } else {
                $wrapperTree.render($folders, listOfResults)
                $wrapperRoot.render($content, listOfResults)
            }
        })
}

renderFolder('/', false)

export { renderFolder }