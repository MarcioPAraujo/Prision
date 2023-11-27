import { Request, Response } from "express";
import { DeletereabilitationProgramService } from "../../service/ReabilitationProgram/DeleteReabilitationProgramService";

class DeleteReabilitationProgramController{
    async handle(request:Request,response:Response){
        const id = request.params.id
        const deleteProgramReabilitationService = new DeletereabilitationProgramService()
        const retrieve = await deleteProgramReabilitationService.execute({id})
        return response.json(retrieve)
    }
}
export{DeleteReabilitationProgramController}