import { ICPPFBridge } from "./ICPPFBridge";
import { ILogicAPI } from "./ILogicAPI";

export class BWTestAPI implements ILogicAPI {
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    getConfig():Promise<any>{
        try{
            let data = Buffer.from("hello test");
            var list = [1,2,3,data.length];
            return Promise.resolve(list);
        }catch(error:any){
            // console.error(error);
        }
        return null;
    }
    getProperty():string{
        return "BWTestAPI";
    }
    setConfig: (config: any) => Promise<any>;

}