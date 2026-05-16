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

export const AwsMskScramSecretAssociationInputSchema = TfMetaSchema.extend({
  cluster_arn: resolvableValue(z.string()),
  secret_arn_list: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
})

export const AwsMskScramSecretAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsMskScramSecretAssociationInputProps =
  & z.input<typeof AwsMskScramSecretAssociationInputSchema>
  & NodeProps

export type AwsMskScramSecretAssociationOutputProps =
  & z.output<typeof AwsMskScramSecretAssociationOutputSchema>
  & z.output<typeof AwsMskScramSecretAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_scram_secret_association

export function AwsMskScramSecretAssociation(
  props: Partial<AwsMskScramSecretAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_scram_secret_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskScramSecretAssociationInputSchema}
      _outputSchema={AwsMskScramSecretAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskScramSecretAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskScramSecretAssociationOutputProps>(
    AwsMskScramSecretAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskScramSecretAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskScramSecretAssociationOutputProps>(
    AwsMskScramSecretAssociation,
    idFilter,
    baseNode,
    optional,
  )
