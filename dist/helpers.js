"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recovery = exports.getResult = exports.writeRaffle = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("fs");
const path_1 = require("path");
const http_1 = require("http");
const API = 'https://servicebus2.caixa.gov.br/portaldeloterias/api';
function updateRaffle(lottery, count = 0, data) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const last = yield getResult(lottery);
        let raffle = data || require(`../data/${lottery}.json`) || {};
        let result = null;
        while (true)
            if (!(++count in raffle)) {
                result = yield getResult(lottery, count);
                if (!result) {
                    if (last && parseInt((_b = (_a = Object.keys(last)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 0) > count)
                        yield updateRaffle(lottery, count, raffle);
                    else
                        console.warn(`The search for result of lottery ${lottery.toUpperCase()} ended in raffle ${count - 1}`);
                    break;
                }
                raffle = Object.assign(Object.assign({}, raffle), result);
                writeRaffle(lottery, raffle);
                console.log(`Added in '${lottery}': ${JSON.stringify(result)}`);
            }
        ;
    });
}
exports.default = updateRaffle;
function writeRaffle(lottery, raffle) {
    (0, fs_1.writeFileSync)((0, path_1.join)('data', lottery + '.json'), JSON.stringify(raffle));
}
exports.writeRaffle = writeRaffle;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
function getResult(lottery, number) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const request = yield axios_1.default.get(`${API}/${lottery}/${(number === null || number === void 0 ? void 0 : number.toString()) || ''}`, {
                httpAgent: new http_1.Agent({ keepAlive: true }),
                headers: { Host: API.replace(/^(https?:\/\/)?([\w\.]+).*/, '$2') }
            });
            let data = [];
            switch (lottery) {
                case 'timemania':
                case 'diadesorte':
                    data = [
                        ...request.data.dezenasSorteadasOrdemSorteio,
                        request.data.nomeTimeCoracaoMesSorte
                    ];
                    break;
                case 'loteca':
                    data = request.data.listaResultadoEquipeEsportiva.map((obj) => `
                    ${obj.nomeEquipeUm.replace(/\W/g, '')}:${obj.nuGolEquipeUm.replace(/\W/g, '')}-
                    ${obj.nomeEquipeDois.replace(/\W/g, '')}:${obj.nuGolEquipeDois.replace(/\W/g, '')}
                `);
                    break;
                default:
                    data = request.data.dezenasSorteadasOrdemSorteio;
                    break;
            }
            return { [request.data.numero]: data };
        }
        catch (error) {
            return null;
        }
    });
}
exports.getResult = getResult;
function recovery(lottery, data) {
    let raffle = {};
    data.forEach((v, k) => {
        raffle = Object.assign(Object.assign({}, raffle), { [k + 1]: v });
    });
    writeRaffle(lottery, raffle);
}
exports.recovery = recovery;
