import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppconfigEnvironment } from './AwsAppconfigEnvironment.tsx'

export const DataAwsAppconfigEnvironmentInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAppconfigEnvironmentOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  monitor: z.set(z.object({
    alarm_arn: z.string(),
    alarm_role_arn: z.string(),
  })).optional(),
  name: z.string().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsAppconfigEnvironmentInputProps =
  & z.input<typeof DataAwsAppconfigEnvironmentInputSchema>
  & NodeProps

export type DataAwsAppconfigEnvironmentOutputProps =
  & z.output<typeof DataAwsAppconfigEnvironmentOutputSchema>
  & z.output<typeof DataAwsAppconfigEnvironmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appconfig_environment

export function DataAwsAppconfigEnvironment(
  props: Partial<DataAwsAppconfigEnvironmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppconfigEnvironment
      _type='aws_appconfig_environment'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppconfigEnvironmentInputSchema}
      _outputSchema={DataAwsAppconfigEnvironmentOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppconfigEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAppconfigEnvironmentOutputProps>(
    DataAwsAppconfigEnvironment,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppconfigEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppconfigEnvironmentOutputProps>(
    DataAwsAppconfigEnvironment,
    idFilter,
    baseNode,
    optional,
  )
