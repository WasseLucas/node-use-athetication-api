"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const status_routes_1 = __importDefault(require("./routes/status.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(users_routes_1.default);
app.use(status_routes_1.default);
app.get('/status', (req, res, next) => {
    res.status(200).send({ foo: "Sucesso!" });
});
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000');
});
