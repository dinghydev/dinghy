import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlueConnection } from './AwsGlueConnection.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  athena_properties: z.record(z.string(), z.string()).optional(),
  catalog_id: z.string().optional(),
  connection_properties: z.record(z.string(), z.string()).optional(),
  connection_type: z.string().optional(),
  description: z.string().optional(),
  match_criteria: z.string().array().optional(),
  name: z.string().optional(),
  physical_connection_requirements: z.object({
    availability_zone: z.string(),
    security_group_id_list: z.set(z.string()),
    subnet_id: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/glue_connection

export function DataAwsGlueConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlueConnection
      _type='aws_glue_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlueConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsGlueConnection, idFilter, baseNode, optional)

export const useDataAwsGlueConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGlueConnection,
    idFilter,
    baseNode,
    optional,
  )
