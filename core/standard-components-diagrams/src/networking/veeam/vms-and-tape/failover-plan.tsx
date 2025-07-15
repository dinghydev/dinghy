import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAILOVER_PLAN = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.failover_plan;',
  _width: 38.4,
  _height: 54.4,
}

export function FailoverPlan(props: DiagramNodeProps) {
  return <Shape {...FAILOVER_PLAN} {...props} />
}
