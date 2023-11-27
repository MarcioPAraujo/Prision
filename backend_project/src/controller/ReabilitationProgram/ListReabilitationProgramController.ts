import { Request, Response } from "express";
import { ListReabilitationProgramService } from "../../service/ReabilitationProgram/ListReabilitationProgramService";

class ListReabilitationProgramController{
    async handle(request:Request,response:Response)
    {
        const listReabilitationProgramService = new ListReabilitationProgramService()
        const allReabilitationPrograms = listReabilitationProgramService.execute()

        return response.json(allReabilitationPrograms)
    }
}
export{ListReabilitationProgramController}