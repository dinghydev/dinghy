import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/msk_scram_secret_association

export const InputSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  secret_arn_list: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMskScramSecretAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_scram_secret_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMskScramSecretAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMskScramSecretAssociation, node, id)

export const useAwsMskScramSecretAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMskScramSecretAssociation, node, id)
