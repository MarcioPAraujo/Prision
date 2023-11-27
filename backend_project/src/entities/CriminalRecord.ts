import{

    Entity,
    PrimaryColumn,
    Column,
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    

}from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Prisoner } from './Prisoner'


@Entity('criminalrecord')
class CriminalRecord{

    @PrimaryColumn()
        readonly id!:string
    @Column()
        crime!:string

    @Column()
        sentence!:string

    @Column()
        section!:string


    @ManyToOne(()=>Prisoner)
    @JoinColumn()
    prisoner!:Prisoner


    
    


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
export{CriminalRecord}