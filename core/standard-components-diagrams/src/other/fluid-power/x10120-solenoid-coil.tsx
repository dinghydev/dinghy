import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10120_SOLENOID_COIL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10120;points=[[0,0,0],[0,0.5,0],[0,1,0],[1,0,0],[1,0.5,0],[1,1,0],[0.5,0,0],[0.5,1,0]]',
  },
  _original_width: 27.88,
  _original_height: 18.66,
}

export function X10120SolenoidCoil(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10120_SOLENOID_COIL}
      {...props}
      _style={extendStyle(X10120_SOLENOID_COIL, props)}
    />
  )
}
