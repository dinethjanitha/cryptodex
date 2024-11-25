#!/usr/bin/env node

import { Command } from 'commander';
import pkg from '../package.json' assert { type: "json" };

const program = new Command();

// console.log("Hello from crypto dddex");

program
    .version(pkg.version)
    .command('key' , "Manage API key -- CoinMarketCap")
    .parse(process.argv);

program
    .command('set')
    .description("Set API key -- Get at CoinMarketCup")
    .action(() => console.log( "Hello From Set" ))

console.log(process.argv);


