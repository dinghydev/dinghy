import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_hsm_configuration

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  hsm_configuration_identifier: resolvableValue(z.string()),
  hsm_ip_address: resolvableValue(z.string()),
  hsm_partition_name: resolvableValue(z.string()),
  hsm_partition_password: resolvableValue(z.string()),
  hsm_server_public_certificate: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftHsmConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_hsm_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftHsmConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftHsmConfiguration, node, id)

export const useAwsRedshiftHsmConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftHsmConfiguration, node, id)
