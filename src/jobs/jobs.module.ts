import { Module } from '@nestjs/common';
import { JobsService } from './services/jobs.service';
import { JobsController } from './controllers/jobs.controller';
import { interviewController } from './controllers/interview.controller';

@Module({
  controllers: [JobsController, interviewController],
  providers: [JobsService],
})
export class JobsModule {}
