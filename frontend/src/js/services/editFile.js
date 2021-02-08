const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/file/rename.php'

function editFile(absolutePath, newFileName) {
    return fetch(`${endpointUrl}?file=${absolutePath}&newFile=${newFileName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { editFile }