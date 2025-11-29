import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/inspector2_organization_configuration

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  max_account_limit_reached: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsInspector2OrganizationConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector2_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsInspector2OrganizationConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsInspector2OrganizationConfiguration, node, id)

export const useAwsInspector2OrganizationConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsInspector2OrganizationConfiguration, node, id)
