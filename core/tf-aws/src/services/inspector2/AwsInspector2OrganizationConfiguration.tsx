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

export const AwsInspector2OrganizationConfigurationInputSchema = TfMetaSchema
  .extend({
    auto_enable: resolvableValue(z.object({
      code_repository: z.boolean().optional(),
      ec2: z.boolean(),
      ecr: z.boolean(),
      lambda: z.boolean().optional(),
      lambda_code: z.boolean().optional(),
    })),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsInspector2OrganizationConfigurationOutputSchema = z.object({
  max_account_limit_reached: z.boolean().optional(),
})

export type AwsInspector2OrganizationConfigurationInputProps =
  & z.input<typeof AwsInspector2OrganizationConfigurationInputSchema>
  & NodeProps

export type AwsInspector2OrganizationConfigurationOutputProps =
  & z.output<typeof AwsInspector2OrganizationConfigurationOutputSchema>
  & z.output<typeof AwsInspector2OrganizationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector2_organization_configuration

export function AwsInspector2OrganizationConfiguration(
  props: Partial<AwsInspector2OrganizationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector2_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspector2OrganizationConfigurationInputSchema}
      _outputSchema={AwsInspector2OrganizationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsInspector2OrganizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspector2OrganizationConfigurationOutputProps>(
    AwsInspector2OrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspector2OrganizationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspector2OrganizationConfigurationOutputProps>(
    AwsInspector2OrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
