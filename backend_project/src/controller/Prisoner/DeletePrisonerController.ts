import { Request, Response } from "express";
import { DeletePrisonerService } from "../../service/Prisoner/DeletePrisonerservice";

class DeleteprisonerController{
    async handle(request:Request,response:Response){

        const deletePrisonerService = new DeletePrisonerService()

        const id = request.params.id
        
        const prisoner = await deletePrisonerService.execute({id})

        return response.json(prisoner)
    }
}

export {DeleteprisonerController}