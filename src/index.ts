import { BWFlexAPI } from "./interface/BWFlexAPI";
import { BWTestAPI } from "./interface/BWTestAPI";
import { BWIconAPI } from "./interface/BWIconAPI";
import { ILogicAPI } from "./interface/ILogicAPI";

export class CPPFBridgeAPI {
    public static getLogicManager(productId: number): ILogicAPI {
        console.log("test1", new Date().getTime());
        if (productId === 1) {
            return new BWFlexAPI();
        } else if (productId === 2) {
            return new BWIconAPI();
        }
        return new BWTestAPI();
    }
    public static getNRCSPacket(items: string[]): string[] {

        var result = new Array(items.length);
        for (var i = 0; i < items.length; i++) {
            console.log("assemble packet wtih ", items[i]);
            result[i] = Math.random().toString() + "#" + items[i];
        }
        return result;
    }
}