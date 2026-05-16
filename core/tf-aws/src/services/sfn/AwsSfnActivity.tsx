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

export const AwsSfnActivityInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_data_key_reuse_period_seconds: z.number().optional(),
      kms_key_id: z.string().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSfnActivityOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSfnActivityImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSfnActivityInputProps =
  & z.input<typeof AwsSfnActivityInputSchema>
  & z.input<typeof AwsSfnActivityImportSchema>
  & NodeProps

export type AwsSfnActivityOutputProps =
  & z.output<typeof AwsSfnActivityOutputSchema>
  & z.output<typeof AwsSfnActivityInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sfn_activity

export function AwsSfnActivity(props: Partial<AwsSfnActivityInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sfn_activity'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSfnActivityInputSchema}
      _outputSchema={AwsSfnActivityOutputSchema}
      _importSchema={AwsSfnActivityImportSchema}
      {...props}
    />
  )
}

export const useAwsSfnActivity = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSfnActivityOutputProps>(
    AwsSfnActivity,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSfnActivitys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSfnActivityOutputProps>(
    AwsSfnActivity,
    idFilter,
    baseNode,
    optional,
  )
