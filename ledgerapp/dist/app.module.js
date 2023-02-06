"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const user_schema_1 = require("./schemas/user.schema");
const wallets_controller_1 = require("./wallets/wallets.controller");
const wallets_module_1 = require("./wallets/wallets.module");
const keys_1 = require("./config/keys");
const wallet_schema_1 = require("./schemas/wallet.schema");
const wallets_service_1 = require("./wallets/wallets.service");
const credit_controller_1 = require("./credit/credit.controller");
const credit_module_1 = require("./credit/credit.module");
const credit_schema_1 = require("./schemas/credit.schema");
const credit_service_1 = require("./credit/credit.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI), users_module_1.UsersModule, wallets_module_1.WalletsModule, mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.UserSchema }, {
                    name: 'Wallet', schema: wallet_schema_1.WalletSchema
                },
                { name: 'Credit', schema: credit_schema_1.CreditSchema }
            ]), wallets_module_1.WalletsModule, credit_module_1.CreditModule],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, wallets_controller_1.WalletsController, credit_controller_1.CreditController],
        providers: [app_service_1.AppService, users_service_1.UsersService, wallets_service_1.WalletsService, credit_service_1.CreditService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map