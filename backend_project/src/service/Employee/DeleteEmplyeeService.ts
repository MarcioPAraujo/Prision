import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../../repositories/EmployeeRepositories";

interface IEmployeeDelete{
    id:string
}

class DeleteEmployeeService{
    async execute({id}:IEmployeeDelete){
        const employeeRepositories = getCustomRepository(EmployeeRepositories)

        const employeeAlreadyExists= await employeeRepositories.findOne({id})

        if(!employeeAlreadyExists){
            throw new Error('this employee does not exist')
        }

        const retrieve = await employeeRepositories.delete({id})

        let messagmsgeDelete = {message:`the ${employeeAlreadyExists.name} was deleted`}

        return messagmsgeDelete
    }
}

export{DeleteEmployeeService}