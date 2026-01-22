import {
  deepMerge,
  deepResolve,
  extendStyle,
  getRenderOptions,
  type NodeProps,
  resolvableValue,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import { Backend, BackendInputSchema } from './Backend.tsx'
import { CODE_FILE } from '@dinghy/diagrams/entitiesAzure'

export const InputSchema = BackendInputSchema.extend({
  path: resolvableValue(z.string().default('stack.tfstate.json')),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

// https://developer.hashicorp.com/terraform/language/backend/local

export function LocalBackend(props: Partial<InputProps>) {
  const renderOptions = getRenderOptions()
  const inputProps = deepMerge({}, renderOptions.localBackend)
  deepMerge(inputProps, props)
  const backendConfig = InputSchema.loose().parse(inputProps)
  const alias = deepResolve(backendConfig.alias || backendConfig.type)
  return (
    <Backend
      _display='entity'
      _style={extendStyle(props, CODE_FILE)}
      _terraform={{
        backend: {
          [alias]: {
            path: backendConfig.path,
          },
        },
      }}
      {...backendConfig}
    />
  )
}

export const useLocalBackend = (idFilter?: string, baseNode?: any) =>
  useTypedNode<InputProps>(LocalBackend, idFilter, baseNode)
