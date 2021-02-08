const endpointUrl = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/read.php'
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