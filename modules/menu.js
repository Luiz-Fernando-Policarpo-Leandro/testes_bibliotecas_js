import { objlodash } from './export_js_files.js'
import { puts, prompt } from './export_config.js';

//import api_arr_config from '../iniciar.js';

class Menu {
    constructor(api = true) {
        if (!(api)) {
            this.iniciar()
        }else{
            puts(api)
        }
    }

    iniciar(){
        puts("Ola! como posso ajudar?\n 0-exit\n 1-lodash")
        const x = prompt('$ - ')
        this.options_menu(Number(x))
    }

    options_menu(x){
        const class_select = options_class(x)

        

            function options_class(x){
                switch (x){
            
                    case 0:
                        return 0
                    case 1:
                        return objlodash
                    default:
                        puts("não valido")
                        //this.iniciar()
                
            }
        }
        
    }


    
}


export default Menu;