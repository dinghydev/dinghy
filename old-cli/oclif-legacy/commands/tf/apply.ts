import { Args, type Command, Flags } from '@oclif/core'
import { BaseAppCommand } from '../../base/BaseAppCommand.ts'
import { renderTf } from '@reactiac/renderer-tf'
import { mergeStackOptions, utils } from '@reactiac/base-components'
import { existsSync, symlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { execa } from 'execa'
const { deepClone } = utils

export default class TfGApply<
  T extends typeof Command,
> extends BaseAppCommand<T> {
  static description = 'Apply tf from app'

  static override flags = {
    ...BaseAppCommand.flags,

    'app-stage': Flags.string({
      env: 'APP_STAGE',
      default: 'main',
    }),
  }

  protected outputDir(renderOptions: any): string {
    return `${super.outputDir(renderOptions)}/${renderOptions.stage.id}`
  }

  protected outputFileName(renderOptions: any): string {
    return `${renderOptions.stage.id}.tf.json`
  }

  protected renderFunction() {
    return renderTf
  }

  protected selectedStackField() {
    return 'stage'
  }

  protected requireBuild() {
    return true // TODO: to skip build after move stack options outside rendering logic
  }

  protected async doWithOutput(output: any, outputFilePath: string) {
    super.doWithOutput(output, outputFilePath)
    const stageFolder = outputFilePath.substring(
      0,
      outputFilePath.lastIndexOf('/'),
    )

    // run terraform apply in stageFolder
    console.log(`Running terraform apply from ${stageFolder}`)
    await execa('terraform', ['apply', 'tf.plan'], {
      cwd: stageFolder,
      stdio: 'inherit',
    })
  }
}
