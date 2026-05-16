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

export const AwsDxLagInputSchema = TfMetaSchema.extend({
  connections_bandwidth: resolvableValue(z.string()),
  location: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  connection_id: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  provider_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDxLagOutputSchema = z.object({
  arn: z.string().optional(),
  has_logical_redundancy: z.string().optional(),
  id: z.string().optional(),
  jumbo_frame_capable: z.boolean().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDxLagInputProps =
  & z.input<typeof AwsDxLagInputSchema>
  & NodeProps

export type AwsDxLagOutputProps =
  & z.output<typeof AwsDxLagOutputSchema>
  & z.output<typeof AwsDxLagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_lag

export function AwsDxLag(props: Partial<AwsDxLagInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_lag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxLagInputSchema}
      _outputSchema={AwsDxLagOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxLag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<AwsDxLagOutputProps>(AwsDxLag, idFilter, baseNode, optional)

export const useAwsDxLags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<AwsDxLagOutputProps>(AwsDxLag, idFilter, baseNode, optional)
