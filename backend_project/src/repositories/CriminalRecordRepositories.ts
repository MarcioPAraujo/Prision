import { EntityRepository, Repository } from "typeorm";
import { CriminalRecord } from "../entities/CriminalRecord";

@EntityRepository(CriminalRecord)
class CriminalRecordRepositories extends Repository<CriminalRecord> {}

export { CriminalRecordRepositories };