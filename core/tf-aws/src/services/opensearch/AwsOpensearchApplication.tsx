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

export const AwsOpensearchApplicationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  app_config: resolvableValue(
    z.object({
      key: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  data_source: resolvableValue(
    z.object({
      data_source_arn: z.string().optional(),
      data_source_description: z.string().optional(),
    }).array().optional(),
  ),
  iam_identity_center_options: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      iam_identity_center_application_arn: z.string().optional(),
      iam_identity_center_instance_arn: z.string().optional(),
      iam_role_for_identity_center_application_arn: z.string().optional(),
    }).array().optional(),
  ),
  kms_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsOpensearchApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsOpensearchApplicationInputProps =
  & z.input<typeof AwsOpensearchApplicationInputSchema>
  & NodeProps

export type AwsOpensearchApplicationOutputProps =
  & z.output<typeof AwsOpensearchApplicationOutputSchema>
  & z.output<typeof AwsOpensearchApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_application

export function AwsOpensearchApplication(
  props: Partial<AwsOpensearchApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchApplicationInputSchema}
      _outputSchema={AwsOpensearchApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchApplicationOutputProps>(
    AwsOpensearchApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchApplicationOutputProps>(
    AwsOpensearchApplication,
    idFilter,
    baseNode,
    optional,
  )
