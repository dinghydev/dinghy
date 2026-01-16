import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogappregistryApplication } from './AwsServicecatalogappregistryApplication.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  application_tag: z.record(z.string(), z.string()).optional(),
  arn: z.string().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/servicecatalogappregistry_application

export function DataAwsServicecatalogappregistryApplication(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicecatalogappregistryApplication
      _type='aws_servicecatalogappregistry_application'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogappregistryApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsServicecatalogappregistryApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicecatalogappregistryApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsServicecatalogappregistryApplication,
    idFilter,
    baseNode,
    optional,
  )
