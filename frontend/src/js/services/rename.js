const dir = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/rename.php'

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