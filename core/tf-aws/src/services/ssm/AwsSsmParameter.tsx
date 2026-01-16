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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  has_value_wo: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ssm_parameter

export function AwsSsmParameter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_parameter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmParameter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSsmParameter, idFilter, baseNode, optional)

export const useAwsSsmParameters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsSsmParameter, idFilter, baseNode, optional)
