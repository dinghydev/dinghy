import { runTfImageCmd } from '../../services/tf/runTfImageCmd.ts'
import process from 'node:process'
import confirm from '@inquirer/confirm'
import { DinghyError, hostAppHome, requireStacksConfig } from '@dinghy/cli'
import { doWithTfStacks } from '../../services/tf/doWithTfStacks.ts'
import chalk from 'chalk'
import { Args } from '@std/cli/parse-args'
import { createCombinedTfSchema } from '../../services/tf/createCombinedTfSchema.ts'
import { onEvent } from '@dinghy/base-components'
import Debug from 'debug'
const debug = Debug('tf:init')

export const schema = createCombinedTfSchema(
  'Run `terraform init` command for selected stacks',
  ['init'],
)

export const run = async (args: Args, stackInfo?: any) => {
  const doWithStack = async (stackInfo: any) => {
    const stackPath = `${args.output}/${stackInfo.name}`
    debug('Running terraform init from %s', stackPath)
    await onEvent(`tf.stack.init.start`, stackInfo)

    console.log(
      `Initializing ${
        chalk.green(`${hostAppHome}/${stackPath}/stack.tf.json`)
      } ...`,
    )
    const result = await runTfInit(
      stackPath,
      args,
    )

    if (!result.success) {
      if (result.output?.includes('StatusCode: 404')) {
        const tfModel = JSON.parse(
          Deno.readTextFileSync(
            `${hostAppHome}/${stackPath}/stack.tf.json`,
          ),
        )
        const backendBucket = tfModel.terraform?.backend?.s3?.bucket
        const backendResource = Object.entries(
          tfModel.resource?.aws_s3_bucket || {},
        ).find(([_k, v]) => (v as any).bucket === backendBucket)
        if (backendResource) {
          console.error(
            `backend bucket ${backendBucket} not created yet, you may use --auto-create-backend flag or DINGHY_TF_INIT_AUTO_CREATE_BACKEND environment variable to create it automatically`,
          )
          let createOnDemand = args['auto-create-backend']
          let userConfirmed = false
          if (!createOnDemand && process.stdin.isTTY) {
            createOnDemand = await confirm({
              message: 'Do you want to create it now?',
              default: true,
            })
            userConfirmed = true
          }
          console.log('createOnDemand', createOnDemand)
          if (createOnDemand) {
            return createBackend(
              stackPath,
              args,
              tfModel,
              backendResource,
              userConfirmed,
            )
          }
        }
      }
      throw new DinghyError('Failed to run tf init')
    }
    await onEvent(`tf.stack.init.finish`, stackInfo)
  }

  if (stackInfo) {
    await doWithStack(stackInfo)
  } else {
    await requireStacksConfig()
    await doWithTfStacks(args, async (stackInfo: any) => {
      await doWithStack(stackInfo)
    })
  }
}

const createBackend = async (
  stackPath: string,
  args: Args,
  tfModel: any,
  backendResource: any,
  userConfirmed: boolean,
) => {
  const workingDir = `${hostAppHome}/${stackPath}/.terraform/backend`
  Deno.mkdirSync(workingDir, { recursive: true })
  const { backend, ...terraform } = tfModel.terraform
  const backendTfJson = {
    terraform: {
      ...terraform,
    },
    provider: tfModel.provider,
    resource: {
      aws_s3_bucket: Object.fromEntries(new Map([backendResource])),
    },
  }
  const backendTfJsonFile = `${workingDir}/backend.tf.json`
  Deno.writeTextFileSync(
    backendTfJsonFile,
    JSON.stringify(backendTfJson, null, 2),
  )
  console.log(`created ${backendTfJsonFile}`)
  const result = await runTfInit(
    workingDir,
    args,
  )
  if (!result.success) {
    throw new Error('failed to init backend')
  }

  await runTfImageCmd(
    workingDir,
    args,
    ['tf', 'plan', '-out=tf.plan'],
  )
  if (userConfirmed) {
    const confirmResult = await confirm({
      message: 'Do you want to create bucket above?',
      default: true,
    })
    if (!confirmResult) {
      Deno.exit(1)
    }
  }

  await runTfImageCmd(
    workingDir,
    args,
    ['tf', 'apply', 'tf.plan'],
  )

  Deno.writeTextFileSync(
    backendTfJsonFile,
    JSON.stringify(
      { ...backendTfJson, terraform: { backend, ...terraform } },
      null,
      2,
    ),
  )
  console.log(`created ${backendTfJsonFile}`)

  await runTfImageCmd(
    workingDir,
    args,
    ['tf', 'init', '-force-copy', '-migrate-state'],
  )

  await runTfInit(
    stackPath,
    args,
  )
}

const runTfInit = (
  stackPath: string,
  args: Args,
) => {
  return runTfImageCmd(
    stackPath,
    args,
    ['tf-init'],
  )
}
