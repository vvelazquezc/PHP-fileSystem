import { renderFolder } from "./gettree.js";

const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/rename.php'

function editFolder(currentFolder, folderName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${currentFolder}`

    fetch(`${endpointUrl}?folder=${folderAbsolutePath}&newFolder=${folderName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(function({ isEdited }) {
            if (!isEdited) {
                throw new Error('folder exists')
            }
            renderFolder(parentAbsolutePath)
        })
        .catch(function(error) {
            console.warn(error.message)
        })
}

export { editFolder }