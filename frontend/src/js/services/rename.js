

const dir = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/rename.php'
const $content = document.querySelector('.folders-path')

function renameFolder(dir) {

    fetch(dir)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
        })
        .then(function(response) {
            console.log(response);
            // const listOfResults = JSON.parse(response)
            // $wrapperInfo.render($content, listOfResults)
        })
    }

    renameFolder(dir)

export { renameFolder }