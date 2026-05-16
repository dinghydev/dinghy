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

export const AwsEc2TagInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2TagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2TagInputProps =
  & z.input<typeof AwsEc2TagInputSchema>
  & NodeProps

export type AwsEc2TagOutputProps =
  & z.output<typeof AwsEc2TagOutputSchema>
  & z.output<typeof AwsEc2TagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_tag

export function AwsEc2Tag(props: Partial<AwsEc2TagInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TagInputSchema}
      _outputSchema={AwsEc2TagOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2Tag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<AwsEc2TagOutputProps>(AwsEc2Tag, idFilter, baseNode, optional)

export const useAwsEc2Tags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TagOutputProps>(AwsEc2Tag, idFilter, baseNode, optional)
