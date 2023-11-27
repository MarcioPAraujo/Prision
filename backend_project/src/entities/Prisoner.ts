import{
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
}from "typeorm"
import {v4 as uuid} from "uuid"
import { Jail } from "./Jail"


@Entity('prisoner')
class Prisoner{
    @PrimaryColumn()
    readonly id!: string

    @Column()
        name!:string

    @Column()
        height!:number

    @Column()
        weight!:number

    @Column()
        age!:number
    
    @Column()
        nationality!:string

    @ManyToOne(()=>Jail)    
    @JoinColumn()
    jail!:Jail

  
    @CreateDateColumn()
        created_at!: Date
    @DeleteDateColumn()
        deleted_at!:Date
    @UpdateDateColumn()
        updated_at:Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export{Prisoner}