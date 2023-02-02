/* prettier相关配置 */
module.exports = {
  printWidth: 120, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进使用tab
  semi: false, // 设置分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 设置双引号变成单引号
  quoteProps: 'as-needed',
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: 'none', // 禁止末尾添加逗号 none 末尾添加逗号es5
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  rangeStart: 0,
  ignorePath: '.prettierignore' // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
}
