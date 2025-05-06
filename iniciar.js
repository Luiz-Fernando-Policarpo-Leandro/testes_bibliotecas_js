import {menu, print_console} from './modules/export_config.js';

let _api_verify = false;


    if (process.argv[2]) {
        try {
            const parsedArg = JSON.parse(process.argv[2]);
            if (Array.isArray(parsedArg) && parsedArg.length > 0) {
                _api_verify = converToBool(parsedArg[0]);
            } else {
                _api_verify = converToBool(process.argv[2]);
            }
        } catch (jsonError) {
            console.log("Erro ao analisar JSON:", jsonError.message);
        }
    }


function converToBool(val){
    return (String(val).toLocaleLowerCase() == "true" || val == '1') ? true : false;
}

export const api_config = converToBool(_api_verify);

export default api_config;



const printConsole = new print_console(api_config);

export const puts = printConsole.puts.bind(printConsole)


const _menu = new menu(api_config);

