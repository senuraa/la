import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { type } from "os";
import { CityEntity } from "src/cities/city.entity";

@Entity({name: "cases"})
export class CaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "filing_date"})
    filingDate: Date;

    @Column({name: "case_no", length: 25})
    caseNo: string;

    @Column({name: "customer_name", length: 100})
    customerName: string;

    @Column({name: "date_sent", nullable: true})
    dateSent: Date;

    @ManyToOne(type => CaseEntity)
    @JoinColumn({name: "id"})
    city: CityEntity; 

    @Column({name: "folio", nullable: true, length: 25})
    folio: string

    @Column({name: "declaration_date", nullable: true})
    declarationDate: Date;

    @Column({name: "next_date", nullable:true})
    nextDate: Date;

    @Column({type:"tinytext",nullable:true})
    step: string;

    @CreateDateColumn({name:"created_at", type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({name:"updated_at", type:"timestamp"})
    updatedAt:Date;

    @Column({length: 10})
    type: string
}
