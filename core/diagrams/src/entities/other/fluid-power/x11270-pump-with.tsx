import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11270_PUMP_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11270;points=[[1,0.25,0],[1,0.75,0]]',
  },
  _width: 84.6,
  _height: 55.74,
}

export function X11270PumpWith(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X11270_PUMP_WITH)} />
}
