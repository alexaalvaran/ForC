import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Food, FoodSchema} from "./food.schema";
import { FoodService } from "./food.service";
import { FoodController } from "./food.controller";

@Module({
    imports:[
        MongooseModule.forFeature([{name: Food.name, schema:FoodSchema}])
    ],
    controllers: [FoodController],
    providers: [FoodService],
})

export class FoodModule{}