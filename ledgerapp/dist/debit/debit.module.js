"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const debit_schemas_1 = require("../schemas/debit.schemas");
const user_schema_1 = require("../schemas/user.schema");
const wallet_schema_1 = require("../schemas/wallet.schema");
const debit_controller_1 = require("./debit.controller");
const debit_service_1 = require("./debit.service");
let DebitModule = class DebitModule {
};
DebitModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: 'Debit', schema: debit_schemas_1.DebitSchema },
                { name: 'Wallet', schema: wallet_schema_1.WalletSchema },
                { name: 'User', schema: user_schema_1.UserSchema }
            ])],
        controllers: [debit_controller_1.DebitController],
        providers: [debit_service_1.DebitService]
    })
], DebitModule);
exports.DebitModule = DebitModule;
//# sourceMappingURL=debit.module.js.map