import {
  deepMerge,
  deepResolve,
  NodeTree,
  Props,
} from '@dinghy/base-components'
import { requiredSchema } from './index.ts'
import type { TfRenderOptions } from '../types.ts'
import Debug from 'debug'
const debug = Debug('tf:provider')

export const provider = (
  _renderOptions: TfRenderOptions,
  _category: string,
  tfRoot: Props,
  node: NodeTree,
) => {
  const terraformRoot: any = tfRoot['terraform'] ??= {}
  const providerRoot: any = tfRoot['provider'] ??= {}

  if (node._props._provider) {
    if (node._props._terraform) {
      deepResolve(node._props._terraform)
      deepMerge(terraformRoot, node._props._terraform)
    }
    deepResolve(node._props._provider)
    deepMerge(providerRoot, node._props._provider)
    debug('set provider from props directly')
    return
  }
  const _inputSchema = requiredSchema(node, '_inputSchema')
  const tfElement = _inputSchema.parse(node._props)
  deepResolve(tfElement)
  const { required_providers, ...provider } = tfElement

  if (required_providers) {
    deepMerge(terraformRoot, { required_providers })
  }

  if (Object.keys(provider).length !== 0) {
    const providerName = Object.keys(required_providers)[0]
    providerRoot[providerName] ??= []
    providerRoot[providerName].push(provider)
  }
}
