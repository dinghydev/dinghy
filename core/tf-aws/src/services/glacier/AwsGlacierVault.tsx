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

export const AwsGlacierVaultInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  access_policy: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  notification: resolvableValue(
    z.object({
      events: z.string().array(),
      sns_topic: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGlacierVaultOutputSchema = z.object({
  arn: z.string().optional(),
  location: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGlacierVaultInputProps =
  & z.input<typeof AwsGlacierVaultInputSchema>
  & NodeProps

export type AwsGlacierVaultOutputProps =
  & z.output<typeof AwsGlacierVaultOutputSchema>
  & z.output<typeof AwsGlacierVaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glacier_vault

export function AwsGlacierVault(props: Partial<AwsGlacierVaultInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glacier_vault'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlacierVaultInputSchema}
      _outputSchema={AwsGlacierVaultOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlacierVault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlacierVaultOutputProps>(
    AwsGlacierVault,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlacierVaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlacierVaultOutputProps>(
    AwsGlacierVault,
    idFilter,
    baseNode,
    optional,
  )
