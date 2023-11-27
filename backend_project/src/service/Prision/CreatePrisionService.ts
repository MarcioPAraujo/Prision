import { getCustomRepository } from "typeorm"
import { PrisionRepository } from "../../repositories/PrisionRepositories"


interface ICreatePrision{
    name:string,
    address:string
}
class CreatePrisionService{
    async execute({name,address}:ICreatePrision){
        const prisionRepository = getCustomRepository(PrisionRepository)

        const prision = prisionRepository.create({
            name,
            address
        })

        await prisionRepository.save(prision)

        return prision
    }
}


export{CreatePrisionService}