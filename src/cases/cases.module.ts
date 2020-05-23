import { Module } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseEntity } from './case.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaseEntity])],
  providers: [CasesService],
  controllers: [CasesController]
})
export class CasesModule {}
