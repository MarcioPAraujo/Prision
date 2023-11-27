import { Request, Response } from "express";
import { AuthenticateUserService } from "../../service/autentication/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({
      email,
      password,
    });

    return response.json(token);
  }
  async resetPassword(request:Request,response:Response){
    const {email,password} = request.body;
    
    const authenticateUserService = new AuthenticateUserService();
    const ret = await authenticateUserService.resetpassword(email,password);
    
    return response.json(ret); 
  }
}

export { AuthenticateUserController };