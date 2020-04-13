import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "items"})
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({type:'float'})
    price: number;

    @Column()
    image: string;

}
