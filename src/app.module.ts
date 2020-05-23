import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserEntity } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { CasesModule } from './cases/cases.module';
import { CaseEntity } from './cases/case.entity';
import { LRegsModule } from './l-regs/l-regs.module';
import { LRegsEntity } from './l-regs/l-regs.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ladb',
      synchronize: true,
      entities:  [UserEntity, CaseEntity, LRegsEntity]
    }),
    UsersModule,
    AuthModule,
    CasesModule,
    LRegsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
