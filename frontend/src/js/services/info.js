const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/read.php'
const $content = document.querySelector('.folders-info')

function getInfoFolder(folder) {
    console.log('getInfoFolder', folder)
    return fetch(`${endpointUrl}?folder=${folder}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}


export { getInfoFolder }