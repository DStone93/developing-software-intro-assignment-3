import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";
import { recallClients } from "../wallCalculator/PreviousClient";

export function client(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "client",

        // describe the command so that the --help flag is helpful
        "Display previous clients lumber requirements",

        // define the parameters we need for our command
        {
            PreviousClients: {
                type: "string",
                alias: "client",
                description: "Display previous clients lumber requirements",
            },
        },
        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                PreviousClients: string;
                alias: string;
            }>
        ) {
            const requirements = recallClients(args.PreviousClients);

            console.log(requirements);
        }
    );
}
