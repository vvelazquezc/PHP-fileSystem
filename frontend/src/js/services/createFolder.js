const endpointUrl = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/create.php'

function createFolder(folderName, parentAbsolutePath) {
    const folderAbsolutePath = `${parentAbsolutePath}/${folderName}`

<<<<<<< HEAD
    fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
=======
    return fetch(`${endpointUrl}?folder=${folderAbsolutePath}`)
>>>>>>> 9fd18439a41dd783ce5d668543bc232d27c184ee
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText)
        })
<<<<<<< HEAD
        .then(function({ isCreated }) {
            if (!isCreated) {
                throw new Error('folder exists')
            }
            renderFolder(parentAbsolutePath)
        })
        .catch(function(error) {
            console.warn(error.message)
        })
=======
>>>>>>> 9fd18439a41dd783ce5d668543bc232d27c184ee
}

export { createFolder }