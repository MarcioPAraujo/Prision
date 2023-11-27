import { Request, Response } from "express";
import { ListPrisonerService } from "../../service/Prisoner/ListPrisonerService";

class ListPrisonerController{
    async handle(request:Request,response:Response){
        const listPrisonerService = new ListPrisonerService()

        const allPrisoners = await listPrisonerService.execute()

        return response.json(allPrisoners)
    }
}
export{ListPrisonerController}