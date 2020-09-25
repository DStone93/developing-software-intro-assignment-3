import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";

export function WoodNeededInches(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "calc-wood-needed",

        // describe the command so that the --help flag is helpful
        "Calculate the number of studs required to stick frame a house for Gerald",

        // define the parameters we need for our command
        {
            
            Clientname: {
                type: "string",
                alias: "client",
                descrption: "If user does not exist, create one and store it, Firstandlast No spaces"
            },
            
            WidthInches: {
                type: "boolean",
                alias: "inw",
                description: "The walls width in inches",
            },

            LengthInches: {
                type: "boolean",
                alias: "inl",
                description: "The walls length in inches",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                name: string,
                client: string,
                WidthInches: boolean
                LengthInches: boolean;
                inchesw: boolean;
                innchesl: boolean;
            }>
        ) {
            const requirements = calculateHouseRequirements(
                args.Clientname,
                args.LengthInches,
                args.WidthInches,
            );

            console.log(requirements);
        }
    
    );
}

