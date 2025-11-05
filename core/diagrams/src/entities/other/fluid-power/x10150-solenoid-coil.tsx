import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10150_SOLENOID_COIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10150;points=[[0,0.39,0],[0,0.605,0],[0,0.82,0]]',
  },
  _width: 35.68,
  _height: 55.24,
}

export function X10150SolenoidCoil(props: NodeProps) {
  return (
    <Shape
      {...X10150_SOLENOID_COIL}
      {...props}
      _style={extendStyle(X10150_SOLENOID_COIL, props)}
    />
  )
}
