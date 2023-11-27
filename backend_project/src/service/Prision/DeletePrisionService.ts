import { getCustomRepository } from "typeorm"
import { PrisionRepository } from "../../repositories/PrisionRepositories"

interface IDeletePrision{
    id:string
}

class DeletePrisionService{
    async execute({id}:IDeletePrision){
        const prisionRepository = getCustomRepository(PrisionRepository)

        const prisionExists = await prisionRepository.findOne({id})

        if(!prisionExists){
            throw new Error(`${prisionExists} prision does not exists`)
        }

        const retrieve = await prisionRepository.delete({id})

        let message ={
            message:`the ${prisionExists.name} was deleted`
        }

        return message
    }
}

export{DeletePrisionService}