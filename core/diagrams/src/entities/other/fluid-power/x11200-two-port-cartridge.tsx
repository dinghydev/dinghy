import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11200_TWO_PORT_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11200;points=[[0,0.5,0],[1,0.5,0],[0.5,1,0],[0.606,0.832,0],[0.868,0.722,0]]',
  },
  _width: 353.02,
  _height: 334.82,
}

export function X11200TwoPortCartridge(props: NodeProps) {
  return (
    <Shape
      {...X11200_TWO_PORT_CARTRIDGE}
      {...props}
      _style={extendStyle(X11200_TWO_PORT_CARTRIDGE, props)}
    />
  )
}
