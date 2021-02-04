let dir = 'http://192.168.64.2/php/PHP-fileSystem/backend/folder/create.php'

const $content = document.querySelector('.folders-path')

function creatFolder(folder) {
    dir = `http://192.168.64.2/php/PHP-fileSystem/backend/folder/create.php?folder=${folder}`
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

    creatFolder(dir)

export { creatFolder }