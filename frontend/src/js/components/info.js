export const $wrapperInfo = {
    name: 'wrapperRoot',
    template: ({ access, modificated, change, size_bytes, name_folder }, extension) =>
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
    render: function ($content, listOfResults, extension) {
        let typeExtension = ''
        if (!extension) {
            typeExtension = extension
        } else {
            typeExtension = 'folder'
        }
        const html = this.template(listOfResults, extension)
        $content.innerHTML += html

    }
}