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

export const InputSchema = z.object({
  block_public_security_group_rules: resolvableValue(z.boolean()),
  id: resolvableValue(z.string().optional()),
  permitted_public_security_group_rule_range: resolvableValue(
    z.object({
      max_range: z.number(),
      min_range: z.number(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/emr_block_public_access_configuration

export function AwsEmrBlockPublicAccessConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_block_public_access_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrBlockPublicAccessConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEmrBlockPublicAccessConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrBlockPublicAccessConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEmrBlockPublicAccessConfiguration,
    idFilter,
    baseNode,
    optional,
  )
