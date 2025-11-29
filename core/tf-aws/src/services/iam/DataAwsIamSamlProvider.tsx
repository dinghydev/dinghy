import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamSamlProvider } from './AwsIamSamlProvider.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_saml_provider

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  create_date: z.string().optional(),
  name: z.string().optional(),
  saml_metadata_document: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  valid_until: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamSamlProvider(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamSamlProvider
      _type='aws_iam_saml_provider'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamSamlProvider = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamSamlProvider, node, id)

export const useDataAwsIamSamlProviders = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamSamlProvider, node, id)
