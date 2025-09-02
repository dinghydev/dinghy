import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X11220_TWO_PORT_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11220;points=[[0.5,1,0],[0.625,0.784,0],[0.937,0.643,0]]',
  },
  _original_width: 297.38,
  _original_height: 260.58,
}

export function X11220TwoPortCartridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...X11220_TWO_PORT_CARTRIDGE}
      {...props}
      _style={extendStyle(X11220_TWO_PORT_CARTRIDGE, props)}
    />
  )
}
