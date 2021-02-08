import { $wrapperRoot } from "../components/folder.js"
import { renderFolder } from "./gettree.js";

const endpointUrl = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/create.php'

function createFolder(folderName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${folderName}`

    fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
        .then(function({ isCreated }) {
            if (!isCreated) {
                throw new Error('folder exists')
            }
            renderFolder(parentAbsolutePath)
        })
        .catch(function(error) {
            console.warn(error.message)
        })
}

export { createFolder }