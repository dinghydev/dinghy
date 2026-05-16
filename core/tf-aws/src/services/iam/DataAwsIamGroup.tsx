import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamGroup } from './AwsIamGroup.tsx'

export const DataAwsIamGroupInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
})

export const DataAwsIamGroupOutputSchema = z.object({
  arn: z.string().optional(),
  group_id: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  users: z.object({
    arn: z.string(),
    path: z.string(),
    user_id: z.string(),
    user_name: z.string(),
  }).array().optional(),
})

export type DataAwsIamGroupInputProps =
  & z.input<typeof DataAwsIamGroupInputSchema>
  & NodeProps

export type DataAwsIamGroupOutputProps =
  & z.output<typeof DataAwsIamGroupOutputSchema>
  & z.output<typeof DataAwsIamGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_group

export function DataAwsIamGroup(props: Partial<DataAwsIamGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamGroup
      _type='aws_iam_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamGroupInputSchema}
      _outputSchema={DataAwsIamGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamGroupOutputProps>(
    DataAwsIamGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamGroupOutputProps>(
    DataAwsIamGroup,
    idFilter,
    baseNode,
    optional,
  )
