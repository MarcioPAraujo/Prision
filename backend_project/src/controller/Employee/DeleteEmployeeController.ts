import { Request, Response } from "express";
import { DeleteEmployeeService } from "../../service/Employee/DeleteEmplyeeService";

class DeleteEmployeeController{
    async handle(request:Request,response:Response){
        const deleteEmployeeService = new DeleteEmployeeService()
        const id = request.params.id
        const retrieve = await deleteEmployeeService.execute({id})
        return response.json(retrieve)
    }
}
export{DeleteEmployeeController}