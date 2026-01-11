import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessVpcEndpoint } from './AwsOpensearchserverlessVpcEndpoint.tsx'

export const InputSchema = z.object({
  vpc_endpoint_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  created_date: z.string().optional(),
  name: z.string().optional(),
  security_group_ids: z.string().array().optional(),
  subnet_ids: z.string().array().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/opensearchserverless_vpc_endpoint

export function DataAwsOpensearchserverlessVpcEndpoint(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessVpcEndpoint
      _type='aws_opensearchserverless_vpc_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessVpcEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsOpensearchserverlessVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessVpcEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOpensearchserverlessVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )
