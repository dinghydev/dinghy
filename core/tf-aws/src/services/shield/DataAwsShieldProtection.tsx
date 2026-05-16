import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsShieldProtection } from './AwsShieldProtection.tsx'

export const DataAwsShieldProtectionInputSchema = TfMetaSchema.extend({
  protection_id: resolvableValue(z.string().optional()),
  resource_arn: resolvableValue(z.string().optional()),
})

export const DataAwsShieldProtectionOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  protection_arn: z.string().optional(),
})

export type DataAwsShieldProtectionInputProps =
  & z.input<typeof DataAwsShieldProtectionInputSchema>
  & NodeProps

export type DataAwsShieldProtectionOutputProps =
  & z.output<typeof DataAwsShieldProtectionOutputSchema>
  & z.output<typeof DataAwsShieldProtectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/shield_protection

export function DataAwsShieldProtection(
  props: Partial<DataAwsShieldProtectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsShieldProtection
      _type='aws_shield_protection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsShieldProtectionInputSchema}
      _outputSchema={DataAwsShieldProtectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsShieldProtection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsShieldProtectionOutputProps>(
    DataAwsShieldProtection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsShieldProtections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsShieldProtectionOutputProps>(
    DataAwsShieldProtection,
    idFilter,
    baseNode,
    optional,
  )
