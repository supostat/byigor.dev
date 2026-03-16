import type { ThemeRegistration } from "shiki";

export const amberTheme: ThemeRegistration = {
  name: "amber-crt",
  type: "dark",
  colors: {
    "editor.background": "#0A0800",
    "editor.foreground": "#FFB000",
    "editorLineNumber.foreground": "#664800",
    "editorLineNumber.activeForeground": "#A87400",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#806000", fontStyle: "italic" },
    },
    {
      scope: [
        "keyword",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.operator.logical",
        "keyword.operator.new",
      ],
      settings: { foreground: "#FFD060" },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call",
      ],
      settings: { foreground: "#FFB000" },
    },
    {
      scope: [
        "string",
        "string.quoted",
        "punctuation.definition.string",
      ],
      settings: { foreground: "#D4A030" },
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: { foreground: "#FFD060" },
    },
    {
      scope: [
        "variable",
        "variable.other",
        "variable.parameter",
      ],
      settings: { foreground: "#FFB000" },
    },
    {
      scope: [
        "entity.name.class",
        "entity.name.type",
        "entity.other.inherited-class",
        "support.class",
      ],
      settings: { foreground: "#FFD060", fontStyle: "bold" },
    },
    {
      scope: ["entity.name.tag"],
      settings: { foreground: "#FFD060" },
    },
    {
      scope: [
        "punctuation",
        "meta.brace",
        "punctuation.separator",
        "punctuation.terminator",
      ],
      settings: { foreground: "#A87400" },
    },
    {
      scope: ["constant.other.symbol", "constant.other.symbol.hashkey"],
      settings: { foreground: "#D4A030" },
    },
    {
      scope: [
        "variable.other.constant",
        "constant.other",
      ],
      settings: { foreground: "#FFD060" },
    },
    {
      scope: [
        "entity.name.module",
        "entity.name.namespace",
      ],
      settings: { foreground: "#FFD060", fontStyle: "bold" },
    },
    {
      scope: ["keyword.operator", "keyword.operator.assignment"],
      settings: { foreground: "#A87400" },
    },
    {
      scope: ["variable.other.readwrite.instance"],
      settings: { foreground: "#D4A030" },
    },
    {
      scope: ["meta.embedded", "source.groovy.embedded"],
      settings: { foreground: "#FFB000" },
    },
  ],
};
