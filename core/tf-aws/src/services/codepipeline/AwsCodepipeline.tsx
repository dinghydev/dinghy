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

export const InputSchema = TfMetaSchema.extend({
  artifact_store: resolvableValue(
    z.object({
      location: z.string(),
      region: z.string().optional(),
      type: z.string(),
      encryption_key: z.object({
        id: z.string(),
        type: z.string(),
      }).optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  execution_mode: resolvableValue(z.string().optional()),
  pipeline_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  stage: resolvableValue(
    z.object({
      name: z.string(),
      action: z.object({
        category: z.string(),
        configuration: z.record(z.string(), z.string()).optional(),
        input_artifacts: z.string().array().optional(),
        name: z.string(),
        namespace: z.string().optional(),
        output_artifacts: z.string().array().optional(),
        owner: z.string(),
        provider: z.string(),
        region: z.string().optional(),
        role_arn: z.string().optional(),
        run_order: z.number().optional(),
        timeout_in_minutes: z.number().optional(),
        version: z.string(),
      }).array(),
      before_entry: z.object({
        condition: z.object({
          result: z.string().optional(),
          rule: z.object({
            commands: z.string().array().optional(),
            configuration: z.record(z.string(), z.string()).optional(),
            input_artifacts: z.string().array().optional(),
            name: z.string(),
            region: z.string().optional(),
            role_arn: z.string().optional(),
            timeout_in_minutes: z.number().optional(),
            rule_type_id: z.object({
              category: z.string(),
              owner: z.string().optional(),
              provider: z.string(),
              version: z.string().optional(),
            }),
          }).array(),
        }),
      }).optional(),
      on_failure: z.object({
        result: z.string().optional(),
        condition: z.object({
          result: z.string().optional(),
          rule: z.object({
            commands: z.string().array().optional(),
            configuration: z.record(z.string(), z.string()).optional(),
            input_artifacts: z.string().array().optional(),
            name: z.string(),
            region: z.string().optional(),
            role_arn: z.string().optional(),
            timeout_in_minutes: z.number().optional(),
            rule_type_id: z.object({
              category: z.string(),
              owner: z.string().optional(),
              provider: z.string(),
              version: z.string().optional(),
            }),
          }).array(),
        }).optional(),
        retry_configuration: z.object({
          retry_mode: z.string().optional(),
        }).optional(),
      }).optional(),
      on_success: z.object({
        condition: z.object({
          result: z.string().optional(),
          rule: z.object({
            commands: z.string().array().optional(),
            configuration: z.record(z.string(), z.string()).optional(),
            input_artifacts: z.string().array().optional(),
            name: z.string(),
            region: z.string().optional(),
            role_arn: z.string().optional(),
            timeout_in_minutes: z.number().optional(),
            rule_type_id: z.object({
              category: z.string(),
              owner: z.string().optional(),
              provider: z.string(),
              version: z.string().optional(),
            }),
          }).array(),
        }),
      }).optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  trigger: resolvableValue(
    z.object({
      provider_type: z.string(),
      git_configuration: z.object({
        source_action_name: z.string(),
        pull_request: z.object({
          events: z.string().array().optional(),
          branches: z.object({
            excludes: z.string().array().optional(),
            includes: z.string().array().optional(),
          }).optional(),
          file_paths: z.object({
            excludes: z.string().array().optional(),
            includes: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        push: z.object({
          branches: z.object({
            excludes: z.string().array().optional(),
            includes: z.string().array().optional(),
          }).optional(),
          file_paths: z.object({
            excludes: z.string().array().optional(),
            includes: z.string().array().optional(),
          }).optional(),
          tags: z.object({
            excludes: z.string().array().optional(),
            includes: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
      }),
    }).array().optional(),
  ),
  variable: resolvableValue(
    z.object({
      default_value: z.string().optional(),
      description: z.string().optional(),
      name: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  trigger_all: z.object({
    git_configuration: z.object({
      pull_request: z.object({
        branches: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
        events: z.string().array(),
        file_paths: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
      }).array(),
      push: z.object({
        branches: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
        file_paths: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
        tags: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
      }).array(),
      source_action_name: z.string(),
    }).array(),
    provider_type: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/codepipeline

export function AwsCodepipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codepipeline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodepipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsCodepipeline, idFilter, baseNode, optional)

export const useAwsCodepipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsCodepipeline, idFilter, baseNode, optional)
