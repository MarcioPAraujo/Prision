import { getCustomRepository } from "typeorm"
import { PrisionRepository } from "../../repositories/PrisionRepositories"

class ListPrisionService{
    async execute(){
        const prisionRepository = getCustomRepository(PrisionRepository)

        const allPrisions = prisionRepository.find()

        return allPrisions
    }
}
export{ListPrisionService}