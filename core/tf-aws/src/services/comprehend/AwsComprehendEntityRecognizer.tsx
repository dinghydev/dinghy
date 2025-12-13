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

export const InputSchema = z.object({
  data_access_role_arn: resolvableValue(z.string()),
  input_data_config: resolvableValue(z.object({
    data_format: z.string().optional(),
    annotations: z.object({
      s3_uri: z.string(),
      test_s3_uri: z.string().optional(),
    }).optional(),
    augmented_manifests: z.object({
      annotation_data_s3_uri: z.string().optional(),
      attribute_names: z.string().array(),
      document_type: z.string().optional(),
      s3_uri: z.string(),
      source_documents_s3_uri: z.string().optional(),
      split: z.string().optional(),
    }).array().optional(),
    documents: z.object({
      input_format: z.string().optional(),
      s3_uri: z.string(),
      test_s3_uri: z.string().optional(),
    }).optional(),
    entity_list: z.object({
      s3_uri: z.string(),
    }).optional(),
    entity_types: z.object({
      type: z.string(),
    }).array(),
  })),
  language_code: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  model_kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  version_name: resolvableValue(z.string().optional()),
  version_name_prefix: resolvableValue(z.string().optional()),
  volume_kms_key_id: resolvableValue(z.string().optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnets: z.string().array(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/comprehend_entity_recognizer

export function AwsComprehendEntityRecognizer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_comprehend_entity_recognizer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsComprehendEntityRecognizer = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsComprehendEntityRecognizer, idFilter, baseNode)

export const useAwsComprehendEntityRecognizers = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsComprehendEntityRecognizer, idFilter, baseNode)
