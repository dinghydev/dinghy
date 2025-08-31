import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11150_TWO_PORT_CARTRIDGE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11150;points=[[0,0.307,0],[0.13,0.61,0],[0.497,1,0],[0.603,0.803,0]]',
  _width: 355.5,
  _height: 189.12,
}

export function X11150TwoPortCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11150_TWO_PORT_CARTRIDGE}
      {...props}
      _style={extendStyle(X11150_TWO_PORT_CARTRIDGE, props)}
    />
  )
}
