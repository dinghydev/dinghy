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

export const AwsRoute53recoveryreadinessCellInputSchema = TfMetaSchema.extend({
  cell_name: resolvableValue(z.string()),
  cells: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53recoveryreadinessCellOutputSchema = z.object({
  arn: z.string().optional(),
  parent_readiness_scopes: z.string().array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53recoveryreadinessCellInputProps =
  & z.input<typeof AwsRoute53recoveryreadinessCellInputSchema>
  & NodeProps

export type AwsRoute53recoveryreadinessCellOutputProps =
  & z.output<typeof AwsRoute53recoveryreadinessCellOutputSchema>
  & z.output<typeof AwsRoute53recoveryreadinessCellInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoveryreadiness_cell

export function AwsRoute53recoveryreadinessCell(
  props: Partial<AwsRoute53recoveryreadinessCellInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoveryreadiness_cell'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoveryreadinessCellInputSchema}
      _outputSchema={AwsRoute53recoveryreadinessCellOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoveryreadinessCell = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoveryreadinessCellOutputProps>(
    AwsRoute53recoveryreadinessCell,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoveryreadinessCells = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoveryreadinessCellOutputProps>(
    AwsRoute53recoveryreadinessCell,
    idFilter,
    baseNode,
    optional,
  )
