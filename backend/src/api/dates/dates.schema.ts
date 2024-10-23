import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DatesDocument = HydratedDocument<Dates>;

@Schema()
export class Dates {
    @Prop({required: true})
    idea: string;

    @Prop()
    location: string

    @Prop()
    description: string;
}

export const DatesSchema = SchemaFactory.createForClass(Dates);