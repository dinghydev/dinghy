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

export const DataAwsSsmParameterInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  with_decryption: resolvableValue(z.boolean().optional()),
})

export const DataAwsSsmParameterOutputSchema = z.object({
  arn: z.string().optional(),
  insecure_value: z.string().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
  value: z.string().optional(),
  version: z.number().optional(),
})

export type DataAwsSsmParameterInputProps =
  & z.input<typeof DataAwsSsmParameterInputSchema>
  & NodeProps

export type DataAwsSsmParameterOutputProps =
  & z.output<typeof DataAwsSsmParameterOutputSchema>
  & z.output<typeof DataAwsSsmParameterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssm_parameter

export function DataAwsSsmParameter(
  props: Partial<DataAwsSsmParameterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmParameter
      _type='aws_ssm_parameter'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmParameterInputSchema}
      _outputSchema={DataAwsSsmParameterOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmParameter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmParameterOutputProps>(
    DataAwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmParameters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmParameterOutputProps>(
    DataAwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )
