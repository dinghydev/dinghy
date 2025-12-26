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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_workflow

export function AwsTransferWorkflow(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_workflow'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferWorkflow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsTransferWorkflow, idFilter, baseNode, optional)

export const useAwsTransferWorkflows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsTransferWorkflow, idFilter, baseNode, optional)
