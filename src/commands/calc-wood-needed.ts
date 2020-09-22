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
            ClientsName:{
                type: "string",
                alias: "name",
                description: "Create a new save for the clients name"
            },
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house",
            },

            Widthinches:{
                type: "boolean",
                alias: "wunits",
                description: "The width inches portion"
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },

            lengthinches:{
                type: "boolean",
                alias: "lunits",
                description: "The length inches portion"
            },
        },    
        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                ClientsName: string;
                name: string;
                width: number;
                length: number;
                Widthinches: boolean;
                lengthinches: boolean;
                w: number;
                l: number;   
                wunits: boolean;
                lunits: boolean;
                
            }>
        ) {
            const requirements = calculateHouseRequirements(
                args.ClientsName,
                args.width,
                args.length,  
                args.lengthinches,
                args.Widthinches,
                
            );

            console.log(requirements);
        }
    );
}
