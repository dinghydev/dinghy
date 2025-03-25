import { Args, type Command, Flags } from '@oclif/core'
import { BaseAppCommand } from '../../base/BaseAppCommand.js'
import { renderTf } from '@reactiac/renderer-tf'
import { mergeStackOptions, utils } from '@reactiac/base-components'
import { existsSync, symlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { execa } from 'execa'
const { deepClone } = utils

export default class TfApply<
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

  protected outputFileName(renderOptions: any): string {
    return `${renderOptions.stage.id}.tf.json`
  }

  protected outputDir(renderOptions: any): string {
    return `${super.outputDir(renderOptions)}/${renderOptions.stage.id}`
  }

  protected renderFunction() {
    return renderTf
  }

  protected selectedStackField() {
    return 'stage'
  }

  public async run() {
    const defaultRenderOptions = this.defaultRenderOptions()
    const stageFolder = this.outputDir(defaultRenderOptions)

    // run terraform plan in stageFolder
    console.log(`Running terraform plan from ${stageFolder}`)
    await execa('terraform', ['apply', 'tf.plan'], {
      cwd: stageFolder,
      stdio: 'inherit',
    })
  }
}
