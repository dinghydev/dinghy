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

export const AwsTransferWorkflowInputSchema = TfMetaSchema.extend({
  steps: resolvableValue(
    z.object({
      type: z.string(),
      copy_step_details: z.object({
        name: z.string().optional(),
        overwrite_existing: z.string().optional(),
        source_file_location: z.string().optional(),
        destination_file_location: z.object({
          efs_file_location: z.object({
            file_system_id: z.string().optional(),
            path: z.string().optional(),
          }).optional(),
          s3_file_location: z.object({
            bucket: z.string().optional(),
            key: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      custom_step_details: z.object({
        name: z.string().optional(),
        source_file_location: z.string().optional(),
        target: z.string().optional(),
        timeout_seconds: z.number().optional(),
      }).optional(),
      decrypt_step_details: z.object({
        name: z.string().optional(),
        overwrite_existing: z.string().optional(),
        source_file_location: z.string().optional(),
        type: z.string(),
        destination_file_location: z.object({
          efs_file_location: z.object({
            file_system_id: z.string().optional(),
            path: z.string().optional(),
          }).optional(),
          s3_file_location: z.object({
            bucket: z.string().optional(),
            key: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      delete_step_details: z.object({
        name: z.string().optional(),
        source_file_location: z.string().optional(),
      }).optional(),
      tag_step_details: z.object({
        name: z.string().optional(),
        source_file_location: z.string().optional(),
        tags: z.object({
          key: z.string(),
          value: z.string(),
        }).array().optional(),
      }).optional(),
    }).array(),
  ),
  description: resolvableValue(z.string().optional()),
  on_exception_steps: resolvableValue(
    z.object({
      type: z.string(),
      copy_step_details: z.object({
        name: z.string().optional(),
        overwrite_existing: z.string().optional(),
        source_file_location: z.string().optional(),
        destination_file_location: z.object({
          efs_file_location: z.object({
            file_system_id: z.string().optional(),
            path: z.string().optional(),
          }).optional(),
          s3_file_location: z.object({
            bucket: z.string().optional(),
            key: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      custom_step_details: z.object({
        name: z.string().optional(),
        source_file_location: z.string().optional(),
        target: z.string().optional(),
        timeout_seconds: z.number().optional(),
      }).optional(),
      decrypt_step_details: z.object({
        name: z.string().optional(),
        overwrite_existing: z.string().optional(),
        source_file_location: z.string().optional(),
        type: z.string(),
        destination_file_location: z.object({
          efs_file_location: z.object({
            file_system_id: z.string().optional(),
            path: z.string().optional(),
          }).optional(),
          s3_file_location: z.object({
            bucket: z.string().optional(),
            key: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      delete_step_details: z.object({
        name: z.string().optional(),
        source_file_location: z.string().optional(),
      }).optional(),
      tag_step_details: z.object({
        name: z.string().optional(),
        source_file_location: z.string().optional(),
        tags: z.object({
          key: z.string(),
          value: z.string(),
        }).array().optional(),
      }).optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsTransferWorkflowOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsTransferWorkflowInputProps =
  & z.input<typeof AwsTransferWorkflowInputSchema>
  & NodeProps

export type AwsTransferWorkflowOutputProps =
  & z.output<typeof AwsTransferWorkflowOutputSchema>
  & z.output<typeof AwsTransferWorkflowInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_workflow

export function AwsTransferWorkflow(
  props: Partial<AwsTransferWorkflowInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_workflow'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferWorkflowInputSchema}
      _outputSchema={AwsTransferWorkflowOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferWorkflow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferWorkflowOutputProps>(
    AwsTransferWorkflow,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferWorkflows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferWorkflowOutputProps>(
    AwsTransferWorkflow,
    idFilter,
    baseNode,
    optional,
  )
