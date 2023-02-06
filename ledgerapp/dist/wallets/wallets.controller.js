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
exports.WalletsController = void 0;
const common_1 = require("@nestjs/common");
const create_wallet_dto_1 = require("../dto/create-wallet.dto");
const wallets_service_1 = require("./wallets.service");
let WalletsController = class WalletsController {
    constructor(service) {
        this.service = service;
    }
    async create(createWalletDto, userid) {
        return await this.service.createWallet(createWalletDto, userid);
    }
    async getWalletbyUser(userid) {
        return await this.service.listWalletsByUser(userid);
    }
};
__decorate([
    (0, common_1.Post)(':userid'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wallet_dto_1.CreateWalletDto, String]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':userid'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Param)('userid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletsController.prototype, "getWalletbyUser", null);
WalletsController = __decorate([
    (0, common_1.Controller)('wallets'),
    __metadata("design:paramtypes", [wallets_service_1.WalletsService])
], WalletsController);
exports.WalletsController = WalletsController;
//# sourceMappingURL=wallets.controller.js.map