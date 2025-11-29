import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11700_QUICK_ACTION_COUPLING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11700;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 18.98,
  _height: 102.78,
}

export function X11700QuickActionCoupling(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11700_QUICK_ACTION_COUPLING)}
    />
  )
}
