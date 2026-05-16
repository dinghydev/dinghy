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

export const DataAwsServicePrincipalInputSchema = TfMetaSchema.extend({
  service_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsServicePrincipalOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  suffix: z.string().optional(),
})

export type DataAwsServicePrincipalInputProps =
  & z.input<typeof DataAwsServicePrincipalInputSchema>
  & NodeProps

export type DataAwsServicePrincipalOutputProps =
  & z.output<typeof DataAwsServicePrincipalOutputSchema>
  & z.output<typeof DataAwsServicePrincipalInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/service_principal

export function DataAwsServicePrincipal(
  props: Partial<DataAwsServicePrincipalInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_principal'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicePrincipalInputSchema}
      _outputSchema={DataAwsServicePrincipalOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicePrincipal = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServicePrincipalOutputProps>(
    DataAwsServicePrincipal,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicePrincipals = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicePrincipalOutputProps>(
    DataAwsServicePrincipal,
    idFilter,
    baseNode,
    optional,
  )
