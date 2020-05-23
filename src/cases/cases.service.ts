import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CaseEntity } from './case.entity';
import { Repository, Between } from 'typeorm';

@Injectable()
export class CasesService {
    constructor(@InjectRepository(CaseEntity) private casesRepository: Repository<CaseEntity>){}

    async getCasebyCaseNo(caseNo: string): Promise<CaseEntity>{
        return await this.casesRepository.findOne({caseNo})
    }

    async getCasesByFiledDate(from: Date, to: Date): Promise<CaseEntity[]>{
        return await this.casesRepository.find({
            where:[{filingDate: Between(from,to)}]
        })
    }

    async createCase(doc: CaseEntity){
        this.casesRepository.save(doc);
    }



}
