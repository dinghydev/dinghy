import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudformationType } from './AwsCloudformationType.tsx'

export const InputSchema = z.object({
  type_arn: resolvableValue(z.string()),
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
  type_name: resolvableValue(z.string().optional()),
  version_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  default_version_id: z.string().optional(),
  deprecated_status: z.string().optional(),
  description: z.string().optional(),
  documentation_url: z.string().optional(),
  execution_role_arn: z.string().optional(),
  is_default_version: z.boolean().optional(),
  logging_config: z.object({
    log_group_name: z.string(),
    log_role_arn: z.string(),
  }).array().optional(),
  provisioning_type: z.string().optional(),
  schema: z.string().optional(),
  source_url: z.string().optional(),
  visibility: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudformation_type

export function DataAwsCloudformationType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudformationType
      _type='aws_cloudformation_type'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudformationType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudformationType,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudformationTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudformationType,
    idFilter,
    baseNode,
    optional,
  )
