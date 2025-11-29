import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X10480_3_2_SOLENOID_ACTUATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10480;points=[[0.57,0,0],[0.57,1,0],[0.283,0.255,0],[0.425,0.75,0],[0.283,0.75,0],[0.712,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0]]',
  },
  _width: 130,
  _height: 75.54,
}

export function X1048032SolenoidActuated(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, X10480_3_2_SOLENOID_ACTUATED)}
    />
  )
}
