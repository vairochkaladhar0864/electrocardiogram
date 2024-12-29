"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_1 = __importDefault(require("./App"));
require("./index.css");
(0, client_1.createRoot)(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
//# sourceMappingURL=main.js.map