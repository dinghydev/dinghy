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

export const AwsRoute53profilesProfileInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53profilesProfileOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53profilesProfileInputProps =
  & z.input<typeof AwsRoute53profilesProfileInputSchema>
  & NodeProps

export type AwsRoute53profilesProfileOutputProps =
  & z.output<typeof AwsRoute53profilesProfileOutputSchema>
  & z.output<typeof AwsRoute53profilesProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53profiles_profile

export function AwsRoute53profilesProfile(
  props: Partial<AwsRoute53profilesProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53profiles_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53profilesProfileInputSchema}
      _outputSchema={AwsRoute53profilesProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53profilesProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53profilesProfileOutputProps>(
    AwsRoute53profilesProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53profilesProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53profilesProfileOutputProps>(
    AwsRoute53profilesProfile,
    idFilter,
    baseNode,
    optional,
  )
