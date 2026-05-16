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

export const AwsEmrBlockPublicAccessConfigurationInputSchema = TfMetaSchema
  .extend({
    block_public_security_group_rules: resolvableValue(z.boolean()),
    id: resolvableValue(z.string().optional()),
    permitted_public_security_group_rule_range: resolvableValue(
      z.object({
        max_range: z.number(),
        min_range: z.number(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsEmrBlockPublicAccessConfigurationOutputSchema = z.object({})

export type AwsEmrBlockPublicAccessConfigurationInputProps =
  & z.input<typeof AwsEmrBlockPublicAccessConfigurationInputSchema>
  & NodeProps

export type AwsEmrBlockPublicAccessConfigurationOutputProps =
  & z.output<typeof AwsEmrBlockPublicAccessConfigurationOutputSchema>
  & z.output<typeof AwsEmrBlockPublicAccessConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/emr_block_public_access_configuration

export function AwsEmrBlockPublicAccessConfiguration(
  props: Partial<AwsEmrBlockPublicAccessConfigurationInputProps>,
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
      _inputSchema={AwsEmrBlockPublicAccessConfigurationInputSchema}
      _outputSchema={AwsEmrBlockPublicAccessConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrBlockPublicAccessConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEmrBlockPublicAccessConfigurationOutputProps>(
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
  useTypedNodes<AwsEmrBlockPublicAccessConfigurationOutputProps>(
    AwsEmrBlockPublicAccessConfiguration,
    idFilter,
    baseNode,
    optional,
  )
