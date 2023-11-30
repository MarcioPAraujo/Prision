import { Router } from "express";
/*----------USER---------*/
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/LIstUserController";
import { UpdateUserController} from "./controller/user/UpdateUserController";
import { DeleteUserController} from "./controller/user/DeleteUserController";
import {AuthenticateUserController} from "./controller/autentication/AutenticationController";
import { ensureAuthenticated} from "./middleware/ensureAutenticated";

const createUserController  = new CreateUserController();
const listUsersController= new ListUsersController();
const updateUserController  = new UpdateUserController();
const autenticationUserController  = new AuthenticateUserController();
const deleteUserController  = new DeleteUserController();
/*----------CRIMINAL_RECORD---------*/
import { CreateCriminalRecordsController } from "./controller/CriminalRecords/CreateCriminalRecordsController";
import { DeleteCriminalRecordsController } from "./controller/CriminalRecords/DeleteCriminalRecordsController";
import { ListCriminalRecordsController } from "./controller/CriminalRecords/ListCriminalRecordsController";
import { UpdateCriminalRecordsController } from "./controller/CriminalRecords/UpdateCriminalRecordsController";

const createCriminalRecordController = new CreateCriminalRecordsController()
const deleteCriminalRecord = new DeleteCriminalRecordsController()
const listCrimnialRecords = new ListCriminalRecordsController()
const updateCriminalRecord = new UpdateCriminalRecordsController()

/*----------EMPLOYEE---------*/
import { CreateEmployeeController } from "./controller/Employee/CreateEmployeeController";
import { DeleteEmployeeController } from "./controller/Employee/DeleteEmployeeController";
import { ListEmployeeController } from "./controller/Employee/ListEmployeeController";
import { UpdateEmployeeController } from "./controller/Employee/UpdateEmployeeController";

const createEmployeeController = new CreateEmployeeController()
const deleteEmployee = new DeleteEmployeeController()
const listEmployee = new ListEmployeeController()
const updateEmployee = new UpdateEmployeeController()

/*----------JAIL---------*/
import { CreateJailController } from "./controller/Jail/CreateJailController";
import { DeleteJailController } from "./controller/Jail/DeleteJailController";
import { ListJailController } from "./controller/Jail/ListJailController";
import { UpdateJailController } from "./controller/Jail/UpdateJailController";

const createJailController = new CreateJailController()
const deleteJail = new DeleteJailController()
const listJail = new ListJailController()
const updateJail = new UpdateJailController()

/*----------PRISONER---------*/
import { CreatePrisonerController } from "./controller/Prisoner/CreatePrisonerController";
import { DeleteprisonerController } from "./controller/Prisoner/DeletePrisonerController";
import { ListPrisonerController } from "./controller/Prisoner/ListPrisonerController";
import { UpdatePrisonerController } from "./controller/Prisoner/UpdatePrisonerController";

const createPrisonerController = new CreatePrisonerController()
const deletePrisoner = new DeleteprisonerController()
const listPrisoner = new ListPrisonerController()
const updatePrisoner = new UpdatePrisonerController()

/*----------REABILITATIONPROGRAM---------*/
import { CreateReabilitationProgramControlle } from "./controller/ReabilitationProgram/CreateReabilitationProgramControlle";
import { DeleteReabilitationProgramController} from "./controller/ReabilitationProgram/DeleteReabilitationProgramController";
import { ListReabilitationProgramController } from "./controller/ReabilitationProgram/ListReabilitationProgramController";
import { UpdateReabilitationProgram } from "./controller/ReabilitationProgram/UpdateReabilitationProgramController";



const createReabilitationController = new CreateReabilitationProgramControlle()
const deleteReabilitation = new DeleteReabilitationProgramController()
const listReabilitation = new ListReabilitationProgramController()
const updateReabilitation = new UpdateReabilitationProgram()

/*-------------------PRISION--------------------*/
import { CreatePrisionController } from "./controller/Prision/CreatePrisionController";
import { DeletePrisionController } from "./controller/Prision/DeletePrisionController";
import { ListprisionController } from "./controller/Prision/ListPrisionController";
import { UpdatePrisionController } from "./controller/Prision/UpdatePrisionController";

const createPrisionController = new CreatePrisionController()
const deletePrisionController = new DeletePrisionController()
const listPrisionController = new ListprisionController()
const updatePrisionController = new UpdatePrisionController()

const router = Router();
router.post("/login", autenticationUserController.handle);

router.post("/users", createUserController.handle);
router.post("/criminal-record",createCriminalRecordController.handle)
router.post("/employee",createEmployeeController.handle)
router.post("/jail",createJailController.handle)
router.post("/prisoner",createPrisonerController.handle)
router.post("/reabilitation-program",createReabilitationController.handle)
router.post('/prision',createPrisionController.handle)
router.post("/reset",autenticationUserController.resetPassword)

router.get("/users", listUsersController.handle);
router.get("/criminal-record",listCrimnialRecords.handle)
router.get("/employee",listEmployee.handle)
router.get("/jail",listJail.handle)
router.get("/prisoner",listPrisoner.handle)
router.get("/reabilitation-program",listReabilitation.handle)
router.get('/prision',listPrisionController.handle)

router.put("/users", updateUserController.handle);
router.put("/criminal-record",updateCriminalRecord.handle)
router.put("/employee",updateEmployee.handle)
router.put("/jail",updateJail.handle)
router.put("/prisoner",updatePrisoner.handle)
router.put("/reabilitation-program",updateReabilitation.handle)
router.put('/prision',updatePrisionController.handle)

router.delete("/users/:id", deleteUserController.handle);
router.delete("/criminal-record/:id",deleteCriminalRecord.handle)
router.delete("/employee/:id",deleteEmployee.handle)
router.delete("/jail/:id",deleteJail.handle)
router.delete("/prisoner/:id",deletePrisoner.handle)
router.delete("/reabilitation-program/:id",deleteReabilitation.handle)
router.delete('/prision/:id',deletePrisionController.handle)

//router.use(ensureAuthenticated)

export {router}