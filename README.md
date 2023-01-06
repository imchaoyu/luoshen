# luoshen
![GitHub last commit](https://img.shields.io/github/last-commit/imchaoyu/luoshen)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/eslint?color=light&label=ESLint&logo=eslint&logoColor=purple)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/prettier?color=light&label=Prettier&logo=prettier)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/stylelint?color=light&logo=stylelint)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/@babel/core?color=light&logo=babel) 
![GitHub all releases](https://img.shields.io/github/downloads/imchaoyu/luoshen/total)

> 洛神，中国古代神话中的人物，其形象十分美丽，“翩若惊鸿、婉若游龙、云髻峨峨、皓齿内鲜”。

> 以“洛神”命名，希望在繁琐复杂的前端样式规范配置中，减轻工作量，让前端格式化更简单更优美。

> 包含 Prettier，ESLint，Stylelint， TypeScript 的配置文件合集,并使用 gitHook 对 git 提交信息进行校验。

# 支持项目类型

> 根据不同项目加载不同配置项，减少多余配置

- React
- Vue
- TypeScript
- nodejs

# 使用

安装本包和 Prettier，ESLint，Stylelint,如果项目使用 TypeScript,则再安装 TypeScript,洛神会自动支持 TypeScript 的格式化.

```shell
npm install -D luoshen prettier eslint stylelint
```

- 配置 `.eslintrc.js`

  ```javascript
  module.exports = {
    extends: [require.resolve('luoshen/dist/eslint')],

    rules: {
      // your rules
    },
  };
  ```

- 配置 `.prettierrc.js`

```javascript
const luoshen = require('luoshen');

module.exports = {
  ...luoshen.prettier,
};
```

- 配置 `.stylelintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('luoshen/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

- 配置 `gitHook`
