"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const dates_schema_1 = require("./dates.schema");
const dates_service_1 = require("./dates.service");
const dates_controller_1 = require("./dates.controller");
let DatesModule = class DatesModule {
};
exports.DatesModule = DatesModule;
exports.DatesModule = DatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: dates_schema_1.Dates.name, schema: dates_schema_1.DatesSchema }])
        ],
        controllers: [dates_controller_1.DatesController],
        providers: [dates_service_1.DatesService],
    })
], DatesModule);
//# sourceMappingURL=dates.module.js.map