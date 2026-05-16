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

export const AwsQuicksightGroupInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightGroupOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsQuicksightGroupInputProps =
  & z.input<typeof AwsQuicksightGroupInputSchema>
  & NodeProps

export type AwsQuicksightGroupOutputProps =
  & z.output<typeof AwsQuicksightGroupOutputSchema>
  & z.output<typeof AwsQuicksightGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_group

export function AwsQuicksightGroup(
  props: Partial<AwsQuicksightGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightGroupInputSchema}
      _outputSchema={AwsQuicksightGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightGroupOutputProps>(
    AwsQuicksightGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightGroupOutputProps>(
    AwsQuicksightGroup,
    idFilter,
    baseNode,
    optional,
  )
