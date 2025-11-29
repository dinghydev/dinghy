import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_data_source

export const InputSchema = z.object({
  knowledge_base_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  data_deletion_policy: resolvableValue(z.string().optional()),
  data_source_configuration: resolvableValue(
    z.object({
      type: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_side_encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  vector_ingestion_configuration: resolvableValue(
    z.object({
      chunking_configuration: z.object({
        chunking_strategy: z.string(),
      }).optional(),
      custom_transformation_configuration: z.object({
        intermediate_storage: z.object({
          s3_location: z.object({
            uri: z.string(),
          }).optional(),
        }).optional(),
        transformation: z.object({
          step_to_apply: z.string(),
        }).optional(),
      }).optional(),
      parsing_configuration: z.object({
        parsing_strategy: z.string(),
      }).optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  data_source_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentDataSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_data_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentDataSource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentDataSource, node, id)

export const useAwsBedrockagentDataSources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentDataSource, node, id)
