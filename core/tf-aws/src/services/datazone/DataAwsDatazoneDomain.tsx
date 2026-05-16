import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDatazoneDomain } from './AwsDatazoneDomain.tsx'

export const DataAwsDatazoneDomainInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDatazoneDomainOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  domain_version: z.string().optional(),
  last_updated_at: z.string().optional(),
  managed_account_id: z.string().optional(),
  portal_url: z.string().optional(),
  root_domain_unit_id: z.string().optional(),
  status: z.string().optional(),
})

export type DataAwsDatazoneDomainInputProps =
  & z.input<typeof DataAwsDatazoneDomainInputSchema>
  & NodeProps

export type DataAwsDatazoneDomainOutputProps =
  & z.output<typeof DataAwsDatazoneDomainOutputSchema>
  & z.output<typeof DataAwsDatazoneDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/datazone_domain

export function DataAwsDatazoneDomain(
  props: Partial<DataAwsDatazoneDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDatazoneDomain
      _type='aws_datazone_domain'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDatazoneDomainInputSchema}
      _outputSchema={DataAwsDatazoneDomainOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDatazoneDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDatazoneDomainOutputProps>(
    DataAwsDatazoneDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDatazoneDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDatazoneDomainOutputProps>(
    DataAwsDatazoneDomain,
    idFilter,
    baseNode,
    optional,
  )
