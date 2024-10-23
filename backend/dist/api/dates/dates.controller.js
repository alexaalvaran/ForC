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
exports.DatesController = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
const dates_service_1 = require("./dates.service");
const newDate_dto_1 = require("./newDate.dto");
let DatesController = class DatesController {
    constructor(datesService) {
        this.datesService = datesService;
    }
    async findAll() {
        try {
            return this.datesService.findAll();
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'No dates found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async findDate(id) {
        try {
            return this.datesService.findOne(id);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'food place not found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
    async newDate(newDate) {
        try {
            await this.datesService.newDate(newDate);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'unable to add this place',
            }, common_1.HttpStatus.BAD_REQUEST, { cause: console_1.error });
        }
    }
    async updateDate(id, newDate) {
        try {
            await this.datesService.updateDate(id, newDate);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'unable to update this place',
            }, common_1.HttpStatus.BAD_REQUEST, { cause: console_1.error });
        }
    }
    async deleteDate(id) {
        try {
            await this.datesService.deleteDate(id);
        }
        catch {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'place not found',
            }, common_1.HttpStatus.NOT_FOUND, { cause: console_1.error });
        }
    }
};
exports.DatesController = DatesController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatesController.prototype, "findDate", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newDate_dto_1.NewDate]),
    __metadata("design:returntype", Promise)
], DatesController.prototype, "newDate", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, newDate_dto_1.NewDate]),
    __metadata("design:returntype", Promise)
], DatesController.prototype, "updateDate", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DatesController.prototype, "deleteDate", null);
exports.DatesController = DatesController = __decorate([
    (0, common_1.Controller)('/api/dates'),
    __metadata("design:paramtypes", [dates_service_1.DatesService])
], DatesController);
//# sourceMappingURL=dates.controller.js.map