import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11990_RESERVOIR_BREATHER_FILTER = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11990;points=[[0.5,0,0],[0.5,1,0]]',
  _width: 52.44,
  _height: 95.62,
}

export function X11990ReservoirBreatherFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11990_RESERVOIR_BREATHER_FILTER}
      {...props}
      _style={extendStyle(X11990_RESERVOIR_BREATHER_FILTER, props)}
    />
  )
}
