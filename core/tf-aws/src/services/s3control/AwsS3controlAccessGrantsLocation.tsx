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

export const AwsS3controlAccessGrantsLocationInputSchema = TfMetaSchema.extend({
  iam_role_arn: resolvableValue(z.string()),
  location_scope: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsS3controlAccessGrantsLocationOutputSchema = z.object({
  access_grants_location_arn: z.string().optional(),
  access_grants_location_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsS3controlAccessGrantsLocationInputProps =
  & z.input<typeof AwsS3controlAccessGrantsLocationInputSchema>
  & NodeProps

export type AwsS3controlAccessGrantsLocationOutputProps =
  & z.output<typeof AwsS3controlAccessGrantsLocationOutputSchema>
  & z.output<typeof AwsS3controlAccessGrantsLocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_access_grants_location

export function AwsS3controlAccessGrantsLocation(
  props: Partial<AwsS3controlAccessGrantsLocationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_access_grants_location'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlAccessGrantsLocationInputSchema}
      _outputSchema={AwsS3controlAccessGrantsLocationOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlAccessGrantsLocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlAccessGrantsLocationOutputProps>(
    AwsS3controlAccessGrantsLocation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlAccessGrantsLocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlAccessGrantsLocationOutputProps>(
    AwsS3controlAccessGrantsLocation,
    idFilter,
    baseNode,
    optional,
  )
