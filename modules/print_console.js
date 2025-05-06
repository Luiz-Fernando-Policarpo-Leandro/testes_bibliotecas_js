// Print_console.js
import {api_config} from '../iniciar.js'

export default class Print_console {
    constructor() {
        this.apiConfig = api_config
    }

    puts(...p) {
            if (!(this.apiConfig)){
                console.log( ...p, "\n");
            }
    }
}


