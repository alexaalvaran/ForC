import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FoodDocument = HydratedDocument<Food>;

@Schema()
export class Food {
    @Prop({required: true})
    place: string;

    @Prop()
    location: string

    @Prop()
    cuisine: string;

    @Prop()
    rating: string;

    @Prop()
    review: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);