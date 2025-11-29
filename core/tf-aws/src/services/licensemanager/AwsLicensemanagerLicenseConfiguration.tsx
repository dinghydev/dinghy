import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/licensemanager_license_configuration

export const InputSchema = z.object({
  license_counting_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  license_count: resolvableValue(z.number().optional()),
  license_count_hard_limit: resolvableValue(z.boolean().optional()),
  license_rules: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLicensemanagerLicenseConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_license_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerLicenseConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsLicensemanagerLicenseConfiguration, node, id)

export const useAwsLicensemanagerLicenseConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsLicensemanagerLicenseConfiguration, node, id)
