import { getCustomRepository } from "typeorm"
import { PrisionRepository } from "../../repositories/PrisionRepositories"

interface IPrisionUpdate{
    id:string,
    name:string,
    address:string
}

class UpdatePrisionService{
    async execute({id,name,address}:IPrisionUpdate){
        const prisionRepository = getCustomRepository(PrisionRepository)

        const prisionExists = await prisionRepository.findOne({id})

        if(!prisionExists){
            throw new Error(`this prision does not exists`)
        }

        prisionExists.name = name,
        prisionExists.address = address
        prisionExists.updated_at=new Date()

        const update = await prisionRepository.update(id,prisionExists)

        return update

    }
}export{UpdatePrisionService}