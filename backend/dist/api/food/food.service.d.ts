import { Model } from "mongoose";
import { Food } from "./food.schema";
import { NewFood } from "./newFood.dto";
export declare class FoodService {
    private foodModel;
    constructor(foodModel: Model<Food>);
    findAll(): Promise<Food[]>;
    findOne(id: string): Promise<Food>;
    newFood(newFood: NewFood): Promise<import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateFood(id: string, newFood: NewFood): Promise<import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteFood(id: string): Promise<import("mongoose").Document<unknown, {}, Food> & Food & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
