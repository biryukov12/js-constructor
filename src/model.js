import {TitleBlock, TextBlock, HrBlock} from "./classes/bls";

const text = 'A simple site constructor on pure JavaScript. ' +
    'Now you can to add some title/text and their styles.'

export const model = [
    new TitleBlock('A pure JS site constructor', {
        tag: 'h1',
        styles: {
            color: '#f2f2f2',
            padding: '1rem',
            background: '#181818',
            'text-align': 'center'
        }
    }),

    new TextBlock(text, {
        styles: {
            padding: '1rem',
            display: 'flex',
            'font-size': '14pt',
            'margin-top': '1rem',
            'text-align': 'center'
        }
    }),

    new HrBlock(`<hr class="hr-shelf">`, {
        styles: {

        }
    })
]