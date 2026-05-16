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

export const AwsIotPolicyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsIotPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  default_version_id: z.string().optional(),
  name: z.string().optional(),
  policy: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsIotPolicyInputProps =
  & z.input<typeof AwsIotPolicyInputSchema>
  & NodeProps

export type AwsIotPolicyOutputProps =
  & z.output<typeof AwsIotPolicyOutputSchema>
  & z.output<typeof AwsIotPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_policy

export function AwsIotPolicy(props: Partial<AwsIotPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotPolicyInputSchema}
      _outputSchema={AwsIotPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotPolicyOutputProps>(
    AwsIotPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotPolicyOutputProps>(
    AwsIotPolicy,
    idFilter,
    baseNode,
    optional,
  )
