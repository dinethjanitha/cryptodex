import inquirer from 'inquirer';
import colors from 'colors';
import KeyManager from '../lib/KeyManager.js';

const key = {
    async set(){
        console.log("Hello from set from separate file");

        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type : 'input',
                name : 'key',
                message : 'Enter API key '.green + 'CoinMarketCap'
            }
        ]);

        const key = keyManager.setKey(input.key);

        if(key){
            console.log('API key set'.blue);
        }
    },
    show(){
        console.log("Hello from show from separate file");
    },
    remove(){
        console.log("Hello from remove from separate file");
    }
}


export default key;