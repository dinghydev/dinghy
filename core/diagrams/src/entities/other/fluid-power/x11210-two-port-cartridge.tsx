import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X11210_TWO_PORT_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11210;points=[[0,0.843,0],[0.5,1,0],[0.936,0.693,0]]',
  },
  _width: 297.38,
  _height: 241.7,
}

export function X11210TwoPortCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11210_TWO_PORT_CARTRIDGE}
      {...props}
      _style={extendStyle(X11210_TWO_PORT_CARTRIDGE, props)}
    />
  )
}
