import CryptoAPI from "../lib/cryptoAPI.js";
import KeyManager from "../lib/KeyManager.js";

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const cryptoAPI = new CryptoAPI(keyManager.getKey());
      // console.log(cmd.mc);
      const priceOutputData = await cryptoAPI.getPrice(
        cmd.coin,
        cmd.cur,
        cmd.mc
      );
      console.log(priceOutputData);
    } catch (err) {
      console.log(err);
    }
  },
};

export default check;
