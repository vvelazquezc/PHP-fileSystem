function createElementFromHTML(htmlString, tagName = 'div') {
    const div = document.createElement(tagName)
    div.innerHTML = htmlString.trim()
    return div.firstChild 
}

export { createElementFromHTML }