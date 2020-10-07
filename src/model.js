import image from './assets/image.png'
import {TitleBlock, TextBlock, ColsBlock, ImageBlock} from "./classes/bls";

export const model = [
    new TitleBlock('Title', {
        tag: 'h2',
        styles: {
            color: '#f2f2f2',
            padding: '1rem',
            background: '#181818',
            'text-align': 'center'
        }
    }),

    new TextBlock('Some text', {
        styles: {
            padding: '1rem',
            display: 'flex',
            'font-size': '14pt',
            'margin-top': '1rem',
        }
    }),

    new ColsBlock(['one', 'two', 'three', 'four'], {
        styles: {
            padding: '1rem',
            display: 'flex',
            'justify-content': 'center'
        }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }
    })
]