import { buildWall } from "./wallCalculator/index"
import { Houses } from "./house/houses"
import { House } from "./house";

export function recallClients(client: string) {
    Houses.setWallSuppliesCalculator((inches) => buildWall(inches));
    const savedHouses = Houses.getAll();
    let ClientSave = [ ...savedHouses.values()];
    let ClientTotalLumber = ClientSave.find((element: any) => element.name === client);
    return ClientTotalLumber;
    
}

//Doug definitely helped me here! Thanks @ doug!

