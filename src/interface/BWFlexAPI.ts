import { ICPPFBridge } from "./ICPPFBridge";
import { ILogicAPI } from "./ILogicAPI";
export class BWFlexAPI implements ILogicAPI {
    getProperty():string{
        return "BWFlexAPI";
    }
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    getConfig():Promise<any>{
        try{
            let data = Buffer.from("hello world");
            var list = [1,2,3,data.length];
            return Promise.resolve(list);
        }catch(error:any){
            console.log('sfsdfsdff');
        }
        console.log('sfsdfsdff');
        return Promise.resolve(["error"]);
    }
    setConfig: (config: any) => Promise<any>;

}