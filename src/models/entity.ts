import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Widget {

    @PrimaryGeneratedColumn()
    id!: number;

    constructor(name: string) {
        this.name = name;
    }

    @Column()
    name: string;
}