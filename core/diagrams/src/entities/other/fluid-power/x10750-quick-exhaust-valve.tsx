import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10750_QUICK_EXHAUST_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10750;points=[[0.355,0,0],[0,0.75,0]]',
  },
  _width: 156.94,
  _height: 74.66,
}

export function X10750QuickExhaustValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10750_QUICK_EXHAUST_VALVE}
      {...props}
      _style={extendStyle(X10750_QUICK_EXHAUST_VALVE, props)}
    />
  )
}
