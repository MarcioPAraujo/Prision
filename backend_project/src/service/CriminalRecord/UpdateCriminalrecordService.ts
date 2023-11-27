import { getCustomRepository } from "typeorm";
import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";
import { Prisoner } from "../../entities/Prisoner";



interface ICriminalRecordRequest{
    id:string
    prisoner:Prisoner
    sentence:string
    section:string
    crime:string
}

class UpdateCriminalRecordService{
    async execute({id,prisoner,sentence,section,crime}:ICriminalRecordRequest){
        const criminalRecord = getCustomRepository(CriminalRecordRepositories)

        const criminalRecordAlreadyExist = await criminalRecord.findOne({id})

        if(!criminalRecordAlreadyExist){
            throw new Error('user does not exists')
        }

        
        criminalRecordAlreadyExist.prisoner=prisoner
        criminalRecordAlreadyExist.section=section
        criminalRecordAlreadyExist.sentence=sentence
        criminalRecordAlreadyExist.crime=crime
        criminalRecordAlreadyExist.updated_at=new Date()

        const record = await criminalRecord.update(id,criminalRecordAlreadyExist)
        return record
    }
}

export {UpdateCriminalRecordService}