import { Request, Response } from "express";
import { DeletePrisionService } from "../../service/Prision/DeletePrisionService";

class DeletePrisionController{
    async handle(request:Request,response:Response){

        const id = request.params.id
        const prisionService = new DeletePrisionService()

        const retrieve = await prisionService.execute({id})

        return response.json(retrieve)
    }
}
export{DeletePrisionController}