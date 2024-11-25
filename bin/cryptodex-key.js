import key from "../commands/key.js";
import { Command } from "commander";

const program = new Command();

program
  .command("set")
  .description("Set API key -- Get at CoinMarketCup")
  .action(key.set);

program
  .command("show")
  .description("Show API key -- Get at CoinMarketCup")
  .action(key.show);
program
  .command("remove")
  .description("Remove API key -- Get at CoinMarketCup")
  .action(key.remove);

program.parse(process.argv);

