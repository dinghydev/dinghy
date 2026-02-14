import { getRenderOptions, hostAppHome } from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsLambdaFunctionInputSchema } from '../../services/lambda/AwsLambdaFunction.tsx'
import { existsSync } from '@std/fs/exists'
import { cmdCapture, DinghyError } from '@dinghy/cli'
import { RenderOptions } from '../../../../base-components/src/contexts/getRenderOptions.tsx'

const LambdaFunctionSchema = AwsLambdaFunctionInputSchema.extend({
  sourceFile: z.string().optional(),
  archiveDir: z.string().optional().transform((value: string | undefined) =>
    value as string
  ),
})

const LambdaFunctionsSchema = z.record(
  z.string(),
  LambdaFunctionSchema.loose().partial(),
)

export type LambdaFunctionType = z.output<typeof LambdaFunctionSchema>

export function parseLambdaFunctions(
  lambdas?: any,
) {
  const lambdasFolder = `${hostAppHome}/src/lambdas`
  const renderOptions = getRenderOptions()
  const lambdaFunctions = initLambdaFunctions(
    lambdas,
    renderOptions,
    lambdasFolder,
  )

  for (
    const [name, lambda] of Object.entries(lambdaFunctions) as [string, any]
  ) {
    if (typeof lambda !== 'object') {
      lambdaFunctions[name] = {}
    }
    lambda.function_name ??= name
    lambda._title ??= lambda.function_name
    if (!lambda.image_uri && !lambda.s3_bucket) {
      prepareLambdaSource(lambdasFolder, name, lambda, renderOptions)
    }
  }
  const validatedLambdaFunctions = LambdaFunctionsSchema.parse(lambdaFunctions)
  console.log(validatedLambdaFunctions)
  return validatedLambdaFunctions
}

function prepareLambdaSource(
  lambdasFolder: string,
  name: any,
  lambda: any,
  renderOptions: RenderOptions,
) {
  const functionFolder = `${lambdasFolder}/${name}`
  let sourceFile = lambda.sourceFile
  if (sourceFile) {
    if (!sourceFile.startsWith('/')) {
      sourceFile = `${hostAppHome}/${sourceFile}`
    }
    if (!existsSync(sourceFile)) {
      throw new DinghyError(
        `Lambda source file ${sourceFile} not found`,
      )
    }
  } else {
    sourceFile = `${functionFolder}/index.ts`
    if (!existsSync(sourceFile)) {
      sourceFile = `${functionFolder}.ts`
      if (!existsSync(sourceFile)) {
        throw new DinghyError(
          `Lambda ${lambda.function_name} source file not found`,
        )
      }
    }
  }
  const outputFolder = `${renderOptions.outputFolder}/lambdas/${name}`
  Deno.mkdirSync(outputFolder, { recursive: true })
  cmdCapture(
    [
      'deno',
      'bundle',
      '--minify',
      '--output',
      `${outputFolder}/index.mjs`,
      sourceFile,
    ],
    true,
    undefined,
    true,
  )
  if (existsSync(functionFolder)) {
    copyNoneTsFiles(functionFolder, outputFolder)
  }
  lambda.archiveDir = outputFolder
  lambda.runtime ??= 'nodejs24.x'
  lambda.handler ??= 'index.handler'
}

function copyNoneTsFiles(srcDir: string, destDir: string) {
  for (const entry of Deno.readDirSync(srcDir)) {
    const srcPath = `${srcDir}/${entry.name}`
    const destPath = `${destDir}/${entry.name}`
    if (entry.isFile) {
      if (!entry.name.endsWith('.ts')) {
        if (!existsSync(destDir)) {
          Deno.mkdirSync(destDir, { recursive: true })
        }
        Deno.copyFileSync(srcPath, destPath)
      }
    } else if (entry.isDirectory) {
      copyNoneTsFiles(srcPath, destPath)
    }
  }
}

function initLambdaFunctions(
  lambdas: any,
  renderOptions: RenderOptions,
  lambdasFolder: string,
) {
  let lambdaFunctions = lambdas || renderOptions.lambdas
  if (!lambdaFunctions) {
    if (existsSync(lambdasFolder)) {
      lambdaFunctions = {}
      Deno.readDirSync(lambdasFolder).toArray().sort((a, b) =>
        a.name.localeCompare(b.name)
      ).forEach((dirEntry) => {
        if (dirEntry.isFile && dirEntry.name.endsWith('.ts')) {
          const lambdaName = dirEntry.name.replace('.ts', '')
          lambdaFunctions[lambdaName] = {}
        } else if (
          dirEntry.isDirectory &&
          existsSync(`${lambdasFolder}/${dirEntry.name}/index.ts`)
        ) {
          lambdaFunctions[dirEntry.name] = {}
        }
      })
    } else {
      throw new DinghyError(`No lambda functions configured!`)
    }
  }
  return lambdaFunctions
}
