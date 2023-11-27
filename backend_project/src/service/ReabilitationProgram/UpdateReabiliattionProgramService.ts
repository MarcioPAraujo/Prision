import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

import { Prisoner } from "../../entities/Prisoner";

interface IReabilitationProgramupdate{
    id:string,
    task:string,
    timesPerWeek:number,
    duration:string,
    subjectOfStudy:string,
    prisoner:Prisoner
}

class UpdateReabiliatationProgramService{
    async execute({id,task,timesPerWeek,duration,subjectOfStudy,prisoner}:IReabilitationProgramupdate){

        const reabilitationRepository = getCustomRepository(ReabilitationProgramRepositories)

        const programAlreadyExists = await reabilitationRepository.findOne({id})

        if(!programAlreadyExists){
            throw new Error('this program does not exists')
        }

        programAlreadyExists.task=task
        programAlreadyExists.timesPerWeek=timesPerWeek
        programAlreadyExists.duration=duration
        programAlreadyExists.subjectOfStudy=subjectOfStudy
        programAlreadyExists.prisoner=prisoner
        programAlreadyExists.updated_at=new Date()

        const reabilitationProgramUpdated = await reabilitationRepository.update(id,programAlreadyExists)

        return reabilitationProgramUpdated
    }
}

export{UpdateReabiliatationProgramService}