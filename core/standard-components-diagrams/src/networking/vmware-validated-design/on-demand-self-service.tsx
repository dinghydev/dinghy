import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ON_DEMAND_SELF_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.on_demand_self_service;',
  },
  _width: 50,
  _height: 42.5,
}

export function OnDemandSelfService(props: DiagramNodeProps) {
  return (
    <Shape
      {...ON_DEMAND_SELF_SERVICE}
      {...props}
      _style={extendStyle(ON_DEMAND_SELF_SERVICE, props)}
    />
  )
}
