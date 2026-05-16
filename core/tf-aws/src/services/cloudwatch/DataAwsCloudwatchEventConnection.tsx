import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudwatchEventConnection } from './AwsCloudwatchEventConnection.tsx'

export const DataAwsCloudwatchEventConnectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCloudwatchEventConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  authorization_type: z.string().optional(),
  kms_key_identifier: z.string().optional(),
  secret_arn: z.string().optional(),
})

export type DataAwsCloudwatchEventConnectionInputProps =
  & z.input<typeof DataAwsCloudwatchEventConnectionInputSchema>
  & NodeProps

export type DataAwsCloudwatchEventConnectionOutputProps =
  & z.output<typeof DataAwsCloudwatchEventConnectionOutputSchema>
  & z.output<typeof DataAwsCloudwatchEventConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudwatch_event_connection

export function DataAwsCloudwatchEventConnection(
  props: Partial<DataAwsCloudwatchEventConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudwatchEventConnection
      _type='aws_cloudwatch_event_connection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudwatchEventConnectionInputSchema}
      _outputSchema={DataAwsCloudwatchEventConnectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudwatchEventConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudwatchEventConnectionOutputProps>(
    DataAwsCloudwatchEventConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudwatchEventConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudwatchEventConnectionOutputProps>(
    DataAwsCloudwatchEventConnection,
    idFilter,
    baseNode,
    optional,
  )
