import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11190_TWO_PORT_CARTRIDGE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11190;points=[[0,0.624,0],[1,0.624,0],[0.5,1,0],[0.607,0.873,0],[0.86,0.79,0],[0.868,0.79,0]]',
  _width: 353.02,
  _height: 446.62,
}

export function X11190TwoPortCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11190_TWO_PORT_CARTRIDGE}
      {...props}
      _style={extendStyle(X11190_TWO_PORT_CARTRIDGE, props)}
    />
  )
}
