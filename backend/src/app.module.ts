import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { PrismaModule } from './global/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule.forRoot(),
    TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
