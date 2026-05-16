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

export const AwsGlacierVaultLockInputSchema = TfMetaSchema.extend({
  complete_lock: resolvableValue(z.boolean()),
  policy: resolvableValue(z.string()),
  vault_name: resolvableValue(z.string()),
  ignore_deletion_error: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsGlacierVaultLockOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsGlacierVaultLockInputProps =
  & z.input<typeof AwsGlacierVaultLockInputSchema>
  & NodeProps

export type AwsGlacierVaultLockOutputProps =
  & z.output<typeof AwsGlacierVaultLockOutputSchema>
  & z.output<typeof AwsGlacierVaultLockInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glacier_vault_lock

export function AwsGlacierVaultLock(
  props: Partial<AwsGlacierVaultLockInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glacier_vault_lock'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlacierVaultLockInputSchema}
      _outputSchema={AwsGlacierVaultLockOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlacierVaultLock = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlacierVaultLockOutputProps>(
    AwsGlacierVaultLock,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlacierVaultLocks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlacierVaultLockOutputProps>(
    AwsGlacierVaultLock,
    idFilter,
    baseNode,
    optional,
  )
