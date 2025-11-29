import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecr_replication_configuration

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_configuration: resolvableValue(
    z.object({
      rule: z.object({
        destination: z.object({
          region: z.string(),
          registry_id: z.string(),
        }),
        repository_filter: z.object({
          filter: z.string(),
          filter_type: z.string(),
        }).optional(),
      }),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcrReplicationConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_replication_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrReplicationConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcrReplicationConfiguration, node, id)

export const useAwsEcrReplicationConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcrReplicationConfiguration, node, id)
