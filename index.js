#!/usr/bin/env node
require("./utils/initial");
const { program } = require("commander");
const json = require("@/package.json");


program
  .name("cyber-component")
  .usage("cyber-component <command>")
  .version(json.version);

program
  .command("dev")
  .description("编译source文件夹的")
  .action(require("@/actions/devWatch"));

program
  .command("build")
  .description("编译source文件夹的")
  .action(require("@/actions/build"));

program.parse(process.argv);


