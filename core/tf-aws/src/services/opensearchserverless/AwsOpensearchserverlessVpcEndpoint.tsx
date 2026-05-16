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

export const AwsOpensearchserverlessVpcEndpointInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    subnet_ids: resolvableValue(z.string().array()),
    vpc_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    security_group_ids: resolvableValue(z.string().array().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsOpensearchserverlessVpcEndpointOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsOpensearchserverlessVpcEndpointImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessVpcEndpointInputProps =
  & z.input<typeof AwsOpensearchserverlessVpcEndpointInputSchema>
  & z.input<typeof AwsOpensearchserverlessVpcEndpointImportSchema>
  & NodeProps

export type AwsOpensearchserverlessVpcEndpointOutputProps =
  & z.output<typeof AwsOpensearchserverlessVpcEndpointOutputSchema>
  & z.output<typeof AwsOpensearchserverlessVpcEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_vpc_endpoint

export function AwsOpensearchserverlessVpcEndpoint(
  props: Partial<AwsOpensearchserverlessVpcEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_vpc_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessVpcEndpointInputSchema}
      _outputSchema={AwsOpensearchserverlessVpcEndpointOutputSchema}
      _importSchema={AwsOpensearchserverlessVpcEndpointImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessVpcEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessVpcEndpointOutputProps>(
    AwsOpensearchserverlessVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessVpcEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessVpcEndpointOutputProps>(
    AwsOpensearchserverlessVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )
