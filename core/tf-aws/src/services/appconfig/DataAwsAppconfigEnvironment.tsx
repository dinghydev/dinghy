import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAppconfigEnvironment } from './AwsAppconfigEnvironment.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appconfig_environment

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  monitor: z.object({
    alarm_arn: z.string(),
    alarm_role_arn: z.string(),
  }).array().optional(),
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

export function DataAwsAppconfigEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsAppconfigEnvironment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAppconfigEnvironment, node, id)

export const useDataAwsAppconfigEnvironments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAppconfigEnvironment, node, id)
