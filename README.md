# luoshen
![GitHub last commit](https://img.shields.io/github/last-commit/imchaoyu/luoshen)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/eslint?color=light&label=ESLint&logo=eslint&logoColor=purple)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/prettier?color=light&label=Prettier&logo=prettier)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/stylelint?color=light&logo=stylelint)
![](https://img.shields.io/github/package-json/dependency-version/imchaoyu/luoshen/@babel/core?color=light&logo=babel) 
![GitHub all releases](https://img.shields.io/github/downloads/imchaoyu/luoshen/total)

> 洛神，中国古代神话中的人物，其形象十分美丽，“翩若惊鸿、婉若游龙、云髻峨峨、皓齿内鲜”。

> 以“洛神”命名，希望在繁琐复杂的前端样式规范配置中，减轻工作量，让前端格式化更简单更优美。

> 包含 Prettier，ESLint，Stylelint， TypeScript 的配置文件合集,并使用 husky 对 git 提交信息进行校验。

# 功能

- [x] React
- [x] TypeScript
- [x] nodejs
- [x] husky commit-msg
- [x] Vue

> 根据不同项目加载不同配置项，减少多余配置

# 使用

安装本包和 Prettier，ESLint，Stylelint,如果项目使用 TypeScript,则再安装 TypeScript,洛神会自动支持 TypeScript 的格式化.

```shell
npm install -D luoshen prettier eslint stylelint
```

- 配置 `.eslintrc.js`

  ```javascript
  module.exports = {
    extends: [require.resolve('luoshen/dist/eslint')],
    // vue 项目使用以下配置项
    // extends: [require.resolve('luoshen/dist/eslint-vue')],
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

- 配置 `husky`
  1. 安装husky
   
  ```shell
  npm install -D husky
  ```

  2. package.json 增加prepare命令
   
  ```json
  "script":{
    "prepare": "husky install"
  }
  ```
  然后运行`npm run prepare`
  或者直接运行以下命令：
  ```shell
  npm pkg set scripts.prepare="husky install"
  npm run prepare
  ```

  3. 添加commit-msg执行脚本
   
  ```shell
  npx husky add .husky/commit-msg 'npx luoshen verify-commit "$1"'
  ```

# 编辑器设置
> 项目文件配置好后,设置编辑器,便可以在每次保存时自动格式化
## VS Code
  - 安装ESLint、Prettier和StyleLint插件
  - formatOnSave 关闭
  - editor.codeActionsOnSave 修改 
  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  ```
  - stylelint.validate内增加 vue支持
  ```json
  "stylelint.validate": [
    "css",
    "less",
    "postcss",
    "vue"
  ],
  ```
