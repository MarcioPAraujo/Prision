import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../../repositories/EmployeeRepositories";

class ListEmployeeService{
    async execute(){
        const employeeRepositories = getCustomRepository(EmployeeRepositories)

        const employees = employeeRepositories.createQueryBuilder("employee")
        .leftJoinAndSelect("employee.prision","prision")
        .getMany()

        return employees
    }
}
export {ListEmployeeService}