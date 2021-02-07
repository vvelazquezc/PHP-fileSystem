export const $wrapperRoot = {
    name: 'wrapperRoot',
    template: (path, extension, classFile) =>
    `<div class="folders-root">
        <img src="frontend/assets/img/${extension}.png" alt="folder-icon">
        <p class="text ${classFile}">${path}</p>
    </div>`
    ,
    render: function ($content, listOfResults) {
        listOfResults.forEach(path => {
            let extension = 'folder'
            let classFile = ''
            if (path.includes('.')) {
                const path_splitted = path.split('.')
                extension = path_splitted.pop()
                classFile = 'file'
            }
            const html = this.template(path, extension, classFile)
            $content.innerHTML += html
        });
    }
}