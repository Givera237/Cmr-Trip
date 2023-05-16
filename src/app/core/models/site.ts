import { type } from "src/app/publication/models/type_posts";
import { ville } from "src/app/publication/models/ville";

export class Site
{
    id_posts!: number
    titre!: string
    contenu!: string
    latitude!: number
    longitude!: number
    adresse!: string
    actif!: number
    id_type!: number
    id_ville!: number
    id_utilisateur!: number
    date_post!: string
    type_post!: type
    ville_post!: ville
}