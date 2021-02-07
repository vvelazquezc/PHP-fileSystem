const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/file/rename.php'

function editFile(currentFile, newFileName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${currentFile}`

    return fetch(`${endpointUrl}?file=${folderAbsolutePath}&newFiler=${newFileName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { editFile }