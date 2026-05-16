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

export const AwsShieldDrtAccessLogBucketAssociationInputSchema = TfMetaSchema
  .extend({
    log_bucket: resolvableValue(z.string()),
    role_arn_association_id: resolvableValue(z.string()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsShieldDrtAccessLogBucketAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsShieldDrtAccessLogBucketAssociationInputProps =
  & z.input<typeof AwsShieldDrtAccessLogBucketAssociationInputSchema>
  & NodeProps

export type AwsShieldDrtAccessLogBucketAssociationOutputProps =
  & z.output<typeof AwsShieldDrtAccessLogBucketAssociationOutputSchema>
  & z.output<typeof AwsShieldDrtAccessLogBucketAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_drt_access_log_bucket_association

export function AwsShieldDrtAccessLogBucketAssociation(
  props: Partial<AwsShieldDrtAccessLogBucketAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_drt_access_log_bucket_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldDrtAccessLogBucketAssociationInputSchema}
      _outputSchema={AwsShieldDrtAccessLogBucketAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldDrtAccessLogBucketAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldDrtAccessLogBucketAssociationOutputProps>(
    AwsShieldDrtAccessLogBucketAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldDrtAccessLogBucketAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldDrtAccessLogBucketAssociationOutputProps>(
    AwsShieldDrtAccessLogBucketAssociation,
    idFilter,
    baseNode,
    optional,
  )
