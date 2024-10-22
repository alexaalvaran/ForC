import { FoodService } from "./food.service";
import { NewFood } from "./newFood.dto";
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    findAll(): Promise<import("./food.schema").Food[]>;
    findFood(id: string): Promise<import("./food.schema").Food>;
    newFood(newFood: NewFood): Promise<void>;
    updateFood(id: string, newFood: NewFood): Promise<void>;
    deleteFood(id: string): Promise<void>;
}
