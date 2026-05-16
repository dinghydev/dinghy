import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsKendraThesaurusInputSchema = TfMetaSchema.extend({
  index_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  source_s3_path: resolvableValue(z.object({
    bucket: z.string(),
    key: z.string(),
  })),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsKendraThesaurusOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  thesaurus_id: z.string().optional(),
})

export type AwsKendraThesaurusInputProps =
  & z.input<typeof AwsKendraThesaurusInputSchema>
  & NodeProps

export type AwsKendraThesaurusOutputProps =
  & z.output<typeof AwsKendraThesaurusOutputSchema>
  & z.output<typeof AwsKendraThesaurusInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kendra_thesaurus

export function AwsKendraThesaurus(
  props: Partial<AwsKendraThesaurusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kendra_thesaurus'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKendraThesaurusInputSchema}
      _outputSchema={AwsKendraThesaurusOutputSchema}
      {...props}
    />
  )
}

export const useAwsKendraThesauruss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKendraThesaurusOutputProps>(
    AwsKendraThesaurus,
    idFilter,
    baseNode,
    optional,
  )
