import { getCustomRepository } from "typeorm";
import { PrisonerRepositories } from "../../repositories/PrisonerRepositories";
import { Jail } from "../../entities/Jail";

interface IPrisonerUpdate{
    id:string
    name:string
    height:number
    weight:number
    age:number
    nationality:string
    jail:Jail
}
class UpdatePrisonerService{
    async execute({id,name,height,weight,age,nationality,jail}:IPrisonerUpdate){

        const prisonerRepository = getCustomRepository(PrisonerRepositories)

        const prisonerAlreadyExists = await prisonerRepository.findOne(id)

        if(!prisonerAlreadyExists){
            throw new Error ('this prisoner does not exists')
        }

        prisonerAlreadyExists.name=name
        prisonerAlreadyExists.height=height     
        prisonerAlreadyExists.weight=weight
        prisonerAlreadyExists.age=age
        prisonerAlreadyExists.nationality=nationality
        prisonerAlreadyExists.jail=jail
        prisonerAlreadyExists.updated_at=new Date()

        const updatedPrisoner = await prisonerRepository.update(id,prisonerAlreadyExists)

        return updatedPrisoner
    }
}
export {UpdatePrisonerService}