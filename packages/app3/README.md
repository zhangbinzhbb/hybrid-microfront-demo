## Introduction

## 文档 1

[Documentation](https://www.yuque.com/docs/share/8b1729e4-86a8-4faa-b4d6-3a1fd8bea20d?# 《系统介绍》) for more information

## node 版本

```
nvm 常用命令
- nvm install stable 安装最新稳定版 node
- nvm install <version> 安装指定版本，如：安装 v4.4.0，nvm install v4.4.0
- nvm uninstall <version> 删除已安装的指定版本，语法与 install 类似
- nvm use <version> 切换使用指定的版本 node
- nvm ls 列出所有安装的版本
- nvm alias default <version> 如： nvm alias default v11.1.0
- nvm list available 查看线上所有版本
```

## Getting started

```bash
# clone the project

# enter the project directory
cd .

# install dependency
npm install


建议不要用 cnpm 安装 会有各种诡异的 bug 可以通过如下操作解决 npm 下载速度慢的问题

npm install --registry=https://registry.npm.taobao.org

若安装缓慢报错，可尝试用 cnpm 或别的镜像源自行安装：rm -rf node_modules && cnpm install

# develop
npm run dev

This will automatically open http://localhost:9527

```

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

## 代码提交规范

```
feat：新功能（feature）
fix：修补bug
docs：文档更新（documentation）
style：格式，不影响代码含义的更改（空白，格式，缺少分号等）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
perf: 性能优化
test：添加缺失的测试或更正现有的测试
chore：构建过程或辅助工具的变动
revert：回退commit
```

## 功能

## 路由权限

[Documentation](./src/store/menu.js)

### 说明

- 配置化 utils 文件夹内文件

## ESlint 忽略文件校验问题

```
 在文件顶部加入这个 针对整个文件 /* eslint-disable */
 对某一行代码的校验 // eslint-disable-line
 忽略对下一行的校验 // eslint-disable-next-line
 忽略驼峰校验 /* eslint-disable camelcase */
 忽略下一行的驼峰校验 // eslint-disable-next-line camelcase
 忽略空格校验 /* eslint-disable no-useless-escape */
```

## 自定义正则表达式

```
1.手机验证
reg: /^1[3|4|5|7|8][0-9]{9}$/
message: 请输入正确的手机号码

2.传真验证
reg: /^(\d{3,4}-)?\d{7,8}$/
message: 请输入正确传真

3.税务号验证
reg: /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/
message: 请输入正确税务号
```

## 组件库设计

- 前端开发范式
- vite + vue3.0 + typescript 工程化搭建
- eslint + prettier + husky7 + commitLint + githooks 最佳实践
- jest 单元测试、puppeteer 集成测试、快照测试、和代码覆盖率
- Storybook 故事编写、用例驱动和组件文档生成
- GitHub Actions 自动发布 npm 和文档的持续集成部署

## Changelog

## Online Demo

## Donate

## Browsers support

## License
