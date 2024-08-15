import { ICPPFBridge } from "./ICPPFBridge";
import { ILogicAPI } from "./ILogicAPI";

export class BWFlexAPI implements ILogicAPI {
    getProperty():string{
        return "BWFlexAPI";
    }
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    getConfig():Promise<any>{
        try{
            var list = [1,2,3];
            return Promise.resolve(list);
        }catch(error:any){
            console.error(error);
        }
        return null;
    }
    setConfig: (config: any) => Promise<any>;

}