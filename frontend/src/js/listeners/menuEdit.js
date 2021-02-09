import { folderColumnComponent } from "../components/folder.js"
import { createFolder } from "../services/createFolder.js"
import { editFile } from "../services/editFile.js"
import { editFolder } from "../services/editFolder.js"
import { removeFile } from "../services/removeFile.js"
import { removeFolder } from "../services/removeFolder.js"

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
            $input.focus();
        } else {
            const paragraph = wrapper
            const $fileP = paragraph.lastChild.previousSibling
            paragraph.replaceChild($input, $fileP)
            $input.value = `.${extension}`
            $input.focus();
            $input.setSelectionRange(0, extension.length + 1);
        }
        $input.addEventListener('keyup', (e) => {
            const keycode = e.code;
            if (keycode === 'Enter') {
                const nameNew = $input.value
                wrapper.remove()

                let absolutePathParent = absolutePath.split('/')
                if (absolutePathParent[0] == '') {
                    absolutePathParent = '/'
                }

                if (type == 'folder') {
                    const isEditedFolder = editFolder(absolutePath, nameNew, absolutePathParent)
                    if (isEditedFolder) {
                        folderColumnComponent.renderOnLeft(absolutePathParent)
                    }
                } else {
                    const isEditedFile = editFile(absolutePath, nameNew)
                    if (isEditedFile) {
                        folderColumnComponent.renderOnLeft(absolutePathParent)
                    }
                }
            }
        })
    })
}

function onRemove(absolutePathParent, name, type){
    $removeButton.addEventListener('click', () => {

        if (type == 'folder') {
            const isRemoveFolder = removeFolder(absolutePathParent, name)
            if (isRemoveFolder) {
                folderColumnComponent.renderOnLeft(absolutePathParent)
            }
        } else {
            const isRemoveFile = removeFile(absolutePathParent, name)
            if (isRemoveFile) {
                folderColumnComponent.renderOnLeft(absolutePathParent)
            }
        }
    })
}

export { onEdit, onRemove, onCreate }


