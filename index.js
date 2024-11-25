import configstore from 'configstore';
import pkg from './package.json' assert { type: "json" };

// const packageJson = JSON.parse(fs.readFileSync('../package.json' , 'utf-8'))


class KeyManager {
    constructor() {
        this.conf = new configstore(pkg.name)  
    }

    setKey(key){
        this.conf.set('apiKey' , key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error("No API key found! get API key at CoinMarketCap");
        }

        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error("No API key found! get API key at CoinMarketCap");
        }

        this.conf.delete('apiKey');
        
        return;
    }
}

export default KeyManager;