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
exports.WalletsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let WalletsService = class WalletsService {
    constructor(walletModel, userModel) {
        this.walletModel = walletModel;
        this.userModel = userModel;
    }
    ;
    async createWallet(wallet, userid) {
        var user = await this.userModel.findById({ _id: userid });
        if (!user) {
            throw new common_1.HttpException(`user with id ${userid} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        try {
            const newWallet = new this.walletModel(Object.assign({ user: user._id }, wallet));
            const savedWallet = await newWallet.save();
            const updatedUser = await this.userModel.findOneAndUpdate({ _id: userid }, {
                $push: {
                    wallets: {
                        walletId: savedWallet._id,
                        walletName: savedWallet.walletname,
                        walletTotal: savedWallet.Total
                    }
                }
            }, { new: true });
            console.log(updatedUser);
            return savedWallet;
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException('wallet exists', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async listWalletsByUser(userid) {
        return await this.walletModel.find({ user: userid });
    }
};
WalletsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Wallet')),
    __param(1, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], WalletsService);
exports.WalletsService = WalletsService;
//# sourceMappingURL=wallets.service.js.map