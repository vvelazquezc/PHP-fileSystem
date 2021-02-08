import { $wrapperInfo } from "../components/info.js"

const dir = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/read.php'
const $content = document.querySelector('.folders-info')

function getInfoFolder(folder) {

    fetch(`${endpointUrl}?folder=${folder}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            $content.innerHTML = ''
            const listOfResults = JSON.parse(response)
            $wrapperInfo.render($content, listOfResults)
        })
}


export { getInfoFolder }