import { PracticeModule } from './practice/practice.module';
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
import { UserModule } from './users/users.module';
import { JobsModule } from './jobs/jobs.module';
import { RouterModule } from '@nestjs/core';
import { adminModule } from './admin/admin.module'
import { OfficeModule } from './admin/offices/office.module'
import { AdminModule } from './admin/users/user.module'

const routes = [
  { path: 'jobs', module: JobsModule },
  {
    path: 'admin', module: adminModule, children: [
      { path: 'users', module: AdminModule },
      { path: 'offices', module: OfficeModule },
    ]
  }
]

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    PracticeModule,
    UserModule,
    JobsModule,
    adminModule,
    OfficeModule,
    AdminModule,
    RouterModule.register(routes),
  ],
})
export class AppModule { }
