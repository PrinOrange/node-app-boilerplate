# Nodejs App with TypeScript 开发模板

这是一个关于 Nodejs with TypeScript 的项目开发模板.

由Nodejs作为运行环境、TypeScript作为开发语言，并使用Webpack打包构建生成App。

可以根据自己的需要调整相关依赖和配置文件。 

## 用法

如果你在github上访问本项目，可以直接使用本项目的模板。点击 `Use this template` 来创建你的项目。或者可以在你的目录下使用这个命令：

```bash
git clone --depth 1 --branch main https://github.com/PrinOrange/node-app-boilerplate <your-project-name>
cd <your-project-name>
npm install
```
安装完依赖项后即可开始你的项目。

## 脚本说明

打包构建

```bash
npm run build
```

以开发模式运行。 在开发模式下运行程序会启用热重启。

```bash
npm run dev
```

以产品模式运行。 但是在生产中运行时不会启用热重启。

```bash
npm run start
```

要清理构建后产物，您可以使用 `clean` 命令。 它将清除所有构建工件，包括生产模式和开发模式下的产物。

```
npm run clean
```

## 项目贡献
欢迎对本项目提出Pull Request。对于较大的改动，请先提出issue进行评估。