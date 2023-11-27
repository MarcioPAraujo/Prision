import { EntityRepository, Repository } from "typeorm";
import { Prisoner } from "../entities/Prisoner";

@EntityRepository(Prisoner)
class PrisonerRepositories extends Repository<Prisoner> {}

export { PrisonerRepositories };