import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({synchronize: false, name:"cities"})
export class CityEntity {
    @PrimaryColumn()
    id : number

    @Column({name: "name_en"})
    name: String
}
