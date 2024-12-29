"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = Footer;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const Logo_1 = require("../ui/Logo");
const contact_1 = require("../../config/contact");
function Footer() {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "bg-gray-900 text-white py-12", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(Logo_1.Logo, { size: "sm", className: "mr-2" }), (0, jsx_runtime_1.jsx)("span", { className: "ml-2 text-xl font-bold", children: "RhythemicBeats" })] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-gray-400", children: "Advanced portable ECG technology for your peace of mind." })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }), (0, jsx_runtime_1.jsxs)("ul", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#features", className: "text-gray-400 hover:text-white transition-colors", children: "Features" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#specifications", className: "text-gray-400 hover:text-white transition-colors", children: "Specifications" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: "#contact", className: "text-gray-400 hover:text-white transition-colors", children: "Contact" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-3", children: [contact_1.contactInfo.phones.map((phone) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Phone, { className: "h-5 w-5 text-red-500 mr-2" }), (0, jsx_runtime_1.jsx)("span", { className: "text-gray-400", children: phone })] }, phone))), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { className: "h-5 w-5 text-red-500 mr-2" }), (0, jsx_runtime_1.jsx)("span", { className: "text-gray-400", children: contact_1.contactInfo.email })] })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-12 pt-8 border-t border-gray-800 text-center text-gray-400", children: (0, jsx_runtime_1.jsxs)("p", { children: ["\u00A9 ", new Date().getFullYear(), " RhythemicBeats. All rights reserved."] }) })] }) }));
}
//# sourceMappingURL=Footer.js.map