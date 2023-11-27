import { Request, Response } from "express";
import { ListPrisionService } from "../../service/Prision/ListPrisionService";

class ListprisionController{
    async handle(request:Request,response:Response){
        const prisionService = new ListPrisionService()

        const allPrisions = await prisionService.execute()

        return response.json(allPrisions)
    }
}

export{ListprisionController}