import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLakeformationResource } from './AwsLakeformationResource.tsx'

export const DataAwsLakeformationResourceInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLakeformationResourceOutputSchema = z.object({
  hybrid_access_enabled: z.boolean().optional(),
  last_modified: z.string().optional(),
  role_arn: z.string().optional(),
  with_federation: z.boolean().optional(),
  with_privileged_access: z.boolean().optional(),
})

export type DataAwsLakeformationResourceInputProps =
  & z.input<typeof DataAwsLakeformationResourceInputSchema>
  & NodeProps

export type DataAwsLakeformationResourceOutputProps =
  & z.output<typeof DataAwsLakeformationResourceOutputSchema>
  & z.output<typeof DataAwsLakeformationResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lakeformation_resource

export function DataAwsLakeformationResource(
  props: Partial<DataAwsLakeformationResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLakeformationResource
      _type='aws_lakeformation_resource'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLakeformationResourceInputSchema}
      _outputSchema={DataAwsLakeformationResourceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLakeformationResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLakeformationResourceOutputProps>(
    DataAwsLakeformationResource,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLakeformationResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLakeformationResourceOutputProps>(
    DataAwsLakeformationResource,
    idFilter,
    baseNode,
    optional,
  )
