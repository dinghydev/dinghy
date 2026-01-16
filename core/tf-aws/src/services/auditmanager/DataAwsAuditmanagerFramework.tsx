import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAuditmanagerFramework } from './AwsAuditmanagerFramework.tsx'

export const InputSchema = TfMetaSchema.extend({
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/auditmanager_framework

export function DataAwsAuditmanagerFramework(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsAuditmanagerFramework = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsAuditmanagerFramework,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAuditmanagerFrameworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAuditmanagerFramework,
    idFilter,
    baseNode,
    optional,
  )
