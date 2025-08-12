import { BaseUtil } from "./BaseUtil";
import { ICPPFBridge } from "./ICPPFBridge";
import { ILogicAPI } from "./ILogicAPI";

export abstract class BaseLogicAPI implements ILogicAPI {
    abstract getConfig(num: number): Promise<any>;
    abstract setConfig(config: any): Promise<any>;
    abstract getProperty(): string;
    abstract onResponse(response: string): void;
    protected cppfBridge: ICPPFBridge;

    public registerCPPFBridge = (cppfBridge: ICPPFBridge) => {
        this.cppfBridge = cppfBridge;
    };

}