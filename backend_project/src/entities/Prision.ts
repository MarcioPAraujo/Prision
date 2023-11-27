import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn
}from 'typeorm'
import {v4 as uuid} from 'uuid'


@Entity('prision')
class Prision{
    @PrimaryColumn()
        readonly id!: string
    @Column()
        name!:string
    @Column()
        address!:string
    
    @CreateDateColumn()  
    created_at!:Date
    @DeleteDateColumn()
    deleted_at!:Date
    @UpdateDateColumn()
    updated_at!:Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export {Prision}