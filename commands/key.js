import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";
import { isRequired } from "../utils/validations.js";

const key = {
  async set() {
    // console.log("Hello from set from separate file");

    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key ".green + "CoinMarketCap",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("API key set".blue);
    }
  },
  show() {
    // console.log("Hello from show from separate file");
    try {
      const keyManager = new KeyManager();
      console.log("Current API key: " + keyManager.getKey().yellow);
    } catch (error) {
      console.log(error.message.red);
    }
  },
  remove() {
    // console.log("Hello from remove from separate file");

    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey("apiKey");
      console.log("Key Removed!".blue);
    } catch (error) {
      console.log("Error.. \n" + error);
    }
  },
};

export default key;
