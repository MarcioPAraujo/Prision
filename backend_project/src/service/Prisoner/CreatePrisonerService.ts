import { getCustomRepository } from "typeorm";
import { PrisonerRepositories } from "../../repositories/PrisonerRepositories";

interface IPrisoner{
    name:string
    height:number
    weight:number
    age:number
    nationality:string
    jail:string
   
}

class CreatePrisonerService{
    async execute({name,height,weight,age,nationality,jail}:IPrisoner){

        const prisonerRepository = getCustomRepository(PrisonerRepositories)

        const newPrisoner = prisonerRepository.create({name,height,weight,age,nationality,jail:{id:jail}})
        
        await prisonerRepository.save(newPrisoner)
        return newPrisoner
    }
}
export{CreatePrisonerService}