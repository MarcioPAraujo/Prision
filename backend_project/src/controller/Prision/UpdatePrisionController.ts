import { Request, Response } from "express";
import { UpdatePrisionService } from "../../service/Prision/UpdatePrisionService";

class UpdatePrisionController{
    async handle(request:Request,response:Response){
        const {id,name,address} = request.body

        const prisionService = new UpdatePrisionService()

        const prisonUpdate = prisionService.execute({id,name,address})

        return response.json(prisonUpdate)
    }
}

export{UpdatePrisionController}