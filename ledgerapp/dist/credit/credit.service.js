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
exports.CreditService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CreditService = class CreditService {
    constructor(creditModel, walletModel, userModel) {
        this.creditModel = creditModel;
        this.walletModel = walletModel;
        this.userModel = userModel;
    }
    async createcredit(credit, walletid) {
        const wallet = await this.walletModel.findById({ _id: walletid });
        if (!wallet) {
            throw new common_1.HttpException(`wallet id ${walletid} does not exist`, common_1.HttpStatus.NOT_FOUND);
        }
        try {
            const newCredit = new this.creditModel(Object.assign({ wallet: wallet._id }, credit));
            const savedCredit = await newCredit.save();
            wallet.Credit.push({ creditid: savedCredit._id, creditAmount: -savedCredit.credit_amount });
            wallet.Total -= savedCredit.credit_amount;
            await wallet.save();
            const user = await this.userModel.findById({ _id: wallet.user });
            if (!user) {
                throw new common_1.HttpException(`User with id ${wallet.user} not found`, common_1.HttpStatus.NOT_FOUND);
            }
            const userWallet = await user.wallets.find(w => w.walletId.toString() === wallet._id.toString());
            if (!userWallet) {
                throw new common_1.HttpException(`Wallet with id ${wallet._id} not found in user's wallets`, common_1.HttpStatus.NOT_FOUND);
            }
            userWallet.walletTotal = wallet.Total;
            user.Accountbalance += userWallet.walletTotal;
            await user.save();
            return savedCredit;
        }
        catch (err) {
            console.log(err);
        }
    }
};
CreditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Credit')),
    __param(1, (0, mongoose_1.InjectModel)('Wallet')),
    __param(2, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CreditService);
exports.CreditService = CreditService;
//# sourceMappingURL=credit.service.js.map