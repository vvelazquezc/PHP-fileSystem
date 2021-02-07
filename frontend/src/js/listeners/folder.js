import { folderColumnComponent } from "../components/folder.js";
import { infoComponent } from "../components/info.js";
import { getInfoFolder } from "../services/info.js";
import { listContent } from "../services/listContent.js";
import { onEdit, onRemove } from "./menuEdit.js";

function listenerClickFolder($folder) {
    $folder.addEventListener('click', (e) => {
        e.stopPropagation()

        const $everyFolder = document.querySelectorAll('.folders-root')
        $everyFolder.forEach($f => $f.classList.remove('hover'))

        $folder.classList.add('hover')
        const nameFolder = $folder.textContent.trim()
        const type = 'folder'

        infoComponent.render(`${folderColumnComponent.absolutePath}${nameFolder}`)

        onEdit($folder, nameFolder, type, '')
        onRemove($folder, nameFolder)
    })
}

function listenerDblClickFolder($folder) {
    $folder.addEventListener('dblclick', (e) => {
        e.stopPropagation()
        const nameFolder = `${$folder.textContent.trim()}`
        folderColumnComponent.renderOnRight(nameFolder)
    })
}

export { listenerClickFolder, listenerDblClickFolder }
