import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

interface IReabiliattionProgramDelete{
    id:string
}

class DeletereabilitationProgramService{
    async execute({id}:IReabiliattionProgramDelete){

        const reabilitationProgram = getCustomRepository(ReabilitationProgramRepositories)

        const programAlreadyExists = await reabilitationProgram.findOne({id})

        if(!programAlreadyExists){
            throw new Error('this reabilitation program does not exists')
        }

        const retrieve = await reabilitationProgram.delete(id)

        let messagmsgeDelete ={message:'reabilitation program seccessfully deleted'}

        return messagmsgeDelete
    }
}

export{DeletereabilitationProgramService}