const chalk = require('chalk');

// 提交信息路径
const msgPath =
  process.argv[process.argv.length - 1] || process.env.GIT_PARAMS || process.env.HUSKY_GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

// 提交信息正则校验
const commitRE =
  /^(feat|fix|docs|UI|refactor|perf|workflow|build|CI|typos|chore|tests|types|wip|release|dep|locale)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(
    '\n',
    `  ${chalk.bgRed.white(' ERROR: ')} ${chalk.red(`✘ 提交信息验证失败！`)}\n\n${chalk.red(
      `  请根据实际情况依据以下格式修改提交信息（模块范围可省略）:\n\n`,
    )}
    ${chalk.green(`<type>[(scope)?]: <message>\n`)}
    ${chalk.green(`feat(模块): 添加了功能`)}
    ${chalk.green(`fix(模块): 修复了 bug`)}
    ${chalk.green(`docs(模块): 更新了文档`)}
    ${chalk.green(`UI(模块): 修改了样式`)}
    ${chalk.green(`chore(模块): 对脚手架做更改`)}
    ${chalk.green(`locale(模块): 为国际化做更改\n`)}
    ${chalk.green(
      `其他提交类型: refactor, perf, workflow, build, CI, typos, tests, types, wip, release, dep\n`,
    )}`,
  );
  process.exit(1);
}

export default () => {};
