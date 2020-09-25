import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";

export function calcWoodNeeded(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "calc-wood-needed",

        // describe the command so that the --help flag is helpful
        "Calculate the number of studs required to stick frame a house for Gerald",

        // define the parameters we need for our command
        {
            clientsName: {
                type: "string",
                alias: "name",
                description: "Create a new save for the clients name",
            },

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

            inchesflag: {
                type: "boolean",
                alias: "inches",
                description: "The flag to toggle input as inches",
            },
                
        },
        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                clientsName: string;
                width: number;
                length: number;
                inchesflag: boolean;
                name: string;
                w: number;
                l: number;
                inches: boolean;
            }>
        ) {
            // WHY IS IT RETURNING NAN
            const requirements = calculateHouseRequirements(
                args.clientsName,
                args.width,
                args.length,
                args.inchesflag

            );

            console.log(requirements);
        }
    );
}
