import { Args, type Command, Flags } from '@oclif/core'
import { BaseAppCommand } from '../../base/BaseAppCommand.js'
import { renderTf } from '@reactiac/renderer-tf'
import { mergeStackOptions, utils } from '@reactiac/base-components'
import { existsSync, symlinkSync } from 'node:fs'
import { execSync } from 'node:child_process'
const { deepClone } = utils

export default class TfGenerateInitPlan<
  T extends typeof Command,
> extends BaseAppCommand<T> {
  static aliases = ['tf:gip']

  static description = 'Generate /init/plan from app'

  static override flags = {
    ...BaseAppCommand.flags,

    'app-stage': Flags.string({
      env: 'APP_STAGE',
      default: 'main',
    }),
  }

  protected outputFileName(output: any): string {
    return `${output.renderOptions.stage.id}/${output.renderOptions.stage.id}.tf.json`
  }

  protected renderFunction() {
    return renderTf
  }

  protected selectedStackField() {
    return 'stage'
  }

  protected async doWithOutput(output: any, outputFilePath: string) {
    super.doWithOutput(output, outputFilePath)
    const stageFolder = outputFilePath.substring(
      0,
      outputFilePath.lastIndexOf('/'),
    )

    for (const source of ['.terraform', '.terraform.lock.hcl']) {
      const target = `${stageFolder}/${source}`
      const sourcePath = `/terraform/${source}`
      if (!existsSync(target)) {
        symlinkSync(sourcePath, target)
      }
    }

    // run terraform init in stageFolder
    console.log(`Running terraform init from ${stageFolder}`)
    execSync('terraform init', { cwd: stageFolder })

    // run terraform plan in stageFolder
    console.log(`Running terraform plan from ${stageFolder}`)
    execSync('terraform plan -out=plan.tfplan', { cwd: stageFolder })
  }
}
