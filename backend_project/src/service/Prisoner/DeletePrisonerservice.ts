import { getCustomRepository } from "typeorm";
import { PrisonerRepositories } from "../../repositories/PrisonerRepositories";

interface IPrisonerDelete{
    id:string
    
}

class DeletePrisonerService{
    async execute({id}:IPrisonerDelete){
        const prisonerRepository = getCustomRepository(PrisonerRepositories)

        const prisonerAlreadyExists = await prisonerRepository.findOne({id})

        if(!prisonerAlreadyExists){
            throw new Error ('this prisoner does not exists')
        }
        const retrieve = await prisonerRepository.delete(id)

        let messagmsgeDelete = {message:`${prisonerAlreadyExists.name}uccessfully deleted`}

        return messagmsgeDelete
    }
}
export {DeletePrisonerService}