import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"

@Entity("land_registries")
export class LRegsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 20, name:"land_reg_name"})
    landRegName: string
}
