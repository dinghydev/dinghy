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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  hybrid_access_enabled: z.boolean().optional(),
  last_modified: z.string().optional(),
  role_arn: z.string().optional(),
  with_federation: z.boolean().optional(),
  with_privileged_access: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lakeformation_resource

export function DataAwsLakeformationResource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLakeformationResource
      _type='aws_lakeformation_resource'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLakeformationResource = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsLakeformationResource, idFilter, baseNode)

export const useDataAwsLakeformationResources = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(DataAwsLakeformationResource, idFilter, baseNode)
