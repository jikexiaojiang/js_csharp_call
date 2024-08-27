import { ICPPFBridge } from "./ICPPFBridge";
import { ILogicAPI } from "./ILogicAPI";

export class BWIconAPI implements ILogicAPI {
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    getConfig():Promise<any>{
        try{
            let data = Buffer.from("hello js");
            var list = [1,2,3,data.length];
            return Promise.resolve(list);
        }catch(error:any){
            // console.error(error);
        }
        return null;
    }
    getProperty():string{
        return "BWIconAPI";
    }
    setConfig: (config: any) => Promise<any>;

}