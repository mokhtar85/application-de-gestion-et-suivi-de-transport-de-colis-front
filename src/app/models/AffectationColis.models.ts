import { Command } from "./Command.models"
import { Transporteur } from "./Transporteur.models"

export class AffectationColis{
    affectation_id!:number
    transporteur!:Transporteur
    colisList!:Command[]
}