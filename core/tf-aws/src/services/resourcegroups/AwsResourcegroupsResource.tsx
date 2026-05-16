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

export const AwsResourcegroupsResourceInputSchema = TfMetaSchema.extend({
  group_arn: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsResourcegroupsResourceOutputSchema = z.object({
  id: z.string().optional(),
  resource_type: z.string().optional(),
})

export type AwsResourcegroupsResourceInputProps =
  & z.input<typeof AwsResourcegroupsResourceInputSchema>
  & NodeProps

export type AwsResourcegroupsResourceOutputProps =
  & z.output<typeof AwsResourcegroupsResourceOutputSchema>
  & z.output<typeof AwsResourcegroupsResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/resourcegroups_resource

export function AwsResourcegroupsResource(
  props: Partial<AwsResourcegroupsResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourcegroups_resource'
      _category='resource'
      _title={_title}
      _inputSchema={AwsResourcegroupsResourceInputSchema}
      _outputSchema={AwsResourcegroupsResourceOutputSchema}
      {...props}
    />
  )
}

export const useAwsResourcegroupsResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsResourcegroupsResourceOutputProps>(
    AwsResourcegroupsResource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsResourcegroupsResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsResourcegroupsResourceOutputProps>(
    AwsResourcegroupsResource,
    idFilter,
    baseNode,
    optional,
  )
