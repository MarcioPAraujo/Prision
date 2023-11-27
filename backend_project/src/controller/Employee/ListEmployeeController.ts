import { Request, Response } from "express";
import { ListEmployeeService } from "../../service/Employee/ListEmployeeService";

class ListEmployeeController{
    async handle(request:Request,response:Response){
        const listEmployeeService = new ListEmployeeService()
        const retrieve = await listEmployeeService.execute()
        return response.json(retrieve)
    }
}
export{ListEmployeeController}