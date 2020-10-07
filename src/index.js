import {model} from './model'
import './styles/styles.css'
import {Site} from "./classes/site";

const site = new Site('#site')

site.render(model)