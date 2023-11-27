import {  EntityRepository, Repository } from "typeorm";
import { Prision } from "../entities/Prision";

@EntityRepository(Prision)
class PrisionRepository extends Repository<Prision>{}
export{PrisionRepository}