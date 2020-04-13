import path = require('path')
import {validate} from './base/Validator'
const {body} = require('express-validator')

export default class ItemValidator{

    static create = () => {
        return validate([
            body('name').exists().isLength({ min: 3, max: 100}),
            body('description').exists().isLength({min: 3, max: 500}),
            body('price').exists().isFloat().isLength({ max: 9999999999}),
            body('image').custom((_value: any, { req}: any)  => {
                console.log("HOLA");
                if (!req.files || Object.keys(req.files).length === 0) {
                    return Promise.reject('No files were uploaded.');
                }
                let image = req.files.image;
                var extension = (path.extname(image.name)).toLowerCase();
                switch (extension) {
                    case '.jpg':
                    case '.jpeg':
                    case  '.png':
                        return true;
                    default:
                        return Promise.reject('Format incorrect');;
                }
            })
        ]);
    }

    static updateRules = () => {
        return validate([
            body('username').isEmail(),
            body('password').isLength({ min: 5 }),
        ]);
    }

}
