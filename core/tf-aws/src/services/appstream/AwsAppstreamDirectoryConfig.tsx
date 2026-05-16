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

export const AwsAppstreamDirectoryConfigInputSchema = TfMetaSchema.extend({
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

export const AwsAppstreamDirectoryConfigOutputSchema = z.object({
  created_time: z.string().optional(),
  id: z.string().optional(),
})

export type AwsAppstreamDirectoryConfigInputProps =
  & z.input<typeof AwsAppstreamDirectoryConfigInputSchema>
  & NodeProps

export type AwsAppstreamDirectoryConfigOutputProps =
  & z.output<typeof AwsAppstreamDirectoryConfigOutputSchema>
  & z.output<typeof AwsAppstreamDirectoryConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appstream_directory_config

export function AwsAppstreamDirectoryConfig(
  props: Partial<AwsAppstreamDirectoryConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_directory_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppstreamDirectoryConfigInputSchema}
      _outputSchema={AwsAppstreamDirectoryConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamDirectoryConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppstreamDirectoryConfigOutputProps>(
    AwsAppstreamDirectoryConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppstreamDirectoryConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppstreamDirectoryConfigOutputProps>(
    AwsAppstreamDirectoryConfig,
    idFilter,
    baseNode,
    optional,
  )
