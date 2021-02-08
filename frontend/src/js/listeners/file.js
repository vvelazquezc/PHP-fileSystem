import { folderColumnComponent } from "../components/folder.js";
import { infoComponent } from "../components/info.js";

import { onEdit, onRemove } from "./menuEdit.js";
import { openModal } from "./modal.js";

function listenerClickFile($file) {
    $file.addEventListener('click', (e) => {
        e.stopPropagation()

        const $everyFolder = document.querySelectorAll('.folders-root')
        $everyFolder.forEach($f => $f.classList.remove('hover'))

        $file.classList.add('hover')

        const nameFile = $file.textContent.trim()
        console.log(nameFile);

        const name_splitted = nameFile.split('.')
        const extension = name_splitted.pop()
        const type = 'file'

        infoComponent.render(`${folderColumnComponent.absolutePath}${nameFile}`)
        onEdit($file, nameFile, type, extension);
        openModal(nameFile, extension)
    //     // onRemove($file, nameFolder);
    })
}

export { listenerClickFile }
