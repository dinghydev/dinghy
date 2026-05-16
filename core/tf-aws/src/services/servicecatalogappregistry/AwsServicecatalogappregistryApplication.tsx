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

export const AwsServicecatalogappregistryApplicationInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsServicecatalogappregistryApplicationOutputSchema = z.object({
  application_tag: z.record(z.string(), z.string()).optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsServicecatalogappregistryApplicationInputProps =
  & z.input<typeof AwsServicecatalogappregistryApplicationInputSchema>
  & NodeProps

export type AwsServicecatalogappregistryApplicationOutputProps =
  & z.output<typeof AwsServicecatalogappregistryApplicationOutputSchema>
  & z.output<typeof AwsServicecatalogappregistryApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalogappregistry_application

export function AwsServicecatalogappregistryApplication(
  props: Partial<AwsServicecatalogappregistryApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalogappregistry_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogappregistryApplicationInputSchema}
      _outputSchema={AwsServicecatalogappregistryApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogappregistryApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogappregistryApplicationOutputProps>(
    AwsServicecatalogappregistryApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogappregistryApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogappregistryApplicationOutputProps>(
    AwsServicecatalogappregistryApplication,
    idFilter,
    baseNode,
    optional,
  )
