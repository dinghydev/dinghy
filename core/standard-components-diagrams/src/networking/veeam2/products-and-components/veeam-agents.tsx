import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_AGENTS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_agents;',
  _width: 34,
  _height: 34,
}

export function VeeamAgents(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_AGENTS}
      {...props}
      _style={extendStyle(VEEAM_AGENTS, props)}
    />
  )
}
