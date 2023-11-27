import { Request,Response } from "express";
import { CreatePrisonerService } from "../../service/Prisoner/CreatePrisonerService";


class CreatePrisonerController{
    async handle(request:Request,response:Response){
        const {name,height,weight,age,nationality,jail} = request.body

        const prisoner={
            name:name,
            height:height,
            weight:weight,
            age:age,
            nationality:nationality,
            jail:jail

        }

        const createPrisonerService = new CreatePrisonerService()
        const retrieve = await createPrisonerService.execute(prisoner)
        return response.json(retrieve)
    }
}
export{CreatePrisonerController}