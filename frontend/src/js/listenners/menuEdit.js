import { createFolder } from "../services/createFolder.js"

const $createButton = document.querySelector('#create')
const $editButton = document.querySelector('#edit')
const $removeButton = document.querySelector('#remove')

const $wrapperRoot = document.querySelector('.folders-path')

function onCreate() {
    const $div = document.createElement('div')
    $div.classList.add('folders-root')

    const $img = document.createElement('img')
    $img.setAttribute('src', 'frontend/assets/img/folder.png')
    $img.setAttribute('alt', 'folder-icon')

    const $input = document.createElement('input')
    $input.classList.add('new')
    $input.setAttribute('placeholder', 'Folder witout name')

    $div.appendChild($img)
    $div.appendChild($input)
    $wrapperRoot.append($div)
    $input.focus();

    $input.addEventListener('keyup', (e) => {
        var keycode = e.keyCode || e.which;
        if (keycode == 13) {
            const nameNewFolder = $input.value
            $div.remove()
            createFolder(nameNewFolder, '/')
        }
    })
}

$createButton.addEventListener('click', onCreate)

