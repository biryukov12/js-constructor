import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles} = this.options
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}

export class ColsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles} = this.options
        return row(this.value.map(col).join(''), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {styles} = this.options
        return row(`<img src="${this.value}">`, css(styles))
    }
}
