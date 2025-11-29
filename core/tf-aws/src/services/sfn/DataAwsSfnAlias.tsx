import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSfnAlias } from './AwsSfnAlias.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/sfn_alias

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  statemachine_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  description: z.string().optional(),
  routing_configuration: z.object({
    state_machine_version_arn: z.string(),
    weight: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSfnAlias(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSfnAlias
      _type='aws_sfn_alias'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSfnAliass = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSfnAlias, node, id)
