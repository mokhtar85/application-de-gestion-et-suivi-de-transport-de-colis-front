import { Command } from "./Command.models"

export class Product {
    id_product!:number
    isFragil!:boolean
    name!:string
    type!:string
    quantity!:string
    command!:Command
    
    
}