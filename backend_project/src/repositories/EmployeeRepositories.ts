import { EntityRepository, Repository } from "typeorm";
import { Employee } from "../entities/Employee";

@EntityRepository(Employee)
class EmployeeRepositories extends Repository<Employee> {}

export { EmployeeRepositories };