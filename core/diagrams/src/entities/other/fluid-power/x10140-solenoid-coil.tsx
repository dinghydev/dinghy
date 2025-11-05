import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10140_SOLENOID_COIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10140;points=[[0,0.39,0],[0,0.605,0],[0,0.82,0]]',
  },
  _width: 35.68,
  _height: 55.24,
}

export function X10140SolenoidCoil(props: NodeProps) {
  return (
    <Shape
      {...X10140_SOLENOID_COIL}
      {...props}
      _style={extendStyle(X10140_SOLENOID_COIL, props)}
    />
  )
}
