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

export const AwsResourcegroupsGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      type: z.string(),
      parameters: z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_query: resolvableValue(
    z.object({
      query: z.string(),
      type: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsResourcegroupsGroupOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsResourcegroupsGroupInputProps =
  & z.input<typeof AwsResourcegroupsGroupInputSchema>
  & NodeProps

export type AwsResourcegroupsGroupOutputProps =
  & z.output<typeof AwsResourcegroupsGroupOutputSchema>
  & z.output<typeof AwsResourcegroupsGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/resourcegroups_group

export function AwsResourcegroupsGroup(
  props: Partial<AwsResourcegroupsGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourcegroups_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsResourcegroupsGroupInputSchema}
      _outputSchema={AwsResourcegroupsGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsResourcegroupsGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsResourcegroupsGroupOutputProps>(
    AwsResourcegroupsGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsResourcegroupsGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsResourcegroupsGroupOutputProps>(
    AwsResourcegroupsGroup,
    idFilter,
    baseNode,
    optional,
  )
