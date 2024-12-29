import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Download, FileText, Book } from 'lucide-react';
function Button({ children, className = '', disabled = false, type = 'button', }) {
    return (_jsx("button", { type: type, className: `py-3 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition ${className}`, disabled: disabled, children: children }));
}
// Guide Component
export function Guide() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50 pt-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 text-center", children: "Heart Health Monitoring Guide" }), _jsx("p", { className: "mt-4 text-xl text-gray-500 text-center", children: "Download our comprehensive guide to heart health monitoring" }), _jsxs("div", { className: "mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-900", children: "What's Inside" }), _jsxs("ul", { className: "mt-6 space-y-4", children: [_jsxs("li", { className: "flex items-center", children: [_jsx(FileText, { className: "h-5 w-5 text-red-500 mr-3" }), _jsx("span", { children: "Understanding ECG Basics" })] }), _jsxs("li", { className: "flex items-center", children: [_jsx(Book, { className: "h-5 w-5 text-red-500 mr-3" }), _jsx("span", { children: "Heart Health Best Practices" })] }), _jsxs("li", { className: "flex items-center", children: [_jsx(Download, { className: "h-5 w-5 text-red-500 mr-3" }), _jsx("span", { children: "Device Usage Instructions" })] })] }), _jsxs(Button, { className: "w-full mt-8", children: ["Download Guide", _jsx(Download, { className: "ml-2 h-5 w-5" })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-900", children: "Guide Preview" }), _jsx("div", { className: "mt-6 aspect-w-16 aspect-h-9", children: _jsx("img", { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", alt: "Guide Preview", className: "rounded-lg object-cover" }) })] })] })] }) }));
}
//# sourceMappingURL=Guide.js.map