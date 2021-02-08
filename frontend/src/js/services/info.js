<<<<<<< HEAD
import { $wrapperInfo } from "../components/info.js"

const dir = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/read.php'
=======
const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/read.php'
>>>>>>> 9fd18439a41dd783ce5d668543bc232d27c184ee
const $content = document.querySelector('.folders-info')

function getInfoFolder(folder) {
    return fetch(`${endpointUrl}?folder=${folder}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}


export { getInfoFolder }