import { DynamicModule, Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    PrismaService
  ],
  exports: [
    PrismaService
  ],
})
export class PrismaModule {
    static forRoot(entities = [], options?): DynamicModule {
      return {
        module: PrismaModule,
        providers: [PrismaService],
        exports: [PrismaService],
      };
    }
  }