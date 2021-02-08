import { createElementFromHTML } from "../helpers/html.js";
import { listContent } from "../services/listContent.js";

export const folderTreeComponent = {
    createElement: (path) => {

        return createElementFromHTML(`
        <ul>
            <li><button class="folder folder-tree">${path}</button></li>
        </ul>
        `)
    },
    render: function (absolutePath) {

        return listContent(absolutePath)
            .then(items => {
                items.forEach(path => {
                    const $parent = document.querySelector('.folders-tree')
                    const isFolder = !path.includes('.')
                    if (isFolder) {
                        const $item = this.createElement(path)

                        // listenerClickTree($item)

                    $parent.appendChild($item)
                    }
                });
            })
    }
}