import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAuditmanagerFramework } from './AwsAuditmanagerFramework.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/auditmanager_framework

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  compliance_type: resolvableValue(z.string()),
  control_sets: resolvableValue(
    z.object({
      controls: z.object({
        id: z.string(),
      }).array(),
      id: z.string(),
      name: z.string(),
    }).array(),
  ),
  description: resolvableValue(z.string()),
  framework_type: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string())),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAuditmanagerFramework(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsAuditmanagerFramework
      _type='aws_auditmanager_framework'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAuditmanagerFramework = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAuditmanagerFramework, node, id)

export const useDataAwsAuditmanagerFrameworks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAuditmanagerFramework, node, id)
