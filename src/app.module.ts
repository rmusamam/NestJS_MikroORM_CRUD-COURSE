import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';

@Module({
  imports: [CourseModule,MikroOrmModule.forRoot({
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    dbName: 'tft_lms',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    // debug: true,
    // loadStrategy: LoadStrategy.JOINED,
    metadataProvider: TsMorphMetadataProvider,
  })  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
