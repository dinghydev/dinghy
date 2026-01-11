import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmParameter } from './AwsSsmParameter.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  with_decryption: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  insecure_value: z.string().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
  value: z.string().optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ssm_parameter

export function DataAwsSsmParameter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmParameter
      _type='aws_ssm_parameter'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmParameter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsSsmParameter, idFilter, baseNode, optional)

export const useDataAwsSsmParameters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsSsmParameter, idFilter, baseNode, optional)
