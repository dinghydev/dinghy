import {
  deepResolve,
  getRenderOptions,
  type NodeProps,
  ResolvableStringSchema,
  toId,
} from '@dinghy/base-components'
import z from 'zod'
import { useAwsProvider } from './AwsProvider.tsx'

import {
  AwsS3Object,
  InputSchema as AwsS3ObjectSchema,
} from '../services/s3/AwsS3Object.tsx'
import { useS3Backend } from './S3Backend.tsx'
import { useOutputs } from '@dinghy/tf-common'

export const InputSchema = AwsS3ObjectSchema.extend({
  outputFilePrefix: ResolvableStringSchema.default('outputs/'),
  outputFileExt: ResolvableStringSchema.default('.stack.json'),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export function S3BackendOutput(
  { _components, ...props }: Partial<InputProps>,
) {
  const renderOptions = getRenderOptions()
  const S3ObjectComponent: any = _components?.s3Object as typeof AwsS3Object ||
    AwsS3Object
  const { awsProvider } = useAwsProvider()
  const { s3Backend } = useS3Backend()
  const { allOutputs } = useOutputs()
  const keyConfig = InputSchema.partial().parse(props)
  const stack = renderOptions.stack as any
  stack.outputs ??= {}
  const outputName = deepResolve(keyConfig.outputFileExt).split('.')[1]
  const outputFileName = () =>
    `${deepResolve(keyConfig.outputFilePrefix)}${renderOptions.stack.name}${
      deepResolve(keyConfig.outputFileExt)
    }`
  stack.outputs[outputName] = () =>
    `https://s3.${deepResolve(awsProvider.region)}.amazonaws.com/${
      deepResolve(s3Backend.bucket)
    }/${outputFileName()}`
  const content = () => {
    const outputs: Record<string, string> = {}
    deepResolve(allOutputs.map((o) => [o._id, o.value])).map((output: any) => {
      outputs[output[0]] = output[1]
    })
    return JSON.stringify(outputs, null, 2)
  }
  return (
    <S3ObjectComponent
      _title={outputFileName}
      _name={outputFileName}
      _consolidatedId={() => toId(outputFileName())}
      bucket={s3Backend.bucket}
      __key={outputFileName}
      content={content}
      {...props}
    />
  )
}
