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
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ladb',
      synchronize: true,
      entities:  [UserEntity, CaseEntity]
    }),
    UsersModule,
    AuthModule,
    CasesModule,
    CitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
