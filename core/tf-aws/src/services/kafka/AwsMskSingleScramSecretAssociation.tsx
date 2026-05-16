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

export const AwsMskSingleScramSecretAssociationInputSchema = TfMetaSchema
  .extend({
    cluster_arn: resolvableValue(z.string()),
    secret_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsMskSingleScramSecretAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsMskSingleScramSecretAssociationInputProps =
  & z.input<typeof AwsMskSingleScramSecretAssociationInputSchema>
  & NodeProps

export type AwsMskSingleScramSecretAssociationOutputProps =
  & z.output<typeof AwsMskSingleScramSecretAssociationOutputSchema>
  & z.output<typeof AwsMskSingleScramSecretAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_single_scram_secret_association

export function AwsMskSingleScramSecretAssociation(
  props: Partial<AwsMskSingleScramSecretAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_single_scram_secret_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskSingleScramSecretAssociationInputSchema}
      _outputSchema={AwsMskSingleScramSecretAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskSingleScramSecretAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskSingleScramSecretAssociationOutputProps>(
    AwsMskSingleScramSecretAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskSingleScramSecretAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskSingleScramSecretAssociationOutputProps>(
    AwsMskSingleScramSecretAssociation,
    idFilter,
    baseNode,
    optional,
  )
