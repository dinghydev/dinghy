import { rendererMapping } from "./renderMapping.ts";
import Debug from "debug";

import {
  containerAppHome,
  execCmd,
  isCi,
  loadConfig,
  parseOptions,
  reactiacAppConfig,
  renderOptions,
  setupDebug,
} from "@reactiac/cli/utils";
import { deepMerge, doWithStacks } from "@reactiac/base-components";
import chalk from "chalk";
const debug = Debug("render");
try {
  setupDebug();
  await loadConfig();

  const loadApp = async (renderOptions: any) => {
    const appFullPath = `${containerAppHome}/${renderOptions.stack.app}`;
    debug("loading app from %O", appFullPath);
    const app = await import(appFullPath);
    if (app.renderOptions) {
      deepMerge(renderOptions, app.renderOptions);
      debug("applied app render options: %O", app.renderOptions);
    }
    return app.App;
  };

  debug("render started at %O", new Date());
  const cmdOptions = parseOptions(renderOptions, Deno.args, ["render"]);

  const options: any = deepMerge({}, reactiacAppConfig);
  if (cmdOptions["tf-generateImport"]) {
    options.tf ??= {};
    options.tf.generateImport = true;
  }
  await doWithStacks(
    options,
    cmdOptions.stack,
    async (stackRenderOptions: any) => {
      const app = await loadApp(stackRenderOptions);
      for (const formatString of cmdOptions.format || ["default"]) {
        const renderers =
          rendererMapping[formatString as keyof typeof rendererMapping];
        for (const renderer of renderers) {
          await renderer(app, stackRenderOptions, cmdOptions);
        }
      }
    },
  );

  debug("render finished at %O", new Date());

  if (isCi() && !Deno.env.get("CI_SKIP_GIT_DIFF_CHECK")) {
    const changes = await execCmd(`git diff ${cmdOptions.output}`);
    if (changes) {
      console.log(`Detected changes in ${cmdOptions.output} folder`);
      console.log(chalk.red(changes));
      throw new Error("Unexpected changes detected in output folder");
    }
  }
} catch (e) {
  console.error(e);
  throw e;
}
