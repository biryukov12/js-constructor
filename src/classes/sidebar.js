import {block} from "../utils";
import {TitleBlock, TextBlock} from "./bls";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text')
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock

        switch (type) {
            case 'title':
                newBlock = new TitleBlock(value, {styles})
                break
            case 'text':
                newBlock = new TextBlock(value, {styles})
                break
        }

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}