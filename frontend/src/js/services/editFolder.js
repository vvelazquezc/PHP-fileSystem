const endpointUrl = 'http://localhost/LeyberProject/PHP-fileSystem/backend/folder/rename.php'

function editFolder(currentFolder, folderName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${currentFolder}`

    return fetch(`${endpointUrl}?folder=${folderAbsolutePath}&newFolder=${folderName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { editFolder }