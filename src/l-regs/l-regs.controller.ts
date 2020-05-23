import { Controller, Get, Res } from '@nestjs/common';
import { LRegsService } from './l-regs.service';
import {Response} from 'express'

@Controller('l-regs')
export class LRegsController {
    constructor(private lRegService: LRegsService){}

}
