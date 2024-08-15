import { ICPPFBridge } from "./ICPPFBridge";

export interface ILogicAPI{
    getConfig: () => Promise<any>;
    setConfig: (config: any) => Promise<any>;
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    getProperty:()=>string;
}