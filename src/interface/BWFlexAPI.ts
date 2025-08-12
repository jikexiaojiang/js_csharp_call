import { BaseLogicAPI } from "./BaseLogicApi";
import { ICPPFBridge } from "./ICPPFBridge";
export class BWFlexAPI extends BaseLogicAPI {
    resolve: (value: string | PromiseLike<string>) => void;
    reject: (reason?: any) => void;
    getProperty(): string {
        return "BWFlexAPI";
    }
    registerCPPFBridge: (cppfBridge: ICPPFBridge) => void;
    public onResponse = (response: string) => {
        this.resolve(response);
        // this.requestManager?.parseResponse(response);
    };
    async getConfig(num: number): Promise<any> {
        try {
            // let data = Buffer.from("hello world");
            var length = 10;
            var result = new Array(length);
            for (let i = 0; i < 10; i++) {
                console.log("####begin foreach", i, new Date().toLocaleString());
                var packet = this.generateRandomString(10);

                const dataRequest = new Promise<string>((resolve, reject) => {
                    this.resolve = resolve;
                    this.reject = reject;
                    this.cppfBridge.sendCommand(packet);
                });
                var resultPacket = await dataRequest;
                result[i] = packet + "#" + resultPacket;
            }
            return result;
        } catch (error: any) {
            console.log('sfsdfsdff');
        }
        console.log('sfsdfsdff');
        return ["error"];
    }
    setConfig: (config: any) => Promise<any>;

    generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
    }

}