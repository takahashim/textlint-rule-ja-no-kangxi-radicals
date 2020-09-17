# textlint-rule-ja-no-kangxi-radicals

textlint rule to ban the Kangxi Radicals (康煕部首)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-no-kangxi-radicals

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-no-kangxi-radicals": true
    }
}
```

Via CLI

```
textlint --rule ja-no-kangxi-radicals README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © Masayoshi Takahashi
