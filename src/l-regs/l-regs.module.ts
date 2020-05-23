import { Module } from '@nestjs/common';
import { LRegsService } from './l-regs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LRegsEntity } from './l-regs.entity';
import { LRegsController } from './l-regs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LRegsEntity])],
  controllers: [LRegsController],
  providers: [LRegsService]
})
export class LRegsModule {}
