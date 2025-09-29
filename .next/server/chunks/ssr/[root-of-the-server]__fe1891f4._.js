module.exports = {

"[project]/app/components/CourseCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CourseCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
'use client';
;
;
;
function CourseCard({ course, onEnroll, onContinue }) {
    const getDifficultyColor = (difficulty)=>{
        switch(difficulty){
            case 'beginner':
                return 'bg-green-500/20 text-green-400';
            case 'intermediate':
                return 'bg-yellow-500/20 text-yellow-400';
            case 'advanced':
                return 'bg-orange-500/20 text-orange-400';
            case 'expert':
                return 'bg-red-500/20 text-red-400';
            default:
                return 'bg-gray-500/20 text-gray-400';
        }
    };
    const isEnrolled = course.progress !== undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        whileHover: {
            scale: 1.02
        },
        className: "bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 bg-gradient-to-br from-blue-600 to-purple-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: "https://poly.cam/capture/ABE69FEA-A1DF-4CC5-BC65-CF1DB40BFEE8/embed",
                        className: "w-full h-full opacity-50",
                        frameBorder: "0",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`,
                            children: course.difficulty.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/app/components/CourseCard.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CourseCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: course.title
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-sm mb-4 line-clamp-2",
                        children: course.description
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mb-4",
                        children: [
                            "Instructor: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white",
                                children: course.instructor
                            }, void 0, false, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 67,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "w-4 h-4 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-300",
                                        children: [
                                            course.duration_hours,
                                            "h"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-4 h-4 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-300",
                                        children: course.enrolled_students
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-4 h-4 text-yellow-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-300",
                                        children: course.rating.toFixed(1)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-4 h-4 text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-300",
                                children: [
                                    course.modules.length,
                                    " modules"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    isEnrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs text-gray-400 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            course.progress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CourseCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-gray-700 rounded-full h-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${course.progress}%`
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    className: "bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CourseCard.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    isEnrolled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onContinue?.(course.course_id),
                        className: "w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2",
                        children: [
                            "Continue Learning",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onEnroll?.(course.course_id),
                        className: "w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors border border-white/20 flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CourseCard.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            "Enroll Now"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CourseCard.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CourseCard.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CourseCard.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/services/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * API Service for Education Portal
 * Handles all communication with Brain backend for educational features
 */ __turbopack_context__.s({
    "apiService": (()=>apiService),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// API Configuration
const API_BASE_URL = ("TURBOPACK compile-time value", "https://web-production-d7d37.up.railway.app") || 'https://web-production-d7d37.up.railway.app';
// Create axios instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add auth token to requests
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// Add response interceptor for error handling
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.code === 'ERR_NETWORK') {
        console.warn('Network error - using mock data for education portal');
        // Return mock curriculum data for network errors
        return Promise.resolve({
            data: {
                success: true,
                message: 'Using mock data (network unavailable)',
                modules: [
                    {
                        module_id: 'mod_001',
                        title: 'Introduction to Thoth Device',
                        description: 'Learn about the Raspberry Pi, Sense HAT, and PiSugar components',
                        type: 'lesson',
                        difficulty: 'beginner',
                        duration_minutes: 45,
                        order: 1,
                        prerequisites: [],
                        learning_objectives: [
                            'Understand Thoth hardware',
                            'Identify key components',
                            'Setup development environment'
                        ],
                        content: {
                            video_url: 'https://example.com/videos/intro-thoth.mp4',
                            slides_url: 'https://example.com/slides/intro-thoth.pdf',
                            materials: [
                                {
                                    type: 'pdf',
                                    title: 'Thoth Hardware Guide',
                                    url: 'https://example.com/guides/hardware.pdf'
                                },
                                {
                                    type: 'notebook',
                                    title: 'Setup Jupyter Notebook',
                                    url: 'https://example.com/notebooks/setup.ipynb'
                                }
                            ]
                        }
                    },
                    {
                        module_id: 'mod_002',
                        title: 'WiFi Configuration & Network Setup',
                        description: 'Configure WiFi using captive portal and network management',
                        type: 'lab',
                        difficulty: 'beginner',
                        duration_minutes: 90,
                        order: 2,
                        prerequisites: [
                            'mod_001'
                        ],
                        learning_objectives: [
                            'Setup WiFi captive portal',
                            'Configure network settings',
                            'Test connectivity'
                        ],
                        content: {
                            video_url: 'https://example.com/videos/wifi-setup.mp4',
                            lab_instructions: 'https://example.com/labs/wifi-config.md',
                            materials: [
                                {
                                    type: 'code',
                                    title: 'WiFi Configuration Script',
                                    url: 'https://example.com/code/wifi_setup.py'
                                },
                                {
                                    type: 'pdf',
                                    title: 'Network Troubleshooting Guide',
                                    url: 'https://example.com/guides/network.pdf'
                                }
                            ]
                        }
                    },
                    {
                        module_id: 'mod_003',
                        title: 'Collecting Sensor Data',
                        description: 'Use Sense HAT to collect temperature, humidity, pressure, and motion data',
                        type: 'lab',
                        difficulty: 'intermediate',
                        duration_minutes: 120,
                        order: 3,
                        prerequisites: [
                            'mod_002'
                        ],
                        learning_objectives: [
                            'Read sensor data',
                            'Store data locally',
                            'Visualize sensor readings'
                        ],
                        content: {
                            video_url: 'https://example.com/videos/sensor-data.mp4',
                            notebook_url: 'https://example.com/notebooks/sensor_collection.ipynb',
                            materials: [
                                {
                                    type: 'code',
                                    title: 'Sensor Reading Library',
                                    url: 'https://example.com/code/sensors.py'
                                },
                                {
                                    type: 'dataset',
                                    title: 'Sample Sensor Data',
                                    url: 'https://example.com/data/sample_sensors.csv'
                                },
                                {
                                    type: 'pdf',
                                    title: 'Sense HAT API Reference',
                                    url: 'https://example.com/docs/sensehat-api.pdf'
                                }
                            ]
                        }
                    },
                    {
                        module_id: 'mod_004',
                        title: 'Introduction to AI/ML on Edge Devices',
                        description: 'Learn machine learning concepts and edge computing with TensorFlow Lite',
                        type: 'lesson',
                        difficulty: 'intermediate',
                        duration_minutes: 150,
                        order: 4,
                        prerequisites: [
                            'mod_003'
                        ],
                        learning_objectives: [
                            'Understand edge ML',
                            'Train simple models',
                            'Deploy to Raspberry Pi'
                        ],
                        content: {
                            video_url: 'https://example.com/videos/edge-ml.mp4',
                            slides_url: 'https://example.com/slides/edge-ml.pdf',
                            notebook_url: 'https://example.com/notebooks/edge_ml_intro.ipynb',
                            materials: [
                                {
                                    type: 'code',
                                    title: 'TensorFlow Lite Examples',
                                    url: 'https://example.com/code/tflite_examples.py'
                                },
                                {
                                    type: 'model',
                                    title: 'Pre-trained Sensor Model',
                                    url: 'https://example.com/models/sensor_classifier.tflite'
                                },
                                {
                                    type: 'pdf',
                                    title: 'Edge Computing Guide',
                                    url: 'https://example.com/guides/edge-computing.pdf'
                                }
                            ]
                        }
                    },
                    {
                        module_id: 'mod_005',
                        title: 'Federated Learning with Multiple Devices',
                        description: 'Implement federated learning using Flower framework across Thoth devices',
                        type: 'project',
                        difficulty: 'advanced',
                        duration_minutes: 180,
                        order: 5,
                        prerequisites: [
                            'mod_004'
                        ],
                        learning_objectives: [
                            'Setup Flower client',
                            'Participate in federated training',
                            'Understand privacy preservation'
                        ],
                        content: {
                            video_url: 'https://example.com/videos/federated-learning.mp4',
                            project_guide: 'https://example.com/projects/federated-learning.md',
                            notebook_url: 'https://example.com/notebooks/federated_learning.ipynb',
                            materials: [
                                {
                                    type: 'code',
                                    title: 'Flower Client Implementation',
                                    url: 'https://example.com/code/flower_client.py'
                                },
                                {
                                    type: 'code',
                                    title: 'Federated Training Script',
                                    url: 'https://example.com/code/federated_train.py'
                                },
                                {
                                    type: 'pdf',
                                    title: 'Differential Privacy Guide',
                                    url: 'https://example.com/guides/differential-privacy.pdf'
                                },
                                {
                                    type: 'dataset',
                                    title: 'Federated Training Dataset',
                                    url: 'https://example.com/data/federated_data.zip'
                                }
                            ]
                        }
                    },
                    {
                        module_id: 'mod_006',
                        title: 'Capstone: Smart Home Monitor',
                        description: 'Build a complete IoT solution for smart home monitoring with AI predictions',
                        type: 'project',
                        difficulty: 'expert',
                        duration_minutes: 300,
                        order: 6,
                        prerequisites: [
                            'mod_005'
                        ],
                        learning_objectives: [
                            'Design IoT architecture',
                            'Implement real-time monitoring',
                            'Deploy production system'
                        ],
                        content: {
                            video_url: 'https://example.com/videos/capstone-project.mp4',
                            project_template: 'https://example.com/templates/smart-home-monitor.zip',
                            requirements: 'https://example.com/projects/capstone-requirements.md',
                            materials: [
                                {
                                    type: 'code',
                                    title: 'Smart Home Dashboard',
                                    url: 'https://example.com/code/dashboard.py'
                                },
                                {
                                    type: 'code',
                                    title: 'Alert System',
                                    url: 'https://example.com/code/alerts.py'
                                },
                                {
                                    type: 'model',
                                    title: 'Anomaly Detection Model',
                                    url: 'https://example.com/models/anomaly_detector.pkl'
                                },
                                {
                                    type: 'pdf',
                                    title: 'Deployment Guide',
                                    url: 'https://example.com/guides/deployment.pdf'
                                },
                                {
                                    type: 'video',
                                    title: 'Demo Walkthrough',
                                    url: 'https://example.com/videos/capstone-demo.mp4'
                                }
                            ]
                        }
                    }
                ],
                courses: [
                    {
                        course_id: 'course_001',
                        title: 'AI & IoT with Thoth',
                        description: 'Complete course on IoT and AI',
                        instructor: 'Thoth Team',
                        difficulty: 'intermediate',
                        duration_hours: 15,
                        modules: [
                            'mod_001',
                            'mod_002'
                        ],
                        enrolled_students: 0,
                        rating: 4.8
                    }
                ]
            }
        });
    }
    return Promise.reject(error);
});
// API Service
class ApiService {
    // Authentication
    async login(email, password) {
        const response = await api.post('/token', {
            email,
            password
        });
        if (response.data.access_token) {
            localStorage.setItem('auth_token', response.data.access_token);
        }
        return response.data;
    }
    async register(email, password, role = 'student') {
        const response = await api.post('/register', {
            email,
            password,
            role
        });
        return response.data;
    }
    async getProfile() {
        const response = await api.get('/profile');
        return response.data;
    }
    // Curriculum
    async getCurriculum(params) {
        const response = await api.get('/curriculum', {
            params
        });
        return response.data;
    }
    async getModuleDetails(moduleId) {
        const response = await api.get(`/curriculum/${moduleId}`);
        return response.data;
    }
    async updateProgress(progress) {
        const response = await api.post('/curriculum/progress', progress);
        return response.data;
    }
    async getStudentProgress(studentId, courseId) {
        const url = courseId ? `/curriculum/progress/${studentId}?course_id=${courseId}` : `/curriculum/progress/${studentId}`;
        const response = await api.get(url);
        return response.data;
    }
    async submitLab(submission) {
        const response = await api.post('/curriculum/lab/submit', submission);
        return response.data;
    }
    async getLeaderboard(courseId, limit = 10) {
        const params = {
            limit
        };
        if (courseId) params.course_id = courseId;
        const response = await api.get('/curriculum/leaderboard', {
            params
        });
        return response.data;
    }
    // Device Configuration for Labs
    async configureDevice(deviceId, config) {
        const response = await api.post(`/device/${deviceId}/config`, config);
        return response.data;
    }
    async getDeviceStatus(deviceId) {
        const response = await api.get(`/device/${deviceId}/status`);
        return response.data;
    }
    // Sensor Data for Labs
    async getSensorData(deviceId) {
        const response = await api.get(`/sensors/current?device_id=${deviceId}`);
        return response.data;
    }
    async controlSensors(deviceId, config) {
        const response = await api.post('/sensors/control', {
            device_id: deviceId,
            ...config
        });
        return response.data;
    }
    // Training for Advanced Labs
    async setupTraining(config) {
        const response = await api.post('/training/setup', config);
        return response.data;
    }
    async getTrainingStatus(jobId) {
        const response = await api.get(`/training/status?job_id=${jobId}`);
        return response.data;
    }
    // Files and Resources
    async downloadResource(filePath) {
        const response = await api.get(`/file/download`, {
            params: {
                path: filePath
            },
            responseType: 'blob'
        });
        return response.data;
    }
    async uploadLabWork(formData) {
        const response = await api.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    // Community Features
    async getForumPosts(moduleId) {
        // This would connect to Firebase or another backend
        // Mock implementation for now
        return {
            posts: [
                {
                    id: '1',
                    author: 'Student A',
                    title: 'Help with sensor calibration',
                    content: 'Having issues with temperature sensor readings...',
                    created_at: new Date().toISOString(),
                    replies: 3
                }
            ]
        };
    }
    async createForumPost(post) {
        // Mock implementation
        return {
            success: true,
            post_id: 'new-post-id'
        };
    }
    // Project Showcase
    async getProjects(filter) {
        // Mock implementation
        return {
            projects: [
                {
                    id: '1',
                    title: 'Smart Plant Monitor',
                    author: 'Student B',
                    description: 'IoT system for monitoring plant health',
                    image_url: '/project1.jpg',
                    likes: 42,
                    views: 156
                }
            ]
        };
    }
    async submitProject(project) {
        // Mock implementation
        return {
            success: true,
            project_id: 'new-project-id'
        };
    }
}
const apiService = new ApiService();
const __TURBOPACK__default__export__ = apiService;
}}),
"[project]/app/courses/page.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/app/courses/page.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__fe1891f4._.js.map