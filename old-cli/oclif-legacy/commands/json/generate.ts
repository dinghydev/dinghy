import { Args, type Command, Flags } from '@oclif/core'
import { BaseAppCommand } from '../../base/BaseAppCommand.ts'
import { renderJson } from '@reactiac/renderer-json'

export default class JsonGenerate<
  T extends typeof Command,
> extends BaseAppCommand<T> {
  static aliases = ['json:gen']

  static description = 'Generate json model from app'

  static override flags = {
    ...BaseAppCommand.flags,

    png: Flags.boolean({
      description: 'generate png diagram',
      env: 'DIAGRAM_PNG',
      allowNo: true,
      default: false,
    }),

    'drawio-cmd': Flags.string({
      description: 'drawio command full path',
      env: 'DRAWIO_CMD',
    }),
  }

  protected outputFileName(renderOptions: any): string {
    return `${renderOptions.stack.id}.json`
  }

  protected renderFunction() {
    return renderJson
  }
}
