import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11990_RESERVOIR_BREATHER_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11990;points=[[0.5,0,0],[0.5,1,0]]',
  },
  _width: 52.44,
  _height: 95.62,
}

export function X11990ReservoirBreatherFilter(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X11990_RESERVOIR_BREATHER_FILTER)}
    />
  )
}
