export const $wrapperRoot = {
    name: 'wrapperRoot',
    template: (path, extension) =>
    `<div class="folders-root">
        <img src="frontend/assets/img/${extension}.png" alt="folder-icon">
        <p class="text">${path}</p>
    </div>`
    ,
    render: function ($content, listOfResults) {
        listOfResults.forEach(path => {
            let extension = 'folder'
            if (path.includes('.')) {
                const path_splitted = path.split('.')
                extension = path_splitted.pop()
            }
            const html = this.template(path, extension)
            $content.innerHTML += html
            const elements = document.querySelectorAll('.text')
            console.log(elements);
        });
    }
}