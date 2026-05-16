import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamUser } from './AwsIamUser.tsx'

export const DataAwsIamUserInputSchema = TfMetaSchema.extend({
  user_name: resolvableValue(z.string()),
})

export const DataAwsIamUserOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  permissions_boundary: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_id: z.string().optional(),
  user_name: z.string().optional(),
})

export type DataAwsIamUserInputProps =
  & z.input<typeof DataAwsIamUserInputSchema>
  & NodeProps

export type DataAwsIamUserOutputProps =
  & z.output<typeof DataAwsIamUserOutputSchema>
  & z.output<typeof DataAwsIamUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_user

export function DataAwsIamUser(props: Partial<DataAwsIamUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamUser
      _type='aws_iam_user'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamUserInputSchema}
      _outputSchema={DataAwsIamUserOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamUserOutputProps>(
    DataAwsIamUser,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamUserOutputProps>(
    DataAwsIamUser,
    idFilter,
    baseNode,
    optional,
  )
