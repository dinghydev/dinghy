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

export const AwsInspector2EnablerInputSchema = TfMetaSchema.extend({
  account_ids: resolvableValue(z.string().array()),
  resource_types: resolvableValue(z.string().array()),
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

export const AwsInspector2EnablerOutputSchema = z.object({})

export type AwsInspector2EnablerInputProps =
  & z.input<typeof AwsInspector2EnablerInputSchema>
  & NodeProps

export type AwsInspector2EnablerOutputProps =
  & z.output<typeof AwsInspector2EnablerOutputSchema>
  & z.output<typeof AwsInspector2EnablerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/inspector2_enabler

export function AwsInspector2Enabler(
  props: Partial<AwsInspector2EnablerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_inspector2_enabler'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInspector2EnablerInputSchema}
      _outputSchema={AwsInspector2EnablerOutputSchema}
      {...props}
    />
  )
}

export const useAwsInspector2Enabler = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInspector2EnablerOutputProps>(
    AwsInspector2Enabler,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInspector2Enablers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInspector2EnablerOutputProps>(
    AwsInspector2Enabler,
    idFilter,
    baseNode,
    optional,
  )
