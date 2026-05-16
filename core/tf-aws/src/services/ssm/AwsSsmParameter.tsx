import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSsmParameterInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  allowed_pattern: resolvableValue(z.string().optional()),
  data_type: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  insecure_value: resolvableValue(z.string().optional()),
  key_id: resolvableValue(z.string().optional()),
  overwrite: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tier: resolvableValue(z.string().optional()),
  value: resolvableValue(z.string().optional()),
  value_wo: resolvableValue(z.string().optional()),
  value_wo_version: resolvableValue(z.number().optional()),
})

export const AwsSsmParameterOutputSchema = z.object({
  arn: z.string().optional(),
  has_value_wo: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export const AwsSsmParameterImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmParameterInputProps =
  & z.input<typeof AwsSsmParameterInputSchema>
  & z.input<typeof AwsSsmParameterImportSchema>
  & NodeProps

export type AwsSsmParameterOutputProps =
  & z.output<typeof AwsSsmParameterOutputSchema>
  & z.output<typeof AwsSsmParameterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_parameter

export function AwsSsmParameter(props: Partial<AwsSsmParameterInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_parameter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmParameterInputSchema}
      _outputSchema={AwsSsmParameterOutputSchema}
      _importSchema={AwsSsmParameterImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmParameter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmParameterOutputProps>(
    AwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmParameters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmParameterOutputProps>(
    AwsSsmParameter,
    idFilter,
    baseNode,
    optional,
  )
