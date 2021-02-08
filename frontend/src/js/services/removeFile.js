const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/file/delete.php'

function removeFile(parentAbsolutePath, fileName) {

    const fileAbsolutePath = `${parentAbsolutePath}${fileName}`
    return fetch(`${endpointUrl}?file=/${fileName}`)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
}

export { removeFile }