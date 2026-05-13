import { dockerBuildImage, getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsBedrockagentcoreAgentRuntimeInputSchema } from '../../services/bedrockagentcore/AwsBedrockagentcoreAgentRuntime.tsx'

const BedrockAgentSchema = AwsBedrockagentcoreAgentRuntimeInputSchema.extend({
  // Ergonomic shortcut: YAML can say `container_uri: <ecr-image>` instead of
  // the verbose `agent_runtime_artifact[].container_configuration[].container_uri`.
  container_uri: z.string().optional(),
})

const BedrockAgentsSchema = z.record(
  z.string(),
  BedrockAgentSchema.loose().partial(),
)

export type BedrockAgentType =
  & Omit<z.output<typeof BedrockAgentSchema>, 'container_uri'>
  & { name: string; agent_runtime_name: string }

export function parseBedrockAgents(
  bedrockAgents?: any,
): Record<string, BedrockAgentType> {
  const renderOptions = getRenderOptions()
  const cfg = bedrockAgents || (renderOptions as any).bedrockAgents
  if (!cfg) {
    throw new Error('bedrockAgents not configured')
  }
  const parsed = BedrockAgentsSchema.parse(cfg) as Record<string, any>
  for (const [name, agent] of Object.entries(parsed)) {
    agent.name = name
    // AWS requires agent_runtime_name to match /^[a-zA-Z][a-zA-Z0-9_]{0,47}$/
    // — no hyphens. The YAML map key is conventionally hyphenated to match
    // the surrounding resources, so convert here.
    agent.agent_runtime_name ??= name.replace(/-/g, '_')
    if (agent.container_uri && !agent.agent_runtime_artifact) {
      agent.agent_runtime_artifact = [{
        container_configuration: [{
          container_uri: dockerBuildImage(agent.container_uri),
        }],
      }]
    }
    delete agent.container_uri
  }
  return parsed as Record<string, BedrockAgentType>
}
