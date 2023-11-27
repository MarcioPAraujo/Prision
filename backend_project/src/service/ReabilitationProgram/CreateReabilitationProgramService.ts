import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories"; 


interface IReabilitationProgramCreate{
    task:string
    timesPerWeek:number
    duration:string
    subjectOfStudy:string
    prisoner:string

}

class CreateReabilitationProgramService{
    async execeute({task,timesPerWeek,duration,subjectOfStudy,prisoner}:IReabilitationProgramCreate){
        const reabilitationrepository = getCustomRepository(ReabilitationProgramRepositories)

        const program = reabilitationrepository.create(
            {task,timesPerWeek,duration,subjectOfStudy,prisoner:{id:prisoner}})

        await reabilitationrepository.save(program)

        return program
    }
}

export{CreateReabilitationProgramService}