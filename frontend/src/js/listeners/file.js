import { folderColumnComponent } from "../components/folder.js";
import { infoComponent } from "../components/info.js";
import { onEdit, onRemove } from "./menuEdit.js";


import { openModal } from "./modal.js";

function listenerClickFile($file) {
    $file.addEventListener('click', function(e){
        e.stopPropagation()

        const $everyFolder = document.querySelectorAll('.folders-root')
        $everyFolder.forEach($f => $f.classList.remove('hover'))

        $file.classList.add('hover')

        const nameFile = $file.textContent.trim()

        const name_splitted = nameFile.split('.')
        const extension = name_splitted.pop()
        const type = 'file'

        infoComponent.render(`${folderColumnComponent.absolutePath}${nameFile}`)

        onEdit($file, `${folderColumnComponent.absolutePath}${nameFile}`, nameFile, type, extension)
        onRemove(`${folderColumnComponent.absolutePath}`, nameFile, type)
        openModal(nameFile, extension, `${folderColumnComponent.absolutePath}`, this)
    })
}

function listenerdblClickFile($file) {
    $file.addEventListener('click', function(e){

        const nameFile = $file.textContent.trim()
        const name_splitted = nameFile.split('.')
        const extension = name_splitted.pop()
        // openModal(nameFile, extension, `${folderColumnComponent.absolutePath}`, this)
    })
}

export { listenerClickFile, listenerdblClickFile }
