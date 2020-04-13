import fs = require("fs");
import path = require('path')
import { resolve } from "url";

export default class Storage {

    public static async saveInPublic(data: any, relativePath: string): Promise<any>
    {
        return new Promise((resolve, reject) => { 
            const finalPath = path.join((global as any).__storage +"/public", relativePath);
            const write = fs.createWriteStream(finalPath);
            write.write(data, (isSaved: boolean) => {
                console.log("PRUEBA");
                resolve(isSaved)
            })
        });
    }

}