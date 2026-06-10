import { getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { AwsBedrockagentcoreAgentRuntimeInputSchema } from '../../services/bedrockagentcore/AwsBedrockagentcoreAgentRuntime.tsx'

const AgentcoreRuntimeSchema = AwsBedrockagentcoreAgentRuntimeInputSchema
  .extend({
    // Ergonomic shortcut: YAML can say `container_uri: <ecr-image>` instead of
    // the verbose `agent_runtime_artifact[].container_configuration[].container_uri`.
    container_uri: z.string().optional(),
  })

const AgentcoreRuntimesSchema = z.record(
  z.string(),
  AgentcoreRuntimeSchema.loose().partial(),
)

export type AgentcoreRuntimeType =
  & Omit<z.output<typeof AgentcoreRuntimeSchema>, 'container_uri'>
  & { name: string; agent_runtime_name: string }

export function parseAgentcoreRuntimes(
  agentcoreRuntimes?: any,
): Record<string, AgentcoreRuntimeType> {
  const renderOptions = getRenderOptions()
  const cfg = agentcoreRuntimes || (renderOptions as any).agentcoreRuntimes
  if (!cfg) {
    throw new Error('agentcoreRuntimes not configured')
  }
  const parsed = AgentcoreRuntimesSchema.parse(cfg) as Record<string, any>
  for (const [name, agent] of Object.entries(parsed)) {
    agent.name ??= name
    // AWS requires agent_runtime_name to match /^[a-zA-Z][a-zA-Z0-9_]{0,47}$/
    // — no hyphens. The YAML map key is conventionally hyphenated to match
    // the surrounding resources, so convert here.
    agent.agent_runtime_name ??= agent.name.replace(/-/g, '_')
    if (agent.container_uri && !agent.agent_runtime_artifact) {
      agent.agent_runtime_artifact = [{
        container_configuration: [{
          container_uri: agent.container_uri,
        }],
      }]
    }
    delete agent.container_uri
  }
  return parsed as Record<string, AgentcoreRuntimeType>
}
