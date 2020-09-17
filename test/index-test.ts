import TextLintTester from "textlint-tester";
import rule from "../src/index";
const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text",
        {
            text: "自分のことを言ったまでです。"
        }
    ],
    invalid: [
        // single match
        {
            text: "⾃分のことを言ったまでです。",
            errors: [
                {
                    message: "康煕部首の文字が使われています.",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match
        {
            text: `⼀⾒気づかないかもしれません。

しかし、よく見ると、変な⽂字が⼊っていることがわかります。`,
            errors: [
                {
                    message: "康煕部首の文字が使われています.",
                    line: 1,
                    column: 1
                },
                {
                    message: "康煕部首の文字が使われています.",
                    line: 3,
                    column: 13
                }
            ]
        },

    ]
});
