
import { House } from "../house";
import { buildWall } from ".";
import { Houses } from "../house/houses";


Houses.setWallSuppliesCalculator((inches) => buildWall(inches));

export function recallClients(name: string) {
    const savedHouses = Houses.getAll();
    return savedHouses.get(name);
}
