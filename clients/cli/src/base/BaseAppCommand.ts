import { type Command, Flags } from '@oclif/core'
import { BaseCommand } from './BaseCommand.js'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { load } from 'js-yaml'
import {
  parseStacks,
  mergeStackOptions,
  utils,
} from '@reactiac/base-components'
const { deepClone } = utils

export abstract class BaseAppCommand<
  T extends typeof Command,
> extends BaseCommand<T> {
  static flags = {
    ...BaseCommand.flags,
    'app-home': Flags.string({
      env: 'APP_HOME',
    }),
    'app-file': Flags.string({
      env: 'APP_FILE',
      default: 'dist/App.js',
    }),
    'app-options': Flags.string({
      env: 'APP_OPTIONS',
      default: 'app/app.yaml',
    }),
    'app-output-dir': Flags.string({
      env: 'APP_OUTPUT_DIR',
      default: 'app/output',
    }),
    'app-stack': Flags.string({
      env: 'APP_STACK',
    }),
    'app-render-stack-options': Flags.boolean({
      env: 'APP_RENDER_STACK_OPTIONS',
      default: false,
    }),
  }

  protected async customConfig() {
    await super.customConfig()

    const appHome = this.flags['app-home']
    ;(this.flags as any)['app-home'] = appHome
      ? appHome.replace(/\/$/, '')
      : process.cwd()
  }
  protected abstract outputFileName(output: any): string
  protected abstract renderFunction(): Function

  protected outputFilePath(output: any) {
    const outputBase = this.flags['app-output-dir'].startsWith('/')
      ? this.flags['app-output-dir']
      : `${this.flags['app-home']}/${this.flags['app-output-dir']}`
    const outputFile = `${outputBase}/${this.outputFileName(output)}`
    // remove the string from last slash to the end of the string
    const outputDir = outputFile.substring(0, outputFile.lastIndexOf('/') + 1)
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true })
    }

    return outputFile
  }

  public appPath(path?: string) {
    const appHome = this.flags['app-home']
    return path ? `${appHome}/${path}` : appHome
  }

  public defaultRenderOptions(): any {
    const appOptionsFile = this.appPath(this.flags['app-options'])
    const appOptions: any = existsSync(appOptionsFile)
      ? load(readFileSync(appOptionsFile, 'utf8'))
      : {}
    const stacks = parseStacks(appOptions.stacks).stacks
    const stack =
      Object.values(stacks).find(
        (stack: any) => stack.name === this.flags['app-stack'],
      ) || Object.values(stacks)[0]

    return {
      ...appOptions,
      stacks,
      stack,
    }
  }

  protected async requireApp() {
    const appPath = this.appPath(this.flags['app-file'])
    const app = await import(appPath)
    return app.default
  }

  protected async performRender(renderOptions: any) {
    const renderFunction = this.renderFunction()
    const App = await this.requireApp()
    const output = await renderFunction(App, renderOptions)
    const outputFilePath = this.outputFilePath(output)
    writeFileSync(outputFilePath, output.result)
    return output
  }

  protected selectedStackField(): string | null {
    return null
  }

  protected selectedRenderOptions(
    field: string,
    initRenderOptions: any,
    initialOptions: string[],
    selected: string | null,
  ) {
    const options = deepClone(initRenderOptions)
    const values = mergeStackOptions(options.stack, initialOptions || [], field)
    options[field] = selected
      ? values.find((v) => v.name === selected) || {
          id: `${options.stack.id}-${selected}`,
          name: selected,
        }
      : values[0]
    return options
  }

  public async run(): Promise<void> {
    const defaultRenderOptions = this.defaultRenderOptions()
    const field = this.selectedStackField()
    if (!field) {
      return await this.performRender(defaultRenderOptions)
    }

    const initialRenderOptions = this.selectedRenderOptions(
      field,
      defaultRenderOptions,
      [],
      this.flags[`app-${field}`],
    )
    const output = await this.performRender(initialRenderOptions)
    const fields = `${field}s`
    if (this.flags['app-render-stack-options']) {
      for (const option of output[fields]) {
        if (option === initialRenderOptions[field].name) {
          continue
        }
        const additionalRenderOptions = this.selectedRenderOptions(
          field,
          defaultRenderOptions,
          output[fields],
          option,
        )
        await this.performRender(additionalRenderOptions)
      }
    }
    return output
  }
}
