import { folderColumnComponent } from "../components/folder.js"
import { createFolder } from "../services/createFolder.js"
import { editFile } from "../services/editFile.js"
import { editFolder } from "../services/editFolder.js"
import { removeFolder } from "../services/removeFolder.js"

const $editButton = document.querySelector('#edit')
const $removeButton = document.querySelector('#remove')
const $wrapperRoot = document.querySelector('.folders-path')

function onCreate() {

    console.log('llego');

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
            const isCreated = createFolder(nameNewFolder, '/')
            if (isCreated) {
                $wrapperRoot.innerHTML = ''
                folderColumnComponent.renderOnLeft('/')
            }
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
                    editFile(absolutePath, nameNewFile, absolutePathParent)
                    folderColumnComponent.renderOnLeft(absolutePathParent)
                }
            }
        })
    })
}

function onRemove(absolutePathParent, name){
    $removeButton.addEventListener('click', () => {
        console.log(absolutePathParent, '<br>', name);
        const isRemove = removeFolder(absolutePathParent, name)
        if (isRemove) {
            console.log('carpeta eliminada');
            folderColumnComponent.renderOnLeft(absolutePathParent)
        }
    })
}

export { onEdit, onRemove, onCreate }


