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
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@sakuraapi/api");
exports.SakuraApi = api_1.SakuraApi;
const log_service_1 = require("../services/log-service");
const user_model_1 = require("../models/user-model");
let SomeApi = class SomeApi extends api_1.SapiRoutableMixin() {
    constructor(logservice) {
        super();
        this.logservice = logservice;
    }
    users(req, res, next) {
        console.log('coming to getusers');
        const custRes = res.locals;
        custRes.send(200, { msg: 'Swethakrgs from olive', error: 'No error' });
        next();
    }
    saveUser(req, res, next) {
        console.log(req.body);
        const user = req.body.name;
        this.logservice.info('savingUser', user);
        const custRes = res.locals;
        custRes.send(200, { msg: 'this is checking post data from ' + req.body.name, error: 'No error' });
        next();
    }
};
__decorate([
    api_1.Route({
        method: 'get',
        path: '/getData'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], SomeApi.prototype, "users", null);
__decorate([
    api_1.Route({
        method: 'post',
        path: '/usersData'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], SomeApi.prototype, "saveUser", null);
SomeApi = __decorate([
    api_1.Routable({
        baseUrl: '/users',
        model: user_model_1.UserModel
    }),
    __metadata("design:paramtypes", [log_service_1.LogService])
], SomeApi);
exports.SomeApi = SomeApi;
//# sourceMappingURL=some-api.js.map