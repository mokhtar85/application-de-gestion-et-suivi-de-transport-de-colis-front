import { Typerole } from "./typerole";

export class Client {
     id_user!:number;
	 userName!:string;
	 firstName!:string;
	 lastName!:string;
	 phone!:number;
	 city!:string;
     adress!:string;
	 password!:string;
	 confirmPassword!:string;
	 email!:string;
	 role!: Typerole;
}