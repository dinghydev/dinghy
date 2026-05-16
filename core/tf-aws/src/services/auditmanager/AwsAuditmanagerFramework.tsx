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

export const AwsAuditmanagerFrameworkInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  compliance_type: resolvableValue(z.string().optional()),
  control_sets: resolvableValue(
    z.object({
      id: z.string().optional(),
      name: z.string(),
      controls: z.object({
        id: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAuditmanagerFrameworkOutputSchema = z.object({
  arn: z.string().optional(),
  framework_type: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsAuditmanagerFrameworkImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAuditmanagerFrameworkInputProps =
  & z.input<typeof AwsAuditmanagerFrameworkInputSchema>
  & z.input<typeof AwsAuditmanagerFrameworkImportSchema>
  & NodeProps

export type AwsAuditmanagerFrameworkOutputProps =
  & z.output<typeof AwsAuditmanagerFrameworkOutputSchema>
  & z.output<typeof AwsAuditmanagerFrameworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_framework

export function AwsAuditmanagerFramework(
  props: Partial<AwsAuditmanagerFrameworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_framework'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerFrameworkInputSchema}
      _outputSchema={AwsAuditmanagerFrameworkOutputSchema}
      _importSchema={AwsAuditmanagerFrameworkImportSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerFramework = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerFrameworkOutputProps>(
    AwsAuditmanagerFramework,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerFrameworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerFrameworkOutputProps>(
    AwsAuditmanagerFramework,
    idFilter,
    baseNode,
    optional,
  )
