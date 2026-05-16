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

export const AwsDatasyncLocationSmbInputSchema = TfMetaSchema.extend({
  agent_arns: resolvableValue(z.string().array()),
  password: resolvableValue(z.string()),
  server_hostname: resolvableValue(z.string()),
  subdirectory: resolvableValue(z.string()),
  user: resolvableValue(z.string()),
  domain: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  mount_options: resolvableValue(
    z.object({
      version: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationSmbOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationSmbImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationSmbInputProps =
  & z.input<typeof AwsDatasyncLocationSmbInputSchema>
  & z.input<typeof AwsDatasyncLocationSmbImportSchema>
  & NodeProps

export type AwsDatasyncLocationSmbOutputProps =
  & z.output<typeof AwsDatasyncLocationSmbOutputSchema>
  & z.output<typeof AwsDatasyncLocationSmbInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_smb

export function AwsDatasyncLocationSmb(
  props: Partial<AwsDatasyncLocationSmbInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_smb'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationSmbInputSchema}
      _outputSchema={AwsDatasyncLocationSmbOutputSchema}
      _importSchema={AwsDatasyncLocationSmbImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationSmb = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationSmbOutputProps>(
    AwsDatasyncLocationSmb,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationSmbs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationSmbOutputProps>(
    AwsDatasyncLocationSmb,
    idFilter,
    baseNode,
    optional,
  )
