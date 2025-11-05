import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X11780_PIEZO_ELECTRIC_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x11780;points=[[0,0,0],[0.5,0,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,1,0],[0,1,0],[0,0.5,0]]',
  },
  _width: 27.76,
  _height: 18.56,
}

export function X11780PiezoElectricControl(props: NodeProps) {
  return (
    <Shape
      {...X11780_PIEZO_ELECTRIC_CONTROL}
      {...props}
      _style={extendStyle(X11780_PIEZO_ELECTRIC_CONTROL, props)}
    />
  )
}
