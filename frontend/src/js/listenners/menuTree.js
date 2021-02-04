

const $folders = document.getElementsByClassName('folder')

function openTree() {
    const relativeText = this.innerText
    const dir = `http://192.168.64.2/php/PHP-fileSystem/backend/folder/getSecondTree.php?subfolder=${relativeText}`
    console.log(relativeText);
        fetch(dir)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.text()
            }
            throw new Error(response.statusText)
            log
        }).then(function(response) {
            // const ret = response.replace(`${relativeText}`,'')

            // const listOfResults = JSON.parse(ret)
            // listOfResults.map(function(item){
            // })
            // secondTree.innerHTML = ''
            // $wrapperRoot.render(secondTree, listOfResults)
        })

}

function addEventListenerByClass(list) {
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', openTree)

    }
}

setTimeout(function(){ //se tiene que cambiar por un await Vero, no te molestes ;)
    addEventListenerByClass($folders)
}, 1100);

