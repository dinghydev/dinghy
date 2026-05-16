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

export const AwsVpcBlockPublicAccessExclusionInputSchema = TfMetaSchema.extend({
  internet_gateway_exclusion_mode: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const AwsVpcBlockPublicAccessExclusionOutputSchema = z.object({
  id: z.string().optional(),
  resource_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcBlockPublicAccessExclusionInputProps =
  & z.input<typeof AwsVpcBlockPublicAccessExclusionInputSchema>
  & NodeProps

export type AwsVpcBlockPublicAccessExclusionOutputProps =
  & z.output<typeof AwsVpcBlockPublicAccessExclusionOutputSchema>
  & z.output<typeof AwsVpcBlockPublicAccessExclusionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_block_public_access_exclusion

export function AwsVpcBlockPublicAccessExclusion(
  props: Partial<AwsVpcBlockPublicAccessExclusionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_block_public_access_exclusion'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcBlockPublicAccessExclusionInputSchema}
      _outputSchema={AwsVpcBlockPublicAccessExclusionOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcBlockPublicAccessExclusion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcBlockPublicAccessExclusionOutputProps>(
    AwsVpcBlockPublicAccessExclusion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcBlockPublicAccessExclusions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcBlockPublicAccessExclusionOutputProps>(
    AwsVpcBlockPublicAccessExclusion,
    idFilter,
    baseNode,
    optional,
  )
