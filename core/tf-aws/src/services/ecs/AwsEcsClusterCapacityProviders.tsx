import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_cluster_capacity_providers

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  capacity_providers: resolvableValue(z.string().array().optional()),
  default_capacity_provider_strategy: resolvableValue(
    z.object({
      base: z.number().optional(),
      capacity_provider: z.string(),
      weight: z.number().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcsClusterCapacityProviders(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_cluster_capacity_providers'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsClusterCapacityProviderss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcsClusterCapacityProviders, node, id)
