import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Dates } from "./dates.schema";
import { NewDate } from "./newDate.dto";

@Injectable()

export class DatesService{
    constructor(@InjectModel(Dates.name) private datesModel: Model<Dates>) {}

    async findAll(): Promise<Dates[]>{
        return this.datesModel.find().exec();
    }

    async findOne(id:string): Promise<Dates>{
        return await this.datesModel.findById(id).exec();
    }

    async newDate(newDate: NewDate)
    {
        return this.datesModel.create(newDate);
    }

    async updateDate(id: string, newDate: NewDate)
    {
        return await this.datesModel.findByIdAndUpdate(id, newDate).exec();
    }

    async deleteDate(id:string)
    {
        const deletedDate = await this.datesModel.findByIdAndDelete(id).exec();
        return deletedDate;
    }
}