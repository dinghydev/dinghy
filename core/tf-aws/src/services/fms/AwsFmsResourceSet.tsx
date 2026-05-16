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

export const AwsFmsResourceSetInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  resource_set: resolvableValue(
    z.object({
      description: z.string().optional(),
      id: z.string().optional(),
      last_update_time: z.string().optional(),
      name: z.string(),
      resource_set_status: z.string().optional(),
      resource_type_list: z.string().array().optional(),
      update_token: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsFmsResourceSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsFmsResourceSetInputProps =
  & z.input<typeof AwsFmsResourceSetInputSchema>
  & NodeProps

export type AwsFmsResourceSetOutputProps =
  & z.output<typeof AwsFmsResourceSetOutputSchema>
  & z.output<typeof AwsFmsResourceSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/fms_resource_set

export function AwsFmsResourceSet(props: Partial<AwsFmsResourceSetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fms_resource_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFmsResourceSetInputSchema}
      _outputSchema={AwsFmsResourceSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsFmsResourceSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFmsResourceSetOutputProps>(
    AwsFmsResourceSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFmsResourceSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFmsResourceSetOutputProps>(
    AwsFmsResourceSet,
    idFilter,
    baseNode,
    optional,
  )
