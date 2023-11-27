

import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";
import { getCustomRepository } from "typeorm";

interface CriminalRecordRequest{
    prisoner:string
    sentence:string
    section:string
    crime:string
    

}
class CreateCriminalRecordService{
    async execute({prisoner,sentence,section,crime}:CriminalRecordRequest){
        
        const criminalRecordRepositories = getCustomRepository(CriminalRecordRepositories)

       

        const record = criminalRecordRepositories.create({prisoner:{id:prisoner},sentence,section,crime})

        await criminalRecordRepositories.save(record)
        return record
    }
}

export{CreateCriminalRecordService}