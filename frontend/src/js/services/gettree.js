const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/getTree.php'

<<<<<<< HEAD
const endpointUrl = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/gettree.php'
const $content = document.querySelector('.folders-path')
const $folders = document.querySelector('.folders-tree')
const $secondTree = document.querySelectorAll('.folders-path')[1]

function renderFolder(folderAbsolutePath, secondWrapper = false, treeMenu = false) {
    fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
=======
function getTree(folderAbsolutePath) {
    return fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
>>>>>>> 9fd18439a41dd783ce5d668543bc232d27c184ee
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { getTree }