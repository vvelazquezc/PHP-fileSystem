import { renderFolder } from "./gettree.js";

const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/file/rename.php'

function editFile(currentFile, newFileName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${currentFile}`

    fetch(`${endpointUrl}?file=${folderAbsolutePath}&newFiler=${newFileName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(function({ isEdited }) {
            if (!isEdited) {
                throw new Error('file exists')
            }
            // renderFolder(parentAbsolutePath)
        })
        .catch(function(error) {
            console.warn(error.message)
        })
}

export { editFile }