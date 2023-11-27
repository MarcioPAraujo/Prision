import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";
import { Employee } from "../../entities/Employee";


interface IJailUpdate{
    id:string,
    capacity:number,
    jailNumber:string,
    securityLevel:string,
    confortLevel:string,
    employee:Employee
}

class UpdateJailService{
    async execute({id,capacity,jailNumber,securityLevel,confortLevel,employee}:IJailUpdate){

        const jailRepositories = getCustomRepository(JailRepositories)

        const jailAlreadyexists = await jailRepositories.findOne({id})

        if(!jailAlreadyexists){
            throw new Error('this jail does not exists')
        
        }

        jailAlreadyexists.capacity=capacity
        jailAlreadyexists.jailNumber=jailNumber
        jailAlreadyexists.securityLevel=securityLevel
        jailAlreadyexists.confortLevel=confortLevel
        jailAlreadyexists.employee=employee
        jailAlreadyexists.updated_at=new Date()

        const jailUpdate = await jailRepositories.update(id,jailAlreadyexists)

        return jailUpdate
    }
}
export{UpdateJailService}