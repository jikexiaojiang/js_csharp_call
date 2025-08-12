import { ICPPFBridge } from "./ICPPFBridge";

export interface ILogicAPI {
    getConfig: (num: number) => Promise<any>;
    setConfig: (config: any) => Promise<any>;
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    onResponse: (response: string) => void;
    getProperty: () => string;
}
