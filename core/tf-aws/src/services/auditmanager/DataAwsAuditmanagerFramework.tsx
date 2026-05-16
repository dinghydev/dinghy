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

export const DataAwsAuditmanagerFrameworkInputSchema = TfMetaSchema.extend({
  framework_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAuditmanagerFrameworkOutputSchema = z.object({
  arn: z.string().optional(),
  compliance_type: z.string().optional(),
  control_sets: z.object({
    controls: z.set(z.object({
      id: z.string(),
    })),
    id: z.string(),
    name: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsAuditmanagerFrameworkInputProps =
  & z.input<typeof DataAwsAuditmanagerFrameworkInputSchema>
  & NodeProps

export type DataAwsAuditmanagerFrameworkOutputProps =
  & z.output<typeof DataAwsAuditmanagerFrameworkOutputSchema>
  & z.output<typeof DataAwsAuditmanagerFrameworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/auditmanager_framework

export function DataAwsAuditmanagerFramework(
  props: Partial<DataAwsAuditmanagerFrameworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAuditmanagerFramework
      _type='aws_auditmanager_framework'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAuditmanagerFrameworkInputSchema}
      _outputSchema={DataAwsAuditmanagerFrameworkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAuditmanagerFramework = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAuditmanagerFrameworkOutputProps>(
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
  useTypedNodes<DataAwsAuditmanagerFrameworkOutputProps>(
    DataAwsAuditmanagerFramework,
    idFilter,
    baseNode,
    optional,
  )
