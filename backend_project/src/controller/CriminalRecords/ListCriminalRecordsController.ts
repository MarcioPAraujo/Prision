import { Request, Response } from "express";
import { ListCriminalRecordService } from "../../service/CriminalRecord/ListCriminalRecordService";

class ListCriminalRecordsController{
    async handle(request:Request,response:Response){
        const listCriminalRecordsService = new ListCriminalRecordService()
        const allCriminalRecords =  await listCriminalRecordsService.execute()
        return response.json(allCriminalRecords)
    }
}
export{ListCriminalRecordsController}