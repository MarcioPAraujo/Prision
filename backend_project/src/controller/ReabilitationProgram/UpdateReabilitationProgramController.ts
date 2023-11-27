import { Request, Response } from "express";
import { UpdateReabiliatationProgramService } from "../../service/ReabilitationProgram/UpdateReabiliattionProgramService";

class UpdateReabilitationProgram{
    async handle(request:Request,response:Response){
        
        const {id,task,timesPerWeek,duration,subjectOfStudy,prisoner} = request.body

        const updateReabiliataionProgramService = new UpdateReabiliatationProgramService()

        const updatedProgram = await updateReabiliataionProgramService.execute({
            id,task,timesPerWeek,duration,subjectOfStudy,prisoner
        })

        return response.json(updatedProgram)
    }
}
export{UpdateReabilitationProgram}