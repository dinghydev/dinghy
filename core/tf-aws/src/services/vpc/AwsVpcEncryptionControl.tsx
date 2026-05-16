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

export const AwsVpcEncryptionControlInputSchema = TfMetaSchema.extend({
  mode: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  egress_only_internet_gateway_exclusion: resolvableValue(
    z.string().optional(),
  ),
  elastic_file_system_exclusion: resolvableValue(z.string().optional()),
  internet_gateway_exclusion: resolvableValue(z.string().optional()),
  lambda_exclusion: resolvableValue(z.string().optional()),
  nat_gateway_exclusion: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  virtual_private_gateway_exclusion: resolvableValue(z.string().optional()),
  vpc_lattice_exclusion: resolvableValue(z.string().optional()),
  vpc_peering_exclusion: resolvableValue(z.string().optional()),
})

export const AwsVpcEncryptionControlOutputSchema = z.object({
  id: z.string().optional(),
  resource_exclusions: z.object({
    egress_only_internet_gateway: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    elastic_file_system: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    internet_gateway: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    lambda: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    nat_gateway: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    virtual_private_gateway: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    vpc_lattice: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
    vpc_peering: z.object({
      state: z.string(),
      state_message: z.string(),
    }),
  }).optional(),
  state: z.string().optional(),
  state_message: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsVpcEncryptionControlImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsVpcEncryptionControlInputProps =
  & z.input<typeof AwsVpcEncryptionControlInputSchema>
  & z.input<typeof AwsVpcEncryptionControlImportSchema>
  & NodeProps

export type AwsVpcEncryptionControlOutputProps =
  & z.output<typeof AwsVpcEncryptionControlOutputSchema>
  & z.output<typeof AwsVpcEncryptionControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_encryption_control

export function AwsVpcEncryptionControl(
  props: Partial<AwsVpcEncryptionControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_encryption_control'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEncryptionControlInputSchema}
      _outputSchema={AwsVpcEncryptionControlOutputSchema}
      _importSchema={AwsVpcEncryptionControlImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcEncryptionControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEncryptionControlOutputProps>(
    AwsVpcEncryptionControl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEncryptionControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEncryptionControlOutputProps>(
    AwsVpcEncryptionControl,
    idFilter,
    baseNode,
    optional,
  )
