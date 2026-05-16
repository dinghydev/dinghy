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

export const AwsLocationMapInputSchema = TfMetaSchema.extend({
  configuration: resolvableValue(z.object({
    style: z.string(),
  })),
  map_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLocationMapOutputSchema = z.object({
  create_time: z.string().optional(),
  map_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type AwsLocationMapInputProps =
  & z.input<typeof AwsLocationMapInputSchema>
  & NodeProps

export type AwsLocationMapOutputProps =
  & z.output<typeof AwsLocationMapOutputSchema>
  & z.output<typeof AwsLocationMapInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/location_map

export function AwsLocationMap(props: Partial<AwsLocationMapInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_map'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLocationMapInputSchema}
      _outputSchema={AwsLocationMapOutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationMap = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLocationMapOutputProps>(
    AwsLocationMap,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLocationMaps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLocationMapOutputProps>(
    AwsLocationMap,
    idFilter,
    baseNode,
    optional,
  )
