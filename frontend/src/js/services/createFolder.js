const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/create.php'

function createFolder(folderName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${folderName}`

    return fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { createFolder }