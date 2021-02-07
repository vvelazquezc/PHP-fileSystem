import { createElementFromHTML } from "../helpers/html.js";
import { listenerClickFolder, listenerDblClickFolder } from "../listeners/folder.js";
import { listContent } from "../services/listContent.js";

export const folderColumnComponent = {
    state: {
        leftAbsolutePath: null,
        rightAbsolutePath: null,
    },
    get absolutePath() {
        const { leftAbsolutePath, rightAbsolutePath } = this.state

        let absolutePath = rightAbsolutePath || leftAbsolutePath || '/'

        return absolutePath.replace('\/\/', '\/')
    },
    createElement: (path) => {
        const isFolder = !path.includes('.')
        const extension = !isFolder ? path.split('.').pop() : 'folder'

        return createElementFromHTML(`
            <div class="folders-root">
                <img src="frontend/assets/img/${extension}.png" alt="folder-icon">
                <p class="text ${isFolder || 'file'}">${path}</p>
            </div>
        `)
    },
    render: function ($parent, absolutePath) {
        $parent.innerHTML = 'Loading...'

        return listContent(absolutePath)
            .then(items => {
                $parent.innerHTML = ''

                items.forEach(path => {
                    const isFolder = !path.includes('.')

                    const $item = this.createElement(path)

                    if (isFolder) {
                        listenerClickFolder($item)
                        listenerDblClickFolder($item)
                    }

                    $parent.appendChild($item)
                });
            })
    },
    renderOnLeft: function (absolutePath) {
        const $folderColumnLeft = document.querySelector('.folders-path--left')
        this.state.leftAbsolutePath = absolutePath
        return this.render($folderColumnLeft, absolutePath)
    },
    renderOnRight: function (folderName) {
        const $folderColumnRight = document.querySelector('.folders-path--right')

        if (this.state.rightAbsolutePath) {
            this.renderOnLeft(this.state.rightAbsolutePath)
        }

        this.state.rightAbsolutePath = `${this.state.rightAbsolutePath || ''}/${folderName}`
        return this.render($folderColumnRight, this.state.rightAbsolutePath)
    },
}
