import { getInfoFolder } from "../services/info.js"

export const infoComponent = {
    template: ({ access, modificated, change, size_bytes, name_folder, extension = 'folder' }) =>
    `<div class="cover">
            <img src="frontend/assets/img/${extension}.png" alt="cover">
        </div>
        <h3>${name_folder}</h3>
        <p class="text">${extension} document - ${size_bytes}KB</p>
        <div class="info">
            <h4>Information</h4>
            <p class="text">Creation: <span>${access}</span></p>
            <p class="text">Modification: <span>${modificated}</span></p>
            <p class="text">Last opening: <span>${change}</span></p>
        </div>`
    ,
    render: function (absolutePath) {
        const $content = document.querySelector('.folders-info')

        console.log('absolutePath', absolutePath)

        return getInfoFolder(absolutePath).then(file => {
            console.log('file', file)
            const html = this.template(file)
            $content.innerHTML += html
        })
    }
}