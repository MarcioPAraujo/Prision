import { Request, Response } from "express";
import { CreateReabilitationProgramService } from "../../service/ReabilitationProgram/CreateReabilitationProgramService";

class CreateReabilitationProgramControlle{
    async handle(request:Request,response:Response){
        
        const {task,timesPerWeek,duration,subjectOfStudy,prisoner} = request.body

        const newProgram = {
            task:task,
            timesPerWeek:timesPerWeek,
            duration:duration,
            subjectOfStudy:subjectOfStudy,
            prisoner:prisoner
        }
        console.log('ok')
        const createReabilitationProgramService = new CreateReabilitationProgramService()
        const retrieve = await createReabilitationProgramService.execeute(newProgram)

        return response.json(retrieve)
    }
}
export{CreateReabilitationProgramControlle}