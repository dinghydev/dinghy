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

export const AwsAuditmanagerFrameworkShareInputSchema = TfMetaSchema.extend({
  destination_account: resolvableValue(z.string()),
  destination_region: resolvableValue(z.string()),
  framework_id: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAuditmanagerFrameworkShareOutputSchema = z.object({
  id: z.string().optional(),
  status: z.string().optional(),
})

export const AwsAuditmanagerFrameworkShareImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAuditmanagerFrameworkShareInputProps =
  & z.input<typeof AwsAuditmanagerFrameworkShareInputSchema>
  & z.input<typeof AwsAuditmanagerFrameworkShareImportSchema>
  & NodeProps

export type AwsAuditmanagerFrameworkShareOutputProps =
  & z.output<typeof AwsAuditmanagerFrameworkShareOutputSchema>
  & z.output<typeof AwsAuditmanagerFrameworkShareInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_framework_share

export function AwsAuditmanagerFrameworkShare(
  props: Partial<AwsAuditmanagerFrameworkShareInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_framework_share'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerFrameworkShareInputSchema}
      _outputSchema={AwsAuditmanagerFrameworkShareOutputSchema}
      _importSchema={AwsAuditmanagerFrameworkShareImportSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerFrameworkShare = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerFrameworkShareOutputProps>(
    AwsAuditmanagerFrameworkShare,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerFrameworkShares = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerFrameworkShareOutputProps>(
    AwsAuditmanagerFrameworkShare,
    idFilter,
    baseNode,
    optional,
  )
