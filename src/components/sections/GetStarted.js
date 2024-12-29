import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, Phone, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
export function GetStarted() {
    return (_jsx("div", { className: "bg-gray-50 py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-extrabold text-gray-900 sm:text-4xl", children: "Get Started with RhythemicBeats" }), _jsx("p", { className: "mt-4 text-xl text-gray-500", children: "Choose the option that best suits your needs" })] }), _jsxs("div", { className: "mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2", children: [_jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "px-6 py-8", children: [_jsx("div", { className: "flex justify-center", children: _jsx(Phone, { className: "h-12 w-12 text-red-500" }) }), _jsx("h3", { className: "mt-4 text-xl font-semibold text-center text-gray-900", children: "Book Consultation" }), _jsx("p", { className: "mt-2 text-gray-500 text-center", children: "Schedule a free consultation with our healthcare experts" }), _jsx("div", { className: "mt-6", children: _jsxs(Button, { onClick: () => window.location.href = '/consultation', className: "w-full", children: ["Book Now", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) })] }) }), _jsx("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: _jsxs("div", { className: "px-6 py-8", children: [_jsx("div", { className: "flex justify-center", children: _jsx(FileText, { className: "h-12 w-12 text-red-500" }) }), _jsx("h3", { className: "mt-4 text-xl font-semibold text-center text-gray-900", children: "Download Guide" }), _jsx("p", { className: "mt-2 text-gray-500 text-center", children: "Get our comprehensive guide on heart health monitoring" }), _jsx("div", { className: "mt-6", children: _jsxs(Button, { onClick: () => window.location.href = '/guide', className: "w-full", children: ["Download", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) })] }) })] })] }) }));
}
//# sourceMappingURL=GetStarted.js.map