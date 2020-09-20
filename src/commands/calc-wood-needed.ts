import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";
import yargs = require("yargs");

export function calcWoodNeeded(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "calc-wood-needed",

        // describe the command so that the --help flag is helpful
        "Calculate the number of studs required to stick frame a house for Gerald",

        // define the parameters we need for our command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house",
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },

            LengthInches: {
                type: "boolean",
                alias: "linches",
                description: "The inches portion of the Walls length",
            },
            WidthInches: {
                type: "boolean",
                alias: "winches",
                description: "The inches portion of the Walls width",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                width: number;
                length: number;
                w: number;
                l: number;
                WidthInches: boolean;
                LengthInches: boolean;
                winches: boolean;
                linches: boolean;
            }>
        ) {
            const requirements = calculateHouseRequirements(
                args.width,
                args.length,
                args.LengthInches,
                args.WidthInches
            );

            console.log(requirements);
        }
    );
}
