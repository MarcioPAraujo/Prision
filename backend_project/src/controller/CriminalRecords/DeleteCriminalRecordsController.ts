import { Request, Response } from "express";
import { DeleteCriminalRecordService } from "../../service/CriminalRecord/DeleteCriminalRecordService";

class DeleteCriminalRecordsController{
    async handle(request:Request,response:Response){
        const id = request.params.id
        const deleteCriminalRecordService = new DeleteCriminalRecordService()
        const retrieve = await deleteCriminalRecordService.execute({id})

        return response.json(retrieve)
        
    }
}
export {DeleteCriminalRecordsController}