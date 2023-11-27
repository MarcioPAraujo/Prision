import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailDelete{
    id:string
}

class DeleteJailService{
    async execute({id}:IJailDelete){
        const jailRepositories = getCustomRepository(JailRepositories)

        const jailAlreadyexists = await jailRepositories.findOne({id},)

        if(!jailAlreadyexists){
            
            throw new Error('this jail does not exists')
        }
        
        const retrieve = await jailRepositories.delete(id)

        let messagmsgeDelete = {message:`the jail ${jailAlreadyexists.jailNumber} was deleted`}

        return messagmsgeDelete

    }
}

export{DeleteJailService}