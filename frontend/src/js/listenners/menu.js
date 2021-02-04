import { creatFolder } from "../services/createFolder.js"

const $createButton = document.querySelector('#create')
const $editButton = document.querySelector('#edit')
const $removeButton = document.querySelector('#remove')

const $wrapperRoot = document.querySelector('.folders-path')

const div = document.createElement('div')
    div.classList.add('folders-root')

const img = document.createElement('img')
    img.setAttribute('src', 'frontend/assets/img/folder.png')
    img.setAttribute('alt', 'folder-icon')

const input = document.createElement('input')
    input.classList.add('new')
    input.setAttribute('placeholder', 'Folder witout name')

div.appendChild(img)
div.appendChild(input)

$createButton.addEventListener('click', () => {
    $wrapperRoot.append(div)
})

input.addEventListener('keyup', (e) => {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
        const nameNewFolder = input.value
        creatFolder(nameNewFolder)
    }
})