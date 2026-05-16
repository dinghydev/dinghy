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

export const AwsTransferProfileInputSchema = TfMetaSchema.extend({
  as2_id: resolvableValue(z.string()),
  profile_type: resolvableValue(z.string()),
  certificate_ids: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsTransferProfileOutputSchema = z.object({
  arn: z.string().optional(),
  profile_id: z.string().optional(),
})

export type AwsTransferProfileInputProps =
  & z.input<typeof AwsTransferProfileInputSchema>
  & NodeProps

export type AwsTransferProfileOutputProps =
  & z.output<typeof AwsTransferProfileOutputSchema>
  & z.output<typeof AwsTransferProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_profile

export function AwsTransferProfile(
  props: Partial<AwsTransferProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferProfileInputSchema}
      _outputSchema={AwsTransferProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferProfileOutputProps>(
    AwsTransferProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferProfileOutputProps>(
    AwsTransferProfile,
    idFilter,
    baseNode,
    optional,
  )
