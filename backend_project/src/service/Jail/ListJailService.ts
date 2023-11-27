import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

class ListJailService{
    async execute(){
        const jailRepositories = getCustomRepository(JailRepositories)

        const jails = await jailRepositories.createQueryBuilder("jail")
        .leftJoinAndSelect("jail.employee","employee")
        .getMany();

        return jails
    }
}

export{ListJailService}