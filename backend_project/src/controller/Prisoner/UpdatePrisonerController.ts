import { Request, Response } from "express";
import { UpdatePrisonerService } from "../../service/Prisoner/UpdatePrisonerService";

class UpdatePrisonerController{
    async handle(request:Request,response:Response){
        const {id,name,height,weight,age,nationality,jail} = request.body
        const updatePrisonerService = new UpdatePrisonerService()
        
        const prisoner = await updatePrisonerService.execute({id,name,height,weight,age,nationality,jail})
        return response.json(prisoner)
    }
}
export{UpdatePrisonerController}