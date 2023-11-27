import { EntityRepository, Repository } from "typeorm";
import { ReabilitationProgram } from "../entities/ReabilitationProgram";

@EntityRepository(ReabilitationProgram)
class ReabilitationProgramRepositories extends Repository<ReabilitationProgram> {}

export { ReabilitationProgramRepositories };