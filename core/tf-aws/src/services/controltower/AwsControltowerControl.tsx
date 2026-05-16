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

export const AwsControltowerControlInputSchema = TfMetaSchema.extend({
  control_identifier: resolvableValue(z.string()),
  target_identifier: resolvableValue(z.string()),
  parameters: resolvableValue(
    z.object({
      key: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsControltowerControlOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsControltowerControlInputProps =
  & z.input<typeof AwsControltowerControlInputSchema>
  & NodeProps

export type AwsControltowerControlOutputProps =
  & z.output<typeof AwsControltowerControlOutputSchema>
  & z.output<typeof AwsControltowerControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/controltower_control

export function AwsControltowerControl(
  props: Partial<AwsControltowerControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_controltower_control'
      _category='resource'
      _title={_title}
      _inputSchema={AwsControltowerControlInputSchema}
      _outputSchema={AwsControltowerControlOutputSchema}
      {...props}
    />
  )
}

export const useAwsControltowerControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsControltowerControlOutputProps>(
    AwsControltowerControl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsControltowerControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsControltowerControlOutputProps>(
    AwsControltowerControl,
    idFilter,
    baseNode,
    optional,
  )
