import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LRegsEntity } from './l-regs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LRegsService {
    constructor(@InjectRepository(LRegsEntity) private lRegsRepository: Repository<LRegsEntity>){}
    async create(lReg:LRegsEntity){
        this.lRegsRepository.save(lReg);
    }

    async getAll(): Promise<LRegsEntity[]>{
        return await this.lRegsRepository.find();
    }
}