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

export const AwsCloudformationStackInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  capabilities: resolvableValue(z.string().array().optional()),
  disable_rollback: resolvableValue(z.boolean().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  notification_arns: resolvableValue(z.string().array().optional()),
  on_failure: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  policy_body: resolvableValue(z.string().optional()),
  policy_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  template_body: resolvableValue(z.string().optional()),
  template_url: resolvableValue(z.string().optional()),
  timeout_in_minutes: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudformationStackOutputSchema = z.object({
  id: z.string().optional(),
  outputs: z.record(z.string(), z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudformationStackInputProps =
  & z.input<typeof AwsCloudformationStackInputSchema>
  & NodeProps

export type AwsCloudformationStackOutputProps =
  & z.output<typeof AwsCloudformationStackOutputSchema>
  & z.output<typeof AwsCloudformationStackInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudformation_stack

export function AwsCloudformationStack(
  props: Partial<AwsCloudformationStackInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudformation_stack'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudformationStackInputSchema}
      _outputSchema={AwsCloudformationStackOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudformationStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudformationStackOutputProps>(
    AwsCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudformationStacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudformationStackOutputProps>(
    AwsCloudformationStack,
    idFilter,
    baseNode,
    optional,
  )
