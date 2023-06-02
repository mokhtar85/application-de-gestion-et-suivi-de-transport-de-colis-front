import { Admin } from "./Admin.models"
import { Client } from "./Client.models"

export class AuthenticationResponse{
    token!:string
    client!:Client
    admin!:Admin
}