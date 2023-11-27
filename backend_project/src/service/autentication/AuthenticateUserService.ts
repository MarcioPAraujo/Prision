import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/UsersRepositories";
const nodemailer =require('nodemailer');

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {

    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email,
    });

    if(!user){
        throw new Error("Email incorreto");
    }
    //const passwordHash = await hash("fatec", 8);
    const passwordMatch = await compare(password, user?.password);

    if (!passwordMatch) {
      throw new Error("Password incorrect");
    }
    // Gerar token
    const token = sign(
      {
        email:user.email,
      },
      "4f93ac9d10cb751b8c9c646bc9dbccb9",
      {
        subject: (user.admin?"Admin":"others"),
        expiresIn: "1d",
      }
    );
    
    return token;
  }

  async resetpassword(email,password) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    
    const userAlreadyExists = await usersRepositories.findOne(
      {email}
    );
    console.log(email)
    if(!userAlreadyExists){
      throw new Error("Email incorreto");
    }
    const myEmail = password
    const passwordHash = await hash(myEmail,8);
    userAlreadyExists.password = passwordHash
    
    const user =await usersRepositories.update(userAlreadyExists.id,userAlreadyExists)
    const mailoptions = {
    from: 'mail@mestresdaweb.io',
    to: email,  
    subject:'email teste',
    html:`
    <h1>Olá percebemos que você esqueceu a senha!!!</h1>
    <p>Sua nova senha é:</p><b>${myEmail}</b>
    `
    };
    let transporter = nodemailer.createTransport({
    host:"mail.mestresdaweb.io",
    port: 465,
    auth:{

    user:"mail@mestresdaweb.io",
    pass:"OZF6Cyf,ahw^",
    },
  });
  return  await transporter.sendMail(mailoptions,
    (err,info) => {
      if(err)
      console.log(err)
      else
      return"Senha enviada com sucesso";            
    });
  
   
  }
}

export { AuthenticateUserService };