import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Dates, DatesSchema } from "./dates.schema";
import { DatesService } from "./dates.service";
import { DatesController } from "./dates.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{name:Dates.name, schema:DatesSchema}])
    ],
    controllers: [DatesController],
    providers: [DatesService],
})

export class DatesModule{}