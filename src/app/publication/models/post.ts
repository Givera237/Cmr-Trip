import { type } from "src/app/publication/models/type_posts";
import { ville } from "src/app/publication/models/ville";

export class post
{
//id_posts!: number;
titre!: string;
contenu!: string;
longitude!: number;
latitude!: number;
adresse!: string;
//actif!: number;
date_posts !: string;
type!: type;
ville!: ville;
//imageUrl!: string
}