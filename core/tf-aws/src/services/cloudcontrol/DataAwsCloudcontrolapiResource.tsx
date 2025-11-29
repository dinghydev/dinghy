import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudcontrolapiResource } from './AwsCloudcontrolapiResource.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudcontrolapi_resource

export const InputSchema = z.object({
  identifier: resolvableValue(z.string()),
  type_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  type_version_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  properties: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudcontrolapiResource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCloudcontrolapiResource
      _type='aws_cloudcontrolapi_resource'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudcontrolapiResource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCloudcontrolapiResource, node, id)

export const useDataAwsCloudcontrolapiResources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCloudcontrolapiResource, node, id)
