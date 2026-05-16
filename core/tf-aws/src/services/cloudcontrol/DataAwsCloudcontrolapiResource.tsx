import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudcontrolapiResource } from './AwsCloudcontrolapiResource.tsx'

export const DataAwsCloudcontrolapiResourceInputSchema = TfMetaSchema.extend({
  identifier: resolvableValue(z.string()),
  type_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  type_version_id: resolvableValue(z.string().optional()),
})

export const DataAwsCloudcontrolapiResourceOutputSchema = z.object({
  properties: z.string().optional(),
})

export type DataAwsCloudcontrolapiResourceInputProps =
  & z.input<typeof DataAwsCloudcontrolapiResourceInputSchema>
  & NodeProps

export type DataAwsCloudcontrolapiResourceOutputProps =
  & z.output<typeof DataAwsCloudcontrolapiResourceOutputSchema>
  & z.output<typeof DataAwsCloudcontrolapiResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudcontrolapi_resource

export function DataAwsCloudcontrolapiResource(
  props: Partial<DataAwsCloudcontrolapiResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudcontrolapiResource
      _type='aws_cloudcontrolapi_resource'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudcontrolapiResourceInputSchema}
      _outputSchema={DataAwsCloudcontrolapiResourceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudcontrolapiResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudcontrolapiResourceOutputProps>(
    DataAwsCloudcontrolapiResource,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudcontrolapiResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudcontrolapiResourceOutputProps>(
    DataAwsCloudcontrolapiResource,
    idFilter,
    baseNode,
    optional,
  )
