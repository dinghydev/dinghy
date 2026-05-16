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

export const AwsSsmActivationInputSchema = TfMetaSchema.extend({
  iam_role: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  expiration_date: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  registration_limit: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSsmActivationOutputSchema = z.object({
  activation_code: z.string().optional(),
  description: z.string().optional(),
  expiration_date: z.string().optional(),
  expired: z.boolean().optional(),
  iam_role: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  registration_count: z.number().optional(),
  registration_limit: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSsmActivationInputProps =
  & z.input<typeof AwsSsmActivationInputSchema>
  & NodeProps

export type AwsSsmActivationOutputProps =
  & z.output<typeof AwsSsmActivationOutputSchema>
  & z.output<typeof AwsSsmActivationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_activation

export function AwsSsmActivation(props: Partial<AwsSsmActivationInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_activation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmActivationInputSchema}
      _outputSchema={AwsSsmActivationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSsmActivation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmActivationOutputProps>(
    AwsSsmActivation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmActivations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmActivationOutputProps>(
    AwsSsmActivation,
    idFilter,
    baseNode,
    optional,
  )
