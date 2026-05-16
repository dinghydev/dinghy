import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSfnAliasInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  routing_configuration: resolvableValue(
    z.object({
      state_machine_version_arn: z.string(),
      weight: z.number(),
    }).array(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSfnAliasOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
})

export const AwsSfnAliasImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSfnAliasInputProps =
  & z.input<typeof AwsSfnAliasInputSchema>
  & z.input<typeof AwsSfnAliasImportSchema>
  & NodeProps

export type AwsSfnAliasOutputProps =
  & z.output<typeof AwsSfnAliasOutputSchema>
  & z.output<typeof AwsSfnAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sfn_alias

export function AwsSfnAlias(props: Partial<AwsSfnAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sfn_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSfnAliasInputSchema}
      _outputSchema={AwsSfnAliasOutputSchema}
      _importSchema={AwsSfnAliasImportSchema}
      {...props}
    />
  )
}

export const useAwsSfnAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSfnAliasOutputProps>(
    AwsSfnAlias,
    idFilter,
    baseNode,
    optional,
  )
