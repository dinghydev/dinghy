import { Command, type Interfaces, Flags as OclifFlags } from '@oclif/core'
import type { Interfaces as OclifInterfaces } from '@oclif/core'
import { createDebugger } from '@reactiac/base-components'
import { existsSync, readFileSync } from 'node:fs'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<
  T['flags']
>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

const debug = createDebugger('config')

export abstract class BaseCommand<T extends typeof Command> extends Command {
  public flags!: Flags<T>
  public args!: Args<T>
  public startTime!: number
  public err?: OclifInterfaces.CommandError

  async init(): Promise<void> {
    this.startTime = Date.now()
    this.loadRc()
    await super.init()
    const { args, flags } = await this.parse({
      flags: this.ctor.flags,
      args: this.ctor.args,
      strict: this.ctor.strict,
    })
    this.flags = flags as Flags<T>
    this.args = args as Args<T>
    await this.customConfig()
  }

  protected catch(err: OclifInterfaces.CommandError): Promise<any> {
    this.err = err
    return super.catch(err)
  }

  protected async finally(error: Error | undefined): Promise<any> {
    if (this.err) {
      console.error('Command error: ', this.err)
      this.error(`Command error: ${this.err}`)
    }
    return super.finally(error)
  }

  protected async customConfig() {
    // fix multiple value set by ENV name which does not support comma separated array
    if (this.ctor.flags) {
      for (const key of Object.keys(this.ctor.flags)) {
        const flag: any = this.ctor.flags[key]
        const value = this.flags[key]
        if (flag.multiple && typeof value === 'string') {
          ;(this.flags as any)[key] = value.split(',')
        }
      }
    }

    const appHome = this.flags['app-home']
    ;(this.flags as any)['app-home'] = appHome
      ? appHome.replace(/\/$/, '')
      : process.cwd()
  }

  private loadRc() {
    // NOTE: rc file not use --app-home flag , only rely on process.env.APP_HOME
    const appHome = process.env.APP_HOME || process.cwd()
    for (const file of [
      `${process.env.HOME}/.reactiacrc`,
      `${appHome}/.reactiacrc`,
      `${appHome}/.reactiacrc.local`,
    ]) {
      this.loadEnvFile(file)
    }
  }

  private loadEnvFile(path: string) {
    if (!existsSync(path)) {
      return
    }

    for (const line of readFileSync(path, 'utf-8').split(/\r?\n/)) {
      const index = line.indexOf('=')
      if (index > 0 && !line.startsWith('#')) {
        const k = line.slice(0, index).trim()
        const v = line.slice(index + 1).trim()
        process.env[k] = v
        debug('Loaded %s=* from %s', k, path)
      }
    }
  }
}
