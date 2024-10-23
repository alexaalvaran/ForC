import { DatesService } from "./dates.service";
import { NewDate } from "./newDate.dto";
export declare class DatesController {
    private readonly datesService;
    constructor(datesService: DatesService);
    findAll(): Promise<import("./dates.schema").Dates[]>;
    findDate(id: string): Promise<import("./dates.schema").Dates>;
    newDate(newDate: NewDate): Promise<void>;
    updateDate(id: string, newDate: NewDate): Promise<void>;
    deleteDate(id: string): Promise<void>;
}
