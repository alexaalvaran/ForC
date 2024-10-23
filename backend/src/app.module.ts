import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './api/user/user.module';
import { NoteModule } from './api/notes/note.module';
import { FoodModule } from './api/food/food.module';
import { DatesModule } from './api/dates/dates.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.DB_URI),
    NoteModule,
    FoodModule,
    DatesModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
