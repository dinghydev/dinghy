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

export const AwsEmrSecurityConfigurationInputSchema = TfMetaSchema.extend({
  configuration: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEmrSecurityConfigurationOutputSchema = z.object({
  configuration: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsEmrSecurityConfigurationInputProps =
  & z.input<typeof AwsEmrSecurityConfigurationInputSchema>
  & NodeProps

export type AwsEmrSecurityConfigurationOutputProps =
  & z.output<typeof AwsEmrSecurityConfigurationOutputSchema>
  & z.output<typeof AwsEmrSecurityConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/emr_security_configuration

export function AwsEmrSecurityConfiguration(
  props: Partial<AwsEmrSecurityConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_security_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEmrSecurityConfigurationInputSchema}
      _outputSchema={AwsEmrSecurityConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrSecurityConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEmrSecurityConfigurationOutputProps>(
    AwsEmrSecurityConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrSecurityConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEmrSecurityConfigurationOutputProps>(
    AwsEmrSecurityConfiguration,
    idFilter,
    baseNode,
    optional,
  )
