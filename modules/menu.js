import { objlodash } from './export_js_files.js'
import { puts, prompt } from './export_config.js';

//import api_arr_config from '../iniciar.js';

class Menu {
    constructor(api = true) {
        if (!(api)) {
            this.options = []
            this.principalMenu()
        }else{
            puts(api)
        }
    }

    principalMenu(){
        while (true) {
            puts("Ola! como posso ajudar?\n 0-exit\n 1-lodash")
            const chose = prompt('$ - ')
            
            if (chose === '0'){
                puts('saindo do programa')
                break
            }

            const objClass = this.choseClass(Number(chose))
            
            if (objClass) {
                this.options = objClass.options_class()
                puts(this.options)
            }

        }
        
    }

    choseClass(x){
        const arr_classes_existents = {
            0: null,
            1: objlodash
        }

        const obj = arr_classes_existents[x]

        return (obj && obj.constructor?.name !== 'Object') ? obj : null;

    }


    
}


export default Menu;