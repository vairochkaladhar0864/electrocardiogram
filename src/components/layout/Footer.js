import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { contactInfo } from '../../config/contact';
export function Footer() {
    return (_jsx("footer", { className: "bg-gray-900 text-white py-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Logo, { size: "sm", className: "mr-2" }), _jsx("span", { className: "ml-2 text-xl font-bold", children: "RhythemicBeats" })] }), _jsx("p", { className: "mt-4 text-gray-400", children: "Advanced portable ECG technology for your peace of mind." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Quick Links" }), _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx("a", { href: "#features", className: "text-gray-400 hover:text-white transition-colors", children: "Features" }) }), _jsx("li", { children: _jsx("a", { href: "#specifications", className: "text-gray-400 hover:text-white transition-colors", children: "Specifications" }) }), _jsx("li", { children: _jsx("a", { href: "#contact", className: "text-gray-400 hover:text-white transition-colors", children: "Contact" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Contact Us" }), _jsxs("div", { className: "space-y-3", children: [contactInfo.phones.map((phone) => (_jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "h-5 w-5 text-red-500 mr-2" }), _jsx("span", { className: "text-gray-400", children: phone })] }, phone))), _jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 text-red-500 mr-2" }), _jsx("span", { className: "text-gray-400", children: contactInfo.email })] })] })] })] }), _jsx("div", { className: "mt-12 pt-8 border-t border-gray-800 text-center text-gray-400", children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " RhythemicBeats. All rights reserved."] }) })] }) }));
}
//# sourceMappingURL=Footer.js.map