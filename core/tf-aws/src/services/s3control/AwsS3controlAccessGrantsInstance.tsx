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

export const AwsS3controlAccessGrantsInstanceInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string().optional()),
  identity_center_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsS3controlAccessGrantsInstanceOutputSchema = z.object({
  access_grants_instance_arn: z.string().optional(),
  access_grants_instance_id: z.string().optional(),
  id: z.string().optional(),
  identity_center_application_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsS3controlAccessGrantsInstanceInputProps =
  & z.input<typeof AwsS3controlAccessGrantsInstanceInputSchema>
  & NodeProps

export type AwsS3controlAccessGrantsInstanceOutputProps =
  & z.output<typeof AwsS3controlAccessGrantsInstanceOutputSchema>
  & z.output<typeof AwsS3controlAccessGrantsInstanceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_access_grants_instance

export function AwsS3controlAccessGrantsInstance(
  props: Partial<AwsS3controlAccessGrantsInstanceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_access_grants_instance'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlAccessGrantsInstanceInputSchema}
      _outputSchema={AwsS3controlAccessGrantsInstanceOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlAccessGrantsInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlAccessGrantsInstanceOutputProps>(
    AwsS3controlAccessGrantsInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlAccessGrantsInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlAccessGrantsInstanceOutputProps>(
    AwsS3controlAccessGrantsInstance,
    idFilter,
    baseNode,
    optional,
  )
