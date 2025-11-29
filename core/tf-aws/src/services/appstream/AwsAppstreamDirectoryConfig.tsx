import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appstream_directory_config

export const InputSchema = z.object({
  directory_name: resolvableValue(z.string()),
  organizational_unit_distinguished_names: resolvableValue(z.string().array()),
  service_account_credentials: resolvableValue(z.object({
    account_name: z.string(),
    account_password: z.string(),
  })),
  certificate_based_auth_properties: resolvableValue(
    z.object({
      certificate_authority_arn: z.string().optional(),
      status: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  created_time: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppstreamDirectoryConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_directory_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamDirectoryConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppstreamDirectoryConfig, node, id)

export const useAwsAppstreamDirectoryConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppstreamDirectoryConfig, node, id)
