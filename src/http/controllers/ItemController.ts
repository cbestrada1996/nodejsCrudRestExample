import {getRepository, Repository} from "typeorm";
import path = require('path')
import fs = require("fs");
import {Item} from "../../database/entity/Item";
import Storage from "../../config/storage";

export default class ItemController {

    IMAGE_PATH: string = "../../storage/images/items/";

    async all(req, res) { 
        const item = await getRepository(Item).find()
        res.send({ items: item });
    }

    async create(req, res) { 
        var item = new Item();
        const file = req.files.image;
        const targetPath = "./images/items/"+file.name;
        Storage.saveInPublic(file.data, targetPath).then((isSaved: boolean) => {
            console.log(isSaved);
            if(isSaved){
                item.name = req.body.name;
                item.description = req.body.description; 
                item.price = req.body.price;
                const write = fs.createWriteStream(targetPath);
                write.write(file.data)
                item.image = targetPath;
                getRepository(Item).save(item).then((item: Item)=> res.send({ items: item }));
            }
        });
        
       
    }
}