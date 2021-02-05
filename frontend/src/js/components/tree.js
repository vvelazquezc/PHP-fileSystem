export const $wrapperTree = {
    name: 'wrapperTree',
    template: (path) =>
    `<ul>
        <li><button class="folder">${path}</button></li>
    </ul>`
    ,
    render: function ($content, listOfResults) {
        listOfResults.forEach(path => {
            let extension = 'folder'
            if (path.includes('.')) {
                const path_splitted = path.split('.')
                extension = path_splitted.pop()
            }
            const html = this.template(path)
            $content.innerHTML += html
        })

    }
}