import { EntityRepository, Repository } from "typeorm";
import { Jail } from "../entities/Jail";

@EntityRepository(Jail)
class JailRepositories extends Repository<Jail> {}

export { JailRepositories };