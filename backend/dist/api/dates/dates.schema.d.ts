import { HydratedDocument } from 'mongoose';
export type DatesDocument = HydratedDocument<Dates>;
export declare class Dates {
    idea: string;
    location: string;
    description: string;
}
export declare const DatesSchema: import("mongoose").Schema<Dates, import("mongoose").Model<Dates, any, any, any, import("mongoose").Document<unknown, any, Dates> & Dates & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Dates, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Dates>> & import("mongoose").FlatRecord<Dates> & {
    _id: import("mongoose").Types.ObjectId;
}>;
