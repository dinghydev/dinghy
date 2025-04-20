import type { CommandArgs, CommandContext, Commands } from "../../types.ts";
import { OPTIONS_SYMBOL, RUN_SYMBOL } from "../../types.ts";
import { runTf } from "./runTf.ts";
import { createTfOptions, parseTfOptions } from "./tfOptions.ts";
import process from "node:process";
import confirm from "@inquirer/confirm";
import { hostAppHome } from "../../utils/loadConfig.ts";

const options: any = createTfOptions({
  boolean: ["auto-create-backend"],
  description: {
    "auto-create-backend": "Auto create backend bucket if it doesn't exist",
  },
  cmdDescription: "Initialize working directory",
});

const createBackend = async (
  stagePath: string,
  tfVersion: string,
  args: CommandArgs,
  tfModel: any,
  backendResource: any,
  userConfirmed: boolean,
) => {
  const workingDir = `${stagePath}/.terraform/backend`;
  Deno.mkdirSync(workingDir, { recursive: true });
  const { backend, ...terraform } = tfModel.terraform;
  const backendTfJson = {
    terraform: {
      ...terraform,
    },
    provider: tfModel.provider,
    resource: {
      aws_s3_bucket: Object.fromEntries(new Map([backendResource])),
    },
  };
  const backendTfJsonFile = `${workingDir}/backend.tf.json`;
  Deno.writeTextFileSync(
    backendTfJsonFile,
    JSON.stringify(backendTfJson, null, 2),
  );
  console.log(`created ${backendTfJsonFile}`);
  const result = await runTfInit(
    workingDir,
    tfVersion,
    args,
  );
  if (result.exitCode !== 0) {
    console.error("failed to init backend");
    Deno.exit(result.exitCode);
  }

  await runTf(
    workingDir,
    tfVersion,
    args,
    ["terraform", "plan", "-out=tf.plan"],
  );
  if (userConfirmed) {
    const confirmResult = await confirm({
      message: "Do you want to create bucket above?",
      default: true,
    });
    if (!confirmResult) {
      Deno.exit(1);
    }
  }

  await runTf(
    workingDir,
    tfVersion,
    args,
    ["terraform", "apply", "tf.plan"],
  );

  Deno.writeTextFileSync(
    backendTfJsonFile,
    JSON.stringify(
      { ...backendTfJson, terraform: { backend, ...terraform } },
      null,
      2,
    ),
  );
  console.log(`created ${backendTfJsonFile}`);

  await runTf(
    workingDir,
    tfVersion,
    args,
    ["terraform", "init", "-force-copy", "-migrate-state"],
  );

  await runTfInit(
    stagePath,
    tfVersion,
    args,
  );
};

const runTfInit = (
  stagePath: string,
  tfVersion: string,
  args: CommandArgs,
) => {
  return runTf(
    stagePath,
    tfVersion,
    args,
    ["tf-init"],
    false,
  );
};

const run = async (_context: CommandContext, args: CommandArgs) => {
  const { stage, stagePath, tfVersion } = parseTfOptions(args);
  const result = await runTfInit(
    stagePath,
    tfVersion,
    args,
  );
  if (result.exitCode !== 0) {
    if (result.stdout?.includes("StatusCode: 404")) {
      const tfModel = JSON.parse(
        Deno.readTextFileSync(
          `${hostAppHome}/${stagePath}/${stage.id}.tf.json`,
        ),
      );
      const backendBucket = tfModel.terraform?.backend?.s3?.bucket;
      const backendResource = Object.entries(
        tfModel.resource?.aws_s3_bucket || {},
      ).find(([_k, v]) => (v as any).bucket === backendBucket);
      if (backendResource) {
        console.error(
          `backend bucket ${backendBucket} not created yet, you may use --auto-create-backend flag or TF_INIT_AUTO_CREATE_BACKEND environment variable to create it automatically`,
        );
        let createOnDemand = args["auto-create-backend"];
        let userConfirmed = false;
        if (!createOnDemand && process.stdout.isTTY) {
          createOnDemand = await confirm({
            message: "Do you want to create it now?",
            default: true,
          });
          userConfirmed = true;
        }
        console.log("createOnDemand", createOnDemand);
        if (createOnDemand) {
          return createBackend(
            stagePath,
            tfVersion,
            args,
            tfModel,
            backendResource,
            userConfirmed,
          );
        }
      }
    }
    Deno.exit(1);
  }
};

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
};

export default commands;
