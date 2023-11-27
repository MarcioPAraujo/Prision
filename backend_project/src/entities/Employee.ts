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
import { Prision } from "./Prision";

@Entity('employees')
class Employee{

    @PrimaryColumn()
        readonly id!: string;
    
    @Column()
        name!:string;

    @Column() 
        turno!:string;

    @Column()
        task!:string;

    @Column()
        accessLevel!: string;

    @Column() 
        equipament: string ;
        
    @ManyToOne(()=>Prision)
    @JoinColumn()
    prision!:Prision

    @CreateDateColumn()
        created_at!: Date;
    @DeleteDateColumn()
        deleted_at!: Date;
    @UpdateDateColumn()
        updated_at!: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export{Employee}
