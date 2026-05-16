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

export const AwsEksAccessEntryInputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  kubernetes_groups: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
})

export const AwsEksAccessEntryOutputSchema = z.object({
  access_entry_arn: z.string().optional(),
  created_at: z.string().optional(),
  modified_at: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEksAccessEntryImportSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEksAccessEntryInputProps =
  & z.input<typeof AwsEksAccessEntryInputSchema>
  & z.input<typeof AwsEksAccessEntryImportSchema>
  & NodeProps

export type AwsEksAccessEntryOutputProps =
  & z.output<typeof AwsEksAccessEntryOutputSchema>
  & z.output<typeof AwsEksAccessEntryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eks_access_entry

export function AwsEksAccessEntry(props: Partial<AwsEksAccessEntryInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_access_entry'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEksAccessEntryInputSchema}
      _outputSchema={AwsEksAccessEntryOutputSchema}
      _importSchema={AwsEksAccessEntryImportSchema}
      {...props}
    />
  )
}

export const useAwsEksAccessEntry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEksAccessEntryOutputProps>(
    AwsEksAccessEntry,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEksAccessEntrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEksAccessEntryOutputProps>(
    AwsEksAccessEntry,
    idFilter,
    baseNode,
    optional,
  )
