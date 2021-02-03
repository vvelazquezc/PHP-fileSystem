export const $wrapperInfo = {
    name: 'wrapperRoot',
    template: ({ access, modificated, change, size_bytes}) =>
    `<div class="cover">
            <img src="" alt="cover">
        </div>
        <h3>$path}</h3>
        <p class="text">$extension} document - ${size_bytes}KB</p>
        <div class="info">
            <h4>Information</h4>
            <p class="text">Creation: <span>${access}</span></p>
            <p class="text">Modification: <span>${modificated}</span></p>
            <p class="text">Last opening: <span>${change}</span></p>
        </div>`
    ,
    render: function ($content, listOfResults) {
        const html = this.template(listOfResults)
        $content.innerHTML += html

    }
}