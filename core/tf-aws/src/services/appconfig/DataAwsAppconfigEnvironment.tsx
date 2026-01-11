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

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/appconfig_environment

export function DataAwsAppconfigEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAppconfigEnvironment
      _type='aws_appconfig_environment'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAppconfigEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsAppconfigEnvironment,
    idFilter,
    baseNode,
    optional,
  )
