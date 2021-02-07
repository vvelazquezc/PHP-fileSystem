import { folderColumnComponent } from "../components/folder.js"
import { createFolder } from "../services/createFolder.js"
import { editFile } from "../services/editFile.js"
import { editFolder } from "../services/editFolder.js"
import { removeFolder } from "../services/removeFolder.js"

const $createButton = document.querySelector('#create')
const $editButton = document.querySelector('#edit')
const $removeButton = document.querySelector('#remove')
const $wrapperRoot = document.querySelector('.folders-path')

function onCreate(folder) {
    let placeholder = null
    if (!folder) {
        placeholder = 'Folder witout name'
    } else {
        placeholder = folder
    }
    const $div = document.createElement('div')
    $div.classList.add('folders-root')

    const $img = document.createElement('img')
    $img.setAttribute('src', 'frontend/assets/img/folder.png')
    $img.setAttribute('alt', 'folder-icon')

    const $input = document.createElement('input')
    $input.classList.add('new')
    $input.setAttribute('placeholder', placeholder)

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

function onEdit(wrapper, absolutePath, name, type, extension) {

    $editButton.addEventListener('click', () => {

        wrapper.classList.remove('hover')
        const $input = document.createElement('input')
        $input.classList.add('new')
        $input.setAttribute('placeholder', name)

        if (type == 'folder') {
            const $folderP = wrapper.lastChild.previousSibling
            wrapper.replaceChild($input, $folderP)
        } else if (type == 'file') {
            const paragraph = wrapper
            const paragraphParent = paragraph.parentNode
            paragraphParent.classList.remove('hover')
            const $fileP = paragraphParent.lastChild.previousSibling
            paragraphParent.replaceChild($input, $fileP)
        }
        $input.focus();

        $input.addEventListener('keyup', (e) => {
            const keycode = e.code;
            if (keycode === 'Enter') {
                const nameNew = $input.value
                wrapper.remove()
                if (type == 'folder') {
                    let absolutePathParent = absolutePath.split('/')
                    if (absolutePathParent[0] == '') {
                        absolutePathParent = ''
                    }
                    const isEdited = editFolder(absolutePath, nameNew, absolutePathParent)
                    if (isEdited) {
                        folderColumnComponent.renderOnLeft(absolutePathParent)
                    }
                } else if (type == 'file') {
                    const nameNewFile = `${nameNew}.${extension}`
                    editFile(absolutePath, nameNewFile, '')
                }
            }
        })
    })
}

function onRemove(wrapper, folder){
    $removeButton.addEventListener('click', () => {
        removeFolder('', folder)
    })
}

$createButton.addEventListener('click', onCreate)
export { onEdit, onRemove }


