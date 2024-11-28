import { Command } from "commander";
import check from "../commands/check.js";

const program = new Command();

program
  .command("price")
  .description("Check Market Price of Coins")
  .option("--coin <type>", "Add specific coin types in CSV format")
  .option("--cur <currency>", "Change the currency")
  .option("--mc <marketcap>", "Check Market Cap")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
