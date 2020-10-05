import {row, col} from "./utils"

function title(block) {
    return row(col(`<h1>${block.value}</h1>`))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`))
}

function cols(block) {
    return row(block.value.map(col).join(''))
}

function image(block) {
    return row(`<img src="${block.value}">`)
}

export const templates = {
    title,
    text,
    cols,
    image
}