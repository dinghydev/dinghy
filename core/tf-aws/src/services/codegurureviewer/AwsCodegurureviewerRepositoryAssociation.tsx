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

export const AwsCodegurureviewerRepositoryAssociationInputSchema = TfMetaSchema
  .extend({
    repository: resolvableValue(z.object({
      bitbucket: z.object({
        connection_arn: z.string(),
        name: z.string(),
        owner: z.string(),
      }).optional(),
      codecommit: z.object({
        name: z.string(),
      }).optional(),
      github_enterprise_server: z.object({
        connection_arn: z.string(),
        name: z.string(),
        owner: z.string(),
      }).optional(),
      s3_bucket: z.object({
        bucket_name: z.string(),
        name: z.string(),
      }).optional(),
    })),
    kms_key_details: resolvableValue(
      z.object({
        encryption_option: z.string().optional(),
        kms_key_id: z.string().optional(),
      }).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsCodegurureviewerRepositoryAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  association_id: z.string().optional(),
  connection_arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  provider_type: z.string().optional(),
  s3_repository_details: z.object({
    bucket_name: z.string(),
    code_artifacts: z.object({
      build_artifacts_object_key: z.string(),
      source_code_artifacts_object_key: z.string(),
    }).array(),
  }).array().optional(),
  state: z.string().optional(),
  state_reason: z.string().optional(),
})

export const AwsCodegurureviewerRepositoryAssociationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodegurureviewerRepositoryAssociationInputProps =
  & z.input<typeof AwsCodegurureviewerRepositoryAssociationInputSchema>
  & z.input<typeof AwsCodegurureviewerRepositoryAssociationImportSchema>
  & NodeProps

export type AwsCodegurureviewerRepositoryAssociationOutputProps =
  & z.output<typeof AwsCodegurureviewerRepositoryAssociationOutputSchema>
  & z.output<typeof AwsCodegurureviewerRepositoryAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codegurureviewer_repository_association

export function AwsCodegurureviewerRepositoryAssociation(
  props: Partial<AwsCodegurureviewerRepositoryAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codegurureviewer_repository_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodegurureviewerRepositoryAssociationInputSchema}
      _outputSchema={AwsCodegurureviewerRepositoryAssociationOutputSchema}
      _importSchema={AwsCodegurureviewerRepositoryAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsCodegurureviewerRepositoryAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodegurureviewerRepositoryAssociationOutputProps>(
    AwsCodegurureviewerRepositoryAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodegurureviewerRepositoryAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodegurureviewerRepositoryAssociationOutputProps>(
    AwsCodegurureviewerRepositoryAssociation,
    idFilter,
    baseNode,
    optional,
  )
