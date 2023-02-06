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
exports.DebitController = void 0;
const common_1 = require("@nestjs/common");
const create_debit_dto_1 = require("../dto/create-debit.dto");
const debit_service_1 = require("./debit.service");
let DebitController = class DebitController {
    constructor(service) {
        this.service = service;
    }
    async createcredit(createDebitDto, walletid) {
        return await this.service.createdDebit(createDebitDto, walletid);
    }
};
__decorate([
    (0, common_1.Post)(':walletid'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('walletid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_debit_dto_1.CreateDebitDto, String]),
    __metadata("design:returntype", Promise)
], DebitController.prototype, "createcredit", null);
DebitController = __decorate([
    (0, common_1.Controller)('debit'),
    __metadata("design:paramtypes", [debit_service_1.DebitService])
], DebitController);
exports.DebitController = DebitController;
//# sourceMappingURL=debit.controller.js.map