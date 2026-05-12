import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import { AwsBedrockagentcoreAgentRuntime } from '../../services/bedrockagentcore/AwsBedrockagentcoreAgentRuntime.tsx'
import { resolveSecurityGroups } from '../vpc/resolveSecurityGroups.tsx'
import { resolveSubnets } from '../vpc/resolveSubnets.tsx'
import { type BedrockAgentType, parseBedrockAgents } from './types.ts'

export function BedrockAgents(props: NodeProps) {
  const agents = parseBedrockAgents((props as any).bedrockAgents)
  const ContainerComponent = props._components?.bedrockAgents as typeof Shape ||
    Shape
  const AgentComponent = props._components?.bedrockagentcoreAgentRuntime as
    | typeof AwsBedrockagentcoreAgentRuntime
    | undefined ||
    AwsBedrockagentcoreAgentRuntime
  return (
    <ContainerComponent _direction='vertical' {...props}>
      {Object.values(agents).map((agent) => (
        <BedrockAgent
          key={agent.name}
          agent={agent}
          AgentComponent={AgentComponent}
        />
      ))}
      {props.children}
    </ContainerComponent>
  )
}

// One Bedrock AgentCore agent runtime. When `network_configuration[].network_mode_config[]`
// references subnets/security groups by Name tag (e.g. `staging-private-sg`),
// resolveSubnets/resolveSecurityGroups rewrite them to `${data.aws_*.id}`
// refs and render the matching DataAws lookup nodes as siblings.
function BedrockAgent(
  { agent, AgentComponent }: {
    agent: BedrockAgentType
    AgentComponent: typeof AwsBedrockagentcoreAgentRuntime
  },
) {
  const netCfgs = (agent.network_configuration ?? []) as Array<any>
  const nmConfig = netCfgs[0]?.network_mode_config?.[0]

  const { subnetIds, Subnets } = resolveSubnets(
    nmConfig?.subnets ?? null,
    true,
  )
  const { securityGroupIds, SecurityGroups } = resolveSecurityGroups(
    nmConfig?.security_groups ?? null,
    true,
  )

  const effectiveNetworkConfiguration = netCfgs.length
    ? () => [{
      ...netCfgs[0],
      network_mode_config: [{
        ...(nmConfig ?? {}),
        subnets: subnetIds(),
        security_groups: securityGroupIds(),
      }],
    }]
    : undefined

  return (
    <AgentComponent
      _id={toId(`awsbedrockagentcoreagentruntime_${agent.name}`)}
      _title={agent.name}
      {...agent as any}
      network_configuration={effectiveNetworkConfiguration as any}
    >
      <Subnets />
      <SecurityGroups />
    </AgentComponent>
  )
}
