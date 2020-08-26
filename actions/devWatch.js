// 为什么是这样使用的请案例参考:
// https://github.com/ant-design/antd-tools/blob/master/lib/cli/run.js
const gulp = require("gulp");
const path = require("path");
const watch = require("gulp-watch");
const buildProcess = require("@/scripts/buildProcess");

module.exports = () => {
  const watchPattern = path.join(process.cwd(), "./src/**/*");
  gulp.task("watch", () => {
    return watch(watchPattern, buildProcess);
  });
  gulp.task("watch").apply(gulp);
};
