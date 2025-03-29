import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { albumController } from './album.Controller';


@Module({
  controllers: [UserController, albumController],

})
export class AppModule {}
