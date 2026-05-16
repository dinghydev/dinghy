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

export const AwsEc2InstanceStateInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  state: resolvableValue(z.string()),
  force: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEc2InstanceStateOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2InstanceStateInputProps =
  & z.input<typeof AwsEc2InstanceStateInputSchema>
  & NodeProps

export type AwsEc2InstanceStateOutputProps =
  & z.output<typeof AwsEc2InstanceStateOutputSchema>
  & z.output<typeof AwsEc2InstanceStateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_instance_state

export function AwsEc2InstanceState(
  props: Partial<AwsEc2InstanceStateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_state'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2InstanceStateInputSchema}
      _outputSchema={AwsEc2InstanceStateOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2InstanceState = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2InstanceStateOutputProps>(
    AwsEc2InstanceState,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2InstanceStates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2InstanceStateOutputProps>(
    AwsEc2InstanceState,
    idFilter,
    baseNode,
    optional,
  )
