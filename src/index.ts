import { BWFlexAPI } from "./interface/BWFlexAPI";
import { BWTestAPI } from "./interface/BWTestAPI";
import { BWIconAPI } from "./interface/BWIconAPI";
import { ILogicAPI } from "./interface/ILogicAPI";

export class CPPFBridgeAPI{
    public static getLogicManager(productId:number):ILogicAPI{
        if(productId === 1){
            return new BWFlexAPI();
        }else if(productId === 2){
            return new BWIconAPI();
        }
        return new BWTestAPI();    
    }
}