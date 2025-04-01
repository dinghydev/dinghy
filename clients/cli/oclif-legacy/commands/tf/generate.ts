import { Args, type Command, Flags } from '@oclif/core'
import { BaseAppCommand } from '../../base/BaseAppCommand.js'
import { renderTf } from '@reactiac/renderer-tf'
import { mergeStackOptions, utils } from '@reactiac/base-components'
const { deepClone } = utils

export default class TfGenerate<
  T extends typeof Command,
> extends BaseAppCommand<T> {
  static aliases = ['tf:gen']

  static description = 'Generate tf from app'

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
}
