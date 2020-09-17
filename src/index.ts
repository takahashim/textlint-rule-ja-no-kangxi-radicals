import { TextlintRuleModule } from "@textlint/types";

export interface Options {
    // if the Str includes `allows` word, does not report it
    allows?: string[];
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const {Syntax, RuleError, report, getSource} = context;
    const allows = options.allows || [];

    // https://unicode.org/charts/nameslist/c_2F00.html
    const KangxiRadicalsPat = /[\u2F00-\u2FD5]+/g
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text
            let matches: RegExpExecArray | null;
            while (matches = KangxiRadicalsPat.exec(text)) { // Found Kangxi Radicals
                const isIgnored = allows.some(allow => text.includes(allow));
                if (isIgnored) {
                    return;
                }
                const radical = matches[0];
                const index = matches.index;
                const ruleError = new RuleError(`康煕部首の文字 '${radical}' が使われています.`, {
                    index: index // padding of index
                });
                report(node, ruleError);
            }
        }
    }
};
export default report;
