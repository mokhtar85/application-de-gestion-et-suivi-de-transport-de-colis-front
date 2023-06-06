import { Admin } from "./Admin.models"
import { Client } from "./Client.models"
import { Transporteur } from "./Transporteur.models"

export class AuthenticationResponse{
    token!:string
    client!:Client 
    admin!:Admin
    transporteur!:Transporteur
}