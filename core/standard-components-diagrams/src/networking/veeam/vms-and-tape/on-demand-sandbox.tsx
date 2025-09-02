import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_DEMAND_SANDBOX = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.on_demand_sandbox;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function OnDemandSandbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_DEMAND_SANDBOX}
      {...props}
      _style={extendStyle(ON_DEMAND_SANDBOX, props)}
    />
  )
}
