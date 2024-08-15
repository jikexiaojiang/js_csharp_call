import { ICPPFBridge } from "./ICPPFBridge";
import { ILogicAPI } from "./ILogicAPI";

export class BWTestAPI implements ILogicAPI {
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    getConfig():Promise<any>{
        try{
            var list = [4,5,6];
            return Promise.resolve(list);
        }catch(error:any){
            console.error(error);
        }
        return null;
    }
    getProperty():string{
        return "BWTestAPI";
    }
    setConfig: (config: any) => Promise<any>;

}