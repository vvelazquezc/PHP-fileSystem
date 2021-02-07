import { folderColumnComponent } from "../components/folder.js";
import { infoComponent } from "../components/info.js";

import { onEdit, onRemove } from "./menuEdit.js";

function listenerClickFile($file) {
    $file.addEventListener('click', (e) => {
        e.stopPropagation()
        $file.parentNode.classList.add('hover')
        const nameFile = $file.textContent.trim()
        const name_splitted = nameFile.split('.')
        const extension = name_splitted.pop()
        const type = 'file'

        infoComponent.render(`${folderColumnComponent.absolutePath}/${nameFile}`)
        onEdit($file, nameFile, type, extension);
        // onRemove($file, nameFolder);
    })
}

export { listenerClickFile }
