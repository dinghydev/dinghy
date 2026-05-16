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

export const AwsCodeartifactDomainInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  encryption_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCodeartifactDomainOutputSchema = z.object({
  arn: z.string().optional(),
  asset_size_bytes: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  repository_count: z.number().optional(),
  s3_bucket_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodeartifactDomainImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodeartifactDomainInputProps =
  & z.input<typeof AwsCodeartifactDomainInputSchema>
  & z.input<typeof AwsCodeartifactDomainImportSchema>
  & NodeProps

export type AwsCodeartifactDomainOutputProps =
  & z.output<typeof AwsCodeartifactDomainOutputSchema>
  & z.output<typeof AwsCodeartifactDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeartifact_domain

export function AwsCodeartifactDomain(
  props: Partial<AwsCodeartifactDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeartifactDomainInputSchema}
      _outputSchema={AwsCodeartifactDomainOutputSchema}
      _importSchema={AwsCodeartifactDomainImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeartifactDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeartifactDomainOutputProps>(
    AwsCodeartifactDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeartifactDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeartifactDomainOutputProps>(
    AwsCodeartifactDomain,
    idFilter,
    baseNode,
    optional,
  )
