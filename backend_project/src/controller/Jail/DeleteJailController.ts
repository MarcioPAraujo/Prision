import { Request, Response } from "express";
import { DeleteJailService } from "../../service/Jail/DeletJailService";

class DeleteJailController{
    async handle(request:Request,response:Response){
        const deleteJailService = new DeleteJailService()

        const id = request.params.id
        
        const retrieve = await deleteJailService.execute({id})

        return response.json(retrieve)
    }
}
export{DeleteJailController}