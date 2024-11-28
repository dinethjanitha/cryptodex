import axios from "axios";
import colors from "colors";
class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl =
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";
  }

  async getPrice(coin, cur, mc) {
    if (coin && cur) {
      console.log(`${this.baseUrl}?symbol=${coin}&convert=${cur}`);
      try {
        const res = await axios.get(
          `${this.baseUrl}?symbol=${coin}&convert=${cur}`,
          {
            headers: {
              "X-CMC_PRO_API_KEY": this.apiKey,
            },
          }
        );

        const coinData = res.data.data[coin].find((el) => el.symbol === coin);

        if (coinData) {
          const coinPrice = coinData.quote[cur].price;
          const coinName = coinData.name;

          const output =
            `Coin` +
            ` ${coin}`.yellow +
            ` ${coinName} | Price ` +
            cur.green +
            ` ${coinPrice}`.blue;

          return output;
        } else {
          console.log("coin data not found.");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else if (mc) {
      try {
        const res = await axios.get(`${this.baseUrl}?symbol=${mc}`, {
          headers: {
            "X-CMC_PRO_API_KEY": this.apiKey,
          },
        });

        const coinData = res.data.data[mc].find((el) => el.symbol === mc);
        const marketcap =
          `${mc} `.yellow +
          `Total Market Cap is: ` +
          `USD `.green +
          `${coinData.quote["USD"].market_cap}`;
        return marketcap;
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const url =
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=3";
        const res = await axios.get(url, {
          headers: {
            "X-CMC_PRO_API_KEY": this.apiKey,
          },
        });

        const topCoins = res.data.data;

        let out = "";

        topCoins.forEach((el) => {
          //   console.log(el.name);
          out +=
            `Coin :` +
            el.symbol.green +
            ` ${el.name}`.blue +
            ` | Price: ` +
            `USD`.yellow +
            " " +
            el.quote["USD"].price +
            `\n`;
        });

        return out;
      } catch (err) {
        if (err.response.status === 401) {
          //   throw new Error("Your API is Invalild get new API key from CMC");
          return "Your API is Invalild get new API key from CMC".red;
        } else {
          return err.response.status.red;
        }
      }
      return "Coin and Currency not set";
    }
  }
}

const handleError = () => {};

export default CryptoAPI;
