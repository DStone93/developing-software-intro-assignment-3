import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";
import { recallClients } from "../previousclients";
export function client(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // name the command with no spaces
        "client",

        // describe the command so that the --help flag is helpful
        "Display previous clients lumber requirements",

        // You can use PreviousClients as an argument or the alias "clientname"
        {
            PreviousClients: {
                type: "string",
                alias: "clientname",
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
