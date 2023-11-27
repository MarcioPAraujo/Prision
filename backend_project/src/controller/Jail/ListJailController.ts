import { Request, Response } from "express";
import { ListJailService } from "../../service/Jail/ListJailService";

class ListJailController{
    async handle(request:Request,response:Response){
        const listJailService = new ListJailService()

        const allJails = await listJailService.execute()

        return response.json(allJails)
    }
}
export{ListJailController}