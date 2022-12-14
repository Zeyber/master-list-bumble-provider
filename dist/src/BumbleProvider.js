"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BumbleProvider = exports.defaultOptions = exports.BUMBLE_NOTIFICATION_MODE = void 0;
var core_1 = require("@master-list/core");
var master_list_facebook_provider_1 = require("@zeyber/master-list-facebook-provider");
var BUMBLE_NOTIFICATION_MODE;
(function (BUMBLE_NOTIFICATION_MODE) {
    BUMBLE_NOTIFICATION_MODE["YOUR_MOVE"] = "YOUR_MOVE";
    BUMBLE_NOTIFICATION_MODE["UNREAD"] = "UNREAD";
})(BUMBLE_NOTIFICATION_MODE = exports.BUMBLE_NOTIFICATION_MODE || (exports.BUMBLE_NOTIFICATION_MODE = {}));
exports.defaultOptions = {
    providerName: "Bumble",
    notifyOn: [
        BUMBLE_NOTIFICATION_MODE.YOUR_MOVE,
        BUMBLE_NOTIFICATION_MODE.UNREAD,
    ],
};
var BumbleProvider = /** @class */ (function (_super) {
    __extends(BumbleProvider, _super);
    function BumbleProvider(options) {
        var _this = _super.call(this, __assign(__assign({}, exports.defaultOptions), options)) || this;
        _this.options = options;
        return _this;
    }
    BumbleProvider.prototype.initialize = function () {
        var _this = this;
        return _super.prototype.initialize.call(this, function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    BumbleProvider.prototype.reload = function () {
        var _this = this;
        return _super.prototype.reload.call(this, function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.update()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); });
    };
    BumbleProvider.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_1;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                                            var consentFrame, consentContent, manageCookiesButton, privacyManagerFrame, privacyManagerContent, rejectButton, loginWithFacebookBtn;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, (0, master_list_facebook_provider_1.loginWithFacebook)({
                                                            page: this.page,
                                                            email: this.options.email,
                                                            password: this.options.password,
                                                        })];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.page.goto("https://bumble.com/get-started", {
                                                                waitUntil: ["load", "networkidle2"],
                                                            })];
                                                    case 2:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.page.waitForSelector('iframe[src*="https://consent.bumble.com"]')];
                                                    case 3:
                                                        consentFrame = _a.sent();
                                                        return [4 /*yield*/, consentFrame.contentFrame()];
                                                    case 4:
                                                        consentContent = _a.sent();
                                                        return [4 /*yield*/, consentContent.waitForSelector('[title="Manage Cookies"]')];
                                                    case 5:
                                                        manageCookiesButton = _a.sent();
                                                        return [4 /*yield*/, manageCookiesButton.click()];
                                                    case 6:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.page.waitForTimeout(3000)];
                                                    case 7:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.page.waitForSelector('iframe[src*="https://consent.bumble.com/privacy-manager"]')];
                                                    case 8:
                                                        privacyManagerFrame = _a.sent();
                                                        return [4 /*yield*/, privacyManagerFrame.contentFrame()];
                                                    case 9:
                                                        privacyManagerContent = _a.sent();
                                                        return [4 /*yield*/, privacyManagerContent.waitForSelector('[title="Reject All"]')];
                                                    case 10:
                                                        rejectButton = _a.sent();
                                                        return [4 /*yield*/, rejectButton.click()];
                                                    case 11:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.page.waitForSelector('div[class="button button--size-m  color-provider-facebook button--filled"]')];
                                                    case 12:
                                                        loginWithFacebookBtn = _a.sent();
                                                        return [4 /*yield*/, loginWithFacebookBtn.click()];
                                                    case 13:
                                                        _a.sent();
                                                        resolve(true);
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); })()];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    reject(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    BumbleProvider.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var markers, chats, notifyOn, _i, markers_1, marker, val;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, this.page.$$("div.contact")];
                                case 1:
                                    markers = _b.sent();
                                    chats = [];
                                    notifyOn = (_a = this.options.notifyOn) !== null && _a !== void 0 ? _a : exports.defaultOptions.notifyOn;
                                    _i = 0, markers_1 = markers;
                                    _b.label = 2;
                                case 2:
                                    if (!(_i < markers_1.length)) return [3 /*break*/, 8];
                                    marker = markers_1[_i];
                                    val = void 0;
                                    if (!(!val && notifyOn.includes(BUMBLE_NOTIFICATION_MODE.UNREAD))) return [3 /*break*/, 4];
                                    return [4 /*yield*/, marker.evaluate(function (el) {
                                            var _a;
                                            return ((_a = el.getElementsByClassName("contact__notification-mark")) === null || _a === void 0 ? void 0 : _a.length)
                                                ? el.getAttribute("data-qa-name")
                                                : undefined;
                                        })];
                                case 3:
                                    val = _b.sent();
                                    _b.label = 4;
                                case 4:
                                    if (!(!val && notifyOn.includes(BUMBLE_NOTIFICATION_MODE.YOUR_MOVE))) return [3 /*break*/, 6];
                                    return [4 /*yield*/, marker.evaluate(function (el) {
                                            var _a;
                                            return ((_a = el.getElementsByClassName("contact__move-label")) === null || _a === void 0 ? void 0 : _a.length)
                                                ? el.getAttribute("data-qa-name")
                                                : undefined;
                                        })];
                                case 5:
                                    val = _b.sent();
                                    _b.label = 6;
                                case 6:
                                    if (val) {
                                        chats.push(val);
                                    }
                                    _b.label = 7;
                                case 7:
                                    _i++;
                                    return [3 /*break*/, 2];
                                case 8: return [2 /*return*/, resolve(chats)];
                            }
                        });
                    }); })];
            });
        });
    };
    return BumbleProvider;
}(core_1.PuppeteerProvider));
exports.BumbleProvider = BumbleProvider;
//# sourceMappingURL=BumbleProvider.js.map