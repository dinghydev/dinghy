import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_1_CLICK_FAILOVER_ORCHESTRATION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.1_click_failover_orchestration;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function Component1ClickFailoverOrchestration(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_1_CLICK_FAILOVER_ORCHESTRATION}
      {...props}
      _style={extendStyle(COMPONENT_1_CLICK_FAILOVER_ORCHESTRATION, props)}
    />
  )
}
