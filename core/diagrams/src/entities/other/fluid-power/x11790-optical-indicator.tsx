import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11790_OPTICAL_INDICATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11790;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  },
  _width: 46.12,
  _height: 27.74,
}

export function X11790OpticalIndicator(props: NodeProps) {
  return (
    <Shape
      {...X11790_OPTICAL_INDICATOR}
      {...props}
      _style={extendStyle(X11790_OPTICAL_INDICATOR, props)}
    />
  )
}
