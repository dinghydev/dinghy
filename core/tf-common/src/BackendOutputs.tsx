import {
  deepMerge,
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import z from 'zod'
import { useOutputs } from '@dinghy/tf-common'
import Debug from 'debug'
const debug = Debug('tf-common:BackendOutputs')

export const BackendOutputsSchema = z.object({
  outputProtocolPrefix: ResolvableStringSchema,
  outputFilePrefix: ResolvableStringSchema.optional(),
  outputFileExt: ResolvableStringSchema.default('.stack.json'),
  component: z.any(),
})

export type InputProps =
  & z.input<typeof BackendOutputsSchema>
  & NodeProps

export function BackendOutputs(
  { component, ...props }: Partial<InputProps>,
) {
  const renderOptions = getRenderOptions()
  const inputProps = deepMerge({}, renderOptions.backendOutputs)
  deepMerge(inputProps, props)
  const backendOutputsConfig = BackendOutputsSchema.loose().parse(inputProps)
  const { allOutputs } = useOutputs()
  const stack = renderOptions.stack as any
  const outputName =
    deepResolve(backendOutputsConfig.outputFileExt).split('.').splice(-2, 1)[0]
  const outputFileName = () =>
    `${
      deepResolve(backendOutputsConfig.outputFilePrefix) || ''
    }${renderOptions.stack.name}${
      deepResolve(backendOutputsConfig.outputFileExt)
    }`
  const _enabled = () => deepResolve(allOutputs.map((o) => o._id)).length > 0
  const populateOutputs = () => {
    stack.outputs ??= {}
    stack.outputs[outputName] = () =>
      `${
        deepResolve(backendOutputsConfig.outputProtocolPrefix)
      }${outputFileName()}`
  }
  const content = () => {
    const outputs: Record<string, string> = {}
    deepResolve(allOutputs.map((o) => [o._consolidatedId, o._id, o.value]))
      .map((output: any) => {
        let outputValue = output[2]
        if (typeof outputValue === 'string') {
          try {
            outputValue = JSON.parse(outputValue)
          } catch {
            debug(`not a json output value: ${outputValue}`)
          }
        }
        outputs[deepResolve(output[0] || output[1])] = outputValue
      })
    return JSON.stringify(outputs, null, 2)
  }
  const OutputsComponent = component as any
  return (
    <OutputsComponent
      _title={outputFileName}
      filename={outputFileName}
      __key={outputFileName}
      _enabled={_enabled}
      _afterDataBind={populateOutputs}
      content={content}
      {...(backendOutputsConfig as any)}
    />
  )
}
