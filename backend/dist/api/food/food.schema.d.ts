import { HydratedDocument } from 'mongoose';
export type FoodDocument = HydratedDocument<Food>;
export declare class Food {
    place: string;
    location: string;
    cuisine: string;
    rating: string;
    review: string;
}
export declare const FoodSchema: import("mongoose").Schema<Food, import("mongoose").Model<Food, any, any, any, import("mongoose").Document<unknown, any, Food> & Food & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Food, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Food>> & import("mongoose").FlatRecord<Food> & {
    _id: import("mongoose").Types.ObjectId;
}>;
