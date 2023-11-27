import { getCustomRepository } from "typeorm";
import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";

class ListCriminalRecordService{
    async execute(){
        const criminalRecord = getCustomRepository(CriminalRecordRepositories)

        const records = await criminalRecord.createQueryBuilder("criminalrecord")
        .leftJoinAndSelect("criminalrecord.prisoner","prisoner")
        .getMany();
        return  records;
    }
}

export{ListCriminalRecordService}