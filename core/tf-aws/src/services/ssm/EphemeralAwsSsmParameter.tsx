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
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  with_decryption: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  value: z.string().optional(),
  version: z.number().optional(),
  with_decryption: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/ephemeral-resources/ssm_parameter

export function EphemeralAwsSsmParameter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmParameter
      _type='aws_ssm_parameter'
      _category='ephemeral'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useEphemeralAwsSsmParameter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    EphemeralAwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsSsmParameters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    EphemeralAwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )
