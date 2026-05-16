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

export const AwsSecurityhubActionTargetInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string()),
  identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecurityhubActionTargetOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsSecurityhubActionTargetImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSecurityhubActionTargetInputProps =
  & z.input<typeof AwsSecurityhubActionTargetInputSchema>
  & z.input<typeof AwsSecurityhubActionTargetImportSchema>
  & NodeProps

export type AwsSecurityhubActionTargetOutputProps =
  & z.output<typeof AwsSecurityhubActionTargetOutputSchema>
  & z.output<typeof AwsSecurityhubActionTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_action_target

export function AwsSecurityhubActionTarget(
  props: Partial<AwsSecurityhubActionTargetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_action_target'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubActionTargetInputSchema}
      _outputSchema={AwsSecurityhubActionTargetOutputSchema}
      _importSchema={AwsSecurityhubActionTargetImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubActionTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubActionTargetOutputProps>(
    AwsSecurityhubActionTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubActionTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubActionTargetOutputProps>(
    AwsSecurityhubActionTarget,
    idFilter,
    baseNode,
    optional,
  )
