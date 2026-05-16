import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEcsClusterCapacityProvidersInputSchema = TfMetaSchema.extend({
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

export const AwsEcsClusterCapacityProvidersOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEcsClusterCapacityProvidersInputProps =
  & z.input<typeof AwsEcsClusterCapacityProvidersInputSchema>
  & NodeProps

export type AwsEcsClusterCapacityProvidersOutputProps =
  & z.output<typeof AwsEcsClusterCapacityProvidersOutputSchema>
  & z.output<typeof AwsEcsClusterCapacityProvidersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecs_cluster_capacity_providers

export function AwsEcsClusterCapacityProviders(
  props: Partial<AwsEcsClusterCapacityProvidersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_cluster_capacity_providers'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcsClusterCapacityProvidersInputSchema}
      _outputSchema={AwsEcsClusterCapacityProvidersOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsClusterCapacityProviderss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcsClusterCapacityProvidersOutputProps>(
    AwsEcsClusterCapacityProviders,
    idFilter,
    baseNode,
    optional,
  )
