import { Args, type Command, Flags } from '@oclif/core'
import { BaseAppCommand } from '../../base/BaseAppCommand.js'
import { renderDrawio } from '@reactiac/renderer-drawio'

export default class DiagramGenerate<
  T extends typeof Command,
> extends BaseAppCommand<T> {
  static aliases = ['diagram:gen']

  static description = 'Generate drawio diagram from app'

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

    'app-view': Flags.string({
      env: 'APP_VIEW',
      default: 'overview',
    }),
  }

  protected selectedStackField() {
    return 'view'
  }

  protected outputFileName(output: any): string {
    return `${output.renderOptions.view.id}.drawio`
  }

  protected renderFunction() {
    return renderDrawio
  }
}
