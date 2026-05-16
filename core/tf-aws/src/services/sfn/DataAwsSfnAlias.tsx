import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSfnAlias } from './AwsSfnAlias.tsx'

export const DataAwsSfnAliasInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  statemachine_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSfnAliasOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  description: z.string().optional(),
  routing_configuration: z.object({
    state_machine_version_arn: z.string(),
    weight: z.number(),
  }).array().optional(),
})

export type DataAwsSfnAliasInputProps =
  & z.input<typeof DataAwsSfnAliasInputSchema>
  & NodeProps

export type DataAwsSfnAliasOutputProps =
  & z.output<typeof DataAwsSfnAliasOutputSchema>
  & z.output<typeof DataAwsSfnAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sfn_alias

export function DataAwsSfnAlias(props: Partial<DataAwsSfnAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSfnAlias
      _type='aws_sfn_alias'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSfnAliasInputSchema}
      _outputSchema={DataAwsSfnAliasOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSfnAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSfnAliasOutputProps>(
    DataAwsSfnAlias,
    idFilter,
    baseNode,
    optional,
  )
