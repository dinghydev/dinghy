import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ECS_COPILOT_CLI = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ecs_copilot_cli;',
  },
  _original_width: 48,
  _original_height: 44,
}

export function EcsCopilotCli(props: DiagramNodeProps) {
  return (
    <Shape
      {...ECS_COPILOT_CLI}
      {...props}
      _style={extendStyle(ECS_COPILOT_CLI, props)}
    />
  )
}
