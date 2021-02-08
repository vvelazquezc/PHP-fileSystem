const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/delete.php'

function removeFolder(parentAbsolutePath, folderName) {

    const folderAbsolutePath = `${parentAbsolutePath}${folderName}`
    return fetch(`${endpointUrl}?folder=/${folderName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { removeFolder }