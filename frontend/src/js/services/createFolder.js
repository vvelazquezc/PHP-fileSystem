import { $wrapperRoot } from "../components/folder.js"
import { renderFolder } from "./gettree.js";

const endpointUrl = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/create.php'

function createFolder(folderName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${folderName}`

<<<<<<< HEAD
    fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
=======
function creatFolder(folder) {
    dir = `http://localhost/LeyberProject/PHP-fileSystem/backend/folder/create.php?folder=${folder}`
    fetch(dir)
>>>>>>> modal
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
<<<<<<< HEAD
        .then(function({ isCreated }) {
            if (!isCreated) {
                throw new Error('folder exists')
            }
            renderFolder(parentAbsolutePath)
=======
        .then(function(response) {
            //$content.innerHTML = '';
            console.log(response)
            let listOfResults = response.replace('Array', ' ')
            console.log(listOfResults)
            listOfResults = JSON.parse(listOfResults)
            $wrapperRoot.render($content, listOfResults)
>>>>>>> modal
        })
        .catch(function(error) {
            console.warn(error.message)
        })
}

export { createFolder }