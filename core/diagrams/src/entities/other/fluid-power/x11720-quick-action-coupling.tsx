import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11720_QUICK_ACTION_COUPLING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11720;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 18.98,
  _height: 93.78,
}

export function X11720QuickActionCoupling(props: NodeProps) {
  return (
    <Shape
      {...X11720_QUICK_ACTION_COUPLING}
      {...props}
      _style={extendStyle(X11720_QUICK_ACTION_COUPLING, props)}
    />
  )
}
