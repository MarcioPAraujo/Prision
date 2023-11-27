import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../../repositories/EmployeeRepositories";


interface IEmployeeRequest{

    name:string,
    turno:string,
    task:string,
    accessLevel:string,
    equipament:string,
    prision:string
}

class CreateEmployeeService{
    async execute({name,turno,task,accessLevel,equipament,prision}:IEmployeeRequest){

        const employeeRepositories = getCustomRepository(EmployeeRepositories)

        if(!task){
            throw new Error('it must contain a task')
        }


        let vemploye = 
        {
            
            name:name,
            turno:turno,
            task:task,
            accessLevel:accessLevel,
            equipament:equipament,
            prision:{id:prision}
        }

        const employee = employeeRepositories.create({name,turno,task,accessLevel,equipament,prision:{id:prision}})
        await employeeRepositories.save(employee)
        return employee

    }
}

export{CreateEmployeeService}