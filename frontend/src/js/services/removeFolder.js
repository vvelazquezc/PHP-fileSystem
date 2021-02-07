import { renderFolder } from "./gettree.js";

const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/delete.php'

function removeFolder(parentAbsolutePath, folderName) {
    const folderAbsolutePath = `${parentAbsolutePath}/${folderName}`

    fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(function({ isRemove }) {
            if (!isRemove) {
                throw new Error('folder exists')
            }
            renderFolder(parentAbsolutePath)
        })
        .catch(function(error) {
            console.warn(error.message)
        })
}

export { removeFolder }