#!/usr/bin/env node


// src/index.ts
import { Command } from "commander";
import pc from "picocolors";
import { cpSync, existsSync, readFileSync, renameSync, writeFileSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";
var __dirname = dirname(fileURLToPath(import.meta.url));
var templateDir = resolve(__dirname, "..", "template");
var program = new Command();
program.name("create-strayl-landing").description("Scaffold a new Strayl landing page").requiredOption("--name <name>", "Name of the new project").action((opts) => {
  const name = opts.name.trim();
  if (!name) {
    console.error(pc.red("Error: --name must not be empty."));
    process.exit(1);
  }
  if (!/^[a-zA-Z0-9_@\/-][a-zA-Z0-9_.\-@\/]*$/.test(name)) {
    console.error(
      pc.red(
        "Error: Invalid project name. Use only alphanumeric characters, hyphens, underscores, dots, and slashes."
      )
    );
    process.exit(1);
  }
  const targetDir = resolve(process.cwd(), name);
  if (existsSync(targetDir)) {
    console.error(
      pc.red(`Error: Directory "${name}" already exists.`)
    );
    process.exit(1);
  }
  if (!existsSync(templateDir)) {
    console.error(
      pc.red("Error: Template directory not found. The package may be corrupted.")
    );
    process.exit(1);
  }
  console.log(pc.cyan(`Creating project "${name}"...`));
  cpSync(templateDir, targetDir, { recursive: true });
  const gitignorePath = join(targetDir, "gitignore");
  if (existsSync(gitignorePath)) {
    renameSync(gitignorePath, join(targetDir, ".gitignore"));
  }
  const pkgJsonPath = join(targetDir, "package.json");
  if (existsSync(pkgJsonPath)) {
    const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"));
    pkgJson.name = name;
    delete pkgJson.private;
    writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + "\n");
  }
  console.log(pc.green(`
Project "${name}" created successfully!
`));
  console.log("Next steps:");
  console.log(pc.cyan(`  cd ${name}`));
  console.log(pc.cyan("  npm install"));
  console.log(pc.cyan("  npm run dev"));
  console.log();
});
program.parse();
//# sourceMappingURL=index.js.map