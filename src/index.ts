import { clear } from "console";
import chalk from 'chalk';
import figlet from 'figlet';
import yargs from 'yargs';
import fs from 'fs';
import calculateCartItemPrice from './utils/calculateCartItemPrice';

clear();

// Print out the application name
console.log(
  chalk.yellow(
    figlet.textSync('Price-Calc', { horizontalLayout: 'full' })
  )
)

const processedContent = yargs.command(
  "$0 <cart file> [baseprice file]",
  "the default command",
  () => { },
  (content) => {
    const cartFileName = content.cartfile;
    const basepriceFileName = content.basepricefile
    if (!fs.existsSync(cartFileName as string)) {
      throw Error(`Unable to find ${cartFileName}`)
    }
    if (!fs.existsSync(basepriceFileName as string)) {
      throw Error(`Unable to find ${basepriceFileName}`)
    }
    return content;
  },
).argv

// Retrieve file data and filter out empty lines
const cartFileContent = fs.readFileSync(processedContent.cartfile as string).toString();
const cartInfo = JSON.parse(cartFileContent)

// Retrieve file data and filter out empty lines
const baseFileContent = fs.readFileSync(processedContent.basepricefile as string).toString();
const baseprices = JSON.parse(baseFileContent)

let sum = 0
// Calculate the final total price
cartInfo.map((cartItem: any) => {
  sum = sum + calculateCartItemPrice(cartItem, baseprices)
})

console.log(`${sum} \n`)