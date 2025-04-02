import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
import { UserModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { RouterModule } from '@nestjs/core';
import { adminModule } from './admin/admin.module'
import { OfficeModule} from './admin/offices/office.module'
import { AdminModule } from './admin/users/user.module'

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    UserModule,
    JobsModule,
    adminModule,
    OfficeModule,
    AdminModule,
    RouterModule.register([
      { path: 'jobs', module: JobsModule }, 
    ]),
  ],
})
export class AppModule {}
