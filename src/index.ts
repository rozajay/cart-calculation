import { clear } from "console";

import chalk from 'chalk';
import figlet from 'figlet';

clear();

// Log out the application name
console.log(
  chalk.yellow(
    figlet.textSync('Price-Calc', { horizontalLayout: 'full' })
  )
)
