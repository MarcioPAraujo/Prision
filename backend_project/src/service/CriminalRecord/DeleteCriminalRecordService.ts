import { getCustomRepository } from "typeorm";
import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";

interface interCriminalRecordDelete{
    id:string
}

class DeleteCriminalRecordService{
    async execute({id}:interCriminalRecordDelete){

        const criminalRecord = getCustomRepository(CriminalRecordRepositories)

        const recordAlreadyExist = await criminalRecord.findOne({id})

        if(!recordAlreadyExist){throw new Error('this record does not exist')}

        const retrieve = await criminalRecord.delete(id)

        let messagmsgeDelete = {message:`criminal record from ${recordAlreadyExist.prisoner.name} was deleted`}

        return messagmsgeDelete
    }
}

export{DeleteCriminalRecordService}