import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIamInstanceProfilesInputSchema = TfMetaSchema.extend({
  role_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsIamInstanceProfilesOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
  paths: z.set(z.string()).optional(),
})

export type DataAwsIamInstanceProfilesInputProps =
  & z.input<typeof DataAwsIamInstanceProfilesInputSchema>
  & NodeProps

export type DataAwsIamInstanceProfilesOutputProps =
  & z.output<typeof DataAwsIamInstanceProfilesOutputSchema>
  & z.output<typeof DataAwsIamInstanceProfilesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_instance_profiles

export function DataAwsIamInstanceProfiles(
  props: Partial<DataAwsIamInstanceProfilesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_instance_profiles'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamInstanceProfilesInputSchema}
      _outputSchema={DataAwsIamInstanceProfilesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamInstanceProfiless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamInstanceProfilesOutputProps>(
    DataAwsIamInstanceProfiles,
    idFilter,
    baseNode,
    optional,
  )
