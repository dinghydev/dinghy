import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11160_TWO_PORT_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11160;points=[[0.062,0.733,0],[0.188,0.733,0],[0.5,1,0],[0.627,0.867,0],[0.812,0.733,0],[0.937,0.733,0]]',
  },
  _width: 297.1,
  _height: 278.88,
}

export function X11160TwoPortCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11160_TWO_PORT_CARTRIDGE}
      {...props}
      _style={extendStyle(X11160_TWO_PORT_CARTRIDGE, props)}
    />
  )
}
