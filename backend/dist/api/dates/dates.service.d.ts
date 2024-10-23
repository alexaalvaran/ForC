import { Model } from "mongoose";
import { Dates } from "./dates.schema";
import { NewDate } from "./newDate.dto";
export declare class DatesService {
    private datesModel;
    constructor(datesModel: Model<Dates>);
    findAll(): Promise<Dates[]>;
    findOne(id: string): Promise<Dates>;
    newDate(newDate: NewDate): Promise<import("mongoose").Document<unknown, {}, Dates> & Dates & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateDate(id: string, newDate: NewDate): Promise<import("mongoose").Document<unknown, {}, Dates> & Dates & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteDate(id: string): Promise<import("mongoose").Document<unknown, {}, Dates> & Dates & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
