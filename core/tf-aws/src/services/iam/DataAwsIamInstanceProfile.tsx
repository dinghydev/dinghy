import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamInstanceProfile } from './AwsIamInstanceProfile.tsx'

export const DataAwsIamInstanceProfileInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsIamInstanceProfileOutputSchema = z.object({
  arn: z.string().optional(),
  create_date: z.string().optional(),
  path: z.string().optional(),
  role_arn: z.string().optional(),
  role_id: z.string().optional(),
  role_name: z.string().optional(),
})

export type DataAwsIamInstanceProfileInputProps =
  & z.input<typeof DataAwsIamInstanceProfileInputSchema>
  & NodeProps

export type DataAwsIamInstanceProfileOutputProps =
  & z.output<typeof DataAwsIamInstanceProfileOutputSchema>
  & z.output<typeof DataAwsIamInstanceProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_instance_profile

export function DataAwsIamInstanceProfile(
  props: Partial<DataAwsIamInstanceProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamInstanceProfile
      _type='aws_iam_instance_profile'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamInstanceProfileInputSchema}
      _outputSchema={DataAwsIamInstanceProfileOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamInstanceProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamInstanceProfileOutputProps>(
    DataAwsIamInstanceProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamInstanceProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamInstanceProfileOutputProps>(
    DataAwsIamInstanceProfile,
    idFilter,
    baseNode,
    optional,
  )
