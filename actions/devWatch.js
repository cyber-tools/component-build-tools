// 为什么是这样使用的请案例参考:
// https://github.com/ant-design/antd-tools/blob/master/lib/cli/run.js
const gulp = require("gulp");
const path = require("path");
const watch = require("watch");
const buildProcess = require("@/scripts/buildProcess");

module.exports = () => {
  const watchPath = path.resolve(process.cwd(), "./src/");
  async function developmentTask() {
    gulp.task("build", buildProcess);
    await gulp.task("build").apply(gulp);
  };
  watch.watchTree(watchPath, developmentTask);
};