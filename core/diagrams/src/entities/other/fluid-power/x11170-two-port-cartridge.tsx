import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11170_TWO_PORT_CARTRIDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11170;points=[[0.062,0.867,0],[0.5,1,0],[0.627,0.867,0],[0.937,0.867,0]]',
  },
  _width: 297.1,
  _height: 278.88,
}

export function X11170TwoPortCartridge(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, X11170_TWO_PORT_CARTRIDGE)} />
  )
}
