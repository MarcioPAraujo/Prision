import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailService{
    capacity:number,
    jailNumber:string,
    securityLevel:string,
    confortLevel:string,
    employee:string
}

class CreatejailService{
    async execute({capacity,jailNumber,securityLevel,confortLevel,employee}:IJailService){

        const jailrepository = getCustomRepository(JailRepositories)

        let vjail = {
            
            capacity:capacity,
            jailNumber:jailNumber,
            securityLevel:securityLevel,
            confortLevel:confortLevel,
            employee:employee
        }

        const jail = jailrepository.create({capacity,jailNumber,securityLevel,confortLevel,employee:{id:employee}})

        await jailrepository.save(jail)

        return jail
    }
}

export{CreatejailService}