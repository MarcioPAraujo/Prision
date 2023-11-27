import { Request, Response, response } from "express";
import { CreateEmployeeService } from "../../service/Employee/CreateEmployeeService";

class CreateEmployeeController{
    async handle(request:Request,response:Response){
        const{name,turno,task,accessLevel,equipament,prision}=request.body

        const newEmployee = {
            name:name,
            turno:turno,
            task:task,
            accessLevel:accessLevel,
            equipament:equipament,
            prision:prision
        }
        const createEmployeeService = new CreateEmployeeService();
        const retrieve = await createEmployeeService.execute(newEmployee);

        return response.json(retrieve);

    }
}
export{CreateEmployeeController}