export class BaseUtil{
    public static async sleepTimeout(ms: number) {
        return new Promise(resolve => {
            const id = setTimeout(() => {
                console.log("clearTimeout", id,new Date().getTime());
                // clearTimeout(id);
                resolve("");
            }, ms);
        });
    }
    public static sleep(ms: number) {
        (async () => {
            // Do something before delay
            await BaseUtil.sleepTimeout(ms);
            // Do something after
            console.log("delay " + ms + " ms");
        })();
    }
}