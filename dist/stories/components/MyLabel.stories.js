"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroudColor = exports.CustomFontColor = exports.Tertiary = exports.Secundary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
    tags: ['autodocs'],
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    label: 'Hello',
    allcaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allcaps: true
};
exports.Secundary = Template.bind({});
exports.Secundary.args = {
    size: 'normal',
    color: 'text-secundary' // primary | secundary | tertiary
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'text-tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    fontColor: '#8f0988',
    size: 'h1'
};
exports.CustomBackgroudColor = Template.bind({});
exports.CustomBackgroudColor.args = {
    fontColor: '#eeeeee',
    backgroundColor: '#000000',
    size: 'h1'
};
