const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/listContent.php'

function listContent(folderAbsolutePath) {
    return fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { listContent }