import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Food } from "./food.schema";
import { NewFood } from "./newFood.dto";

@Injectable()
export class FoodService{
    constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}

    async findAll(): Promise<Food[]>{
        return this.foodModel.find().exec();
    }

    async findOne(id:string): Promise<Food>{
        return await this.foodModel.findById(id).exec();
    }

    async newFood(newFood: NewFood)
    {
        return this.foodModel.create(newFood);
    }

    async updateFood(id:string, newFood: NewFood)
    {
        return await this.foodModel.findByIdAndUpdate(id, newFood).exec();
    }

    async deleteFood(id:string)
    {
        const deletedFood = await this.foodModel.findByIdAndDelete(id).exec();
        return deletedFood;
    }
}