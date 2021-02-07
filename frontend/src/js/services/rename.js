const dir = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/rename.php'

function renameFolder(dir) {
    return fetch(dir)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { renameFolder }