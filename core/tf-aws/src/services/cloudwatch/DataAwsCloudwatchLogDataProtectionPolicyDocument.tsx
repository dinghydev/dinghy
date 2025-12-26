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
  name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      custom_data_identifier: z.object({
        name: z.string(),
        regex: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  statement: resolvableValue(
    z.object({
      data_identifiers: z.string().array(),
      sid: z.string().optional(),
      operation: z.object({
        audit: z.object({
          findings_destination: z.object({
            cloudwatch_logs: z.object({
              log_group: z.string(),
            }).optional(),
            firehose: z.object({
              delivery_stream: z.string(),
            }).optional(),
            s3: z.object({
              bucket: z.string(),
            }).optional(),
          }),
        }).optional(),
        deidentify: z.object({
          mask_config: z.object({}),
        }).optional(),
      }),
    }).array().optional(),
  ),
  version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudwatch_log_data_protection_policy_document

export function DataAwsCloudwatchLogDataProtectionPolicyDocument(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_data_protection_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudwatchLogDataProtectionPolicyDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudwatchLogDataProtectionPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudwatchLogDataProtectionPolicyDocuments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudwatchLogDataProtectionPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )
