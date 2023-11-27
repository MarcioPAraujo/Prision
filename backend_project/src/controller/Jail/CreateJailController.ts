import { Request, Response } from "express";
import { CreatejailService } from "../../service/Jail/CreateJailService";

class CreateJailController{
    async handle(request:Request,response:Response){
        const{capacity,jailNumber,securityLevel,confortLevel,employee}=request.body
        const jai= {
            capacity:capacity,
            jailNumber:jailNumber,
            securityLevel:securityLevel,
            confortLevel:confortLevel,
            employee:employee
        }
        const createJailService = new CreatejailService()
        const retrieve = await createJailService.execute(jai)

        return response.json(retrieve)

    }
}
export{CreateJailController}