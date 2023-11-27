import { Request, Response } from "express";
import { UpdateJailService } from "../../service/Jail/UpdateJailService";

class UpdateJailController{
    async handle(request:Request,response:Response){
        const{id,capacity,jailNumber,securityLevel,confortLevel,employee} = request.body

        const updateJailService=new UpdateJailService()

        const prisoner = await updateJailService.execute({id,capacity,jailNumber,securityLevel,confortLevel,employee})

        return response.json(prisoner)
    }

}
export{UpdateJailController}