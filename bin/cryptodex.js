#!/usr/bin/env node

import { Command } from "commander";
import pkg from "../package.json" assert { type: "json" };

const program = new Command();

// console.log("Hello from crypto dddex");

program
  .version(pkg.version)
  .command("key", "Manage API key -- CoinMarketCap")
  .command("check", "Check Coin price")
  .parse(process.argv);

// console.log(process.argv);
