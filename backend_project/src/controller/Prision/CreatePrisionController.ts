import { Request, Response } from "express"
import { CreatePrisionService } from "../../service/Prision/CreatePrisionService"

class CreatePrisionController{
    async handle(request:Request,response:Response){
        const {name,address} = request.body

        const prision ={
            name:name,
            address:address
        }

        const prisionService = new CreatePrisionService()

        const newPrision = await prisionService.execute(prision)

        return response.json(newPrision)
    }
}

export{CreatePrisionController}