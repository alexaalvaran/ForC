"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dates_schema_1 = require("./dates.schema");
let DatesService = class DatesService {
    constructor(datesModel) {
        this.datesModel = datesModel;
    }
    async findAll() {
        return this.datesModel.find().exec();
    }
    async findOne(id) {
        return await this.datesModel.findById(id).exec();
    }
    async newDate(newDate) {
        return this.datesModel.create(newDate);
    }
    async updateDate(id, newDate) {
        return await this.datesModel.findByIdAndUpdate(id, newDate).exec();
    }
    async deleteDate(id) {
        const deletedDate = await this.datesModel.findByIdAndDelete(id).exec();
        return deletedDate;
    }
};
exports.DatesService = DatesService;
exports.DatesService = DatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dates_schema_1.Dates.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DatesService);
//# sourceMappingURL=dates.service.js.map