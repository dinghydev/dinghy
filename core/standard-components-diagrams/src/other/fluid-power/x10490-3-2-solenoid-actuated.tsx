import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10490_3_2_SOLENOID_ACTUATED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10490;points=[[0.59,0,0],[0.59,1,0],[0.297,0.255,0],[0.442,0.75,0],[0.297,0.75,0],[0.74,1,0],[0,0.5,0],[0,0.625,0],[0,0.75,0]]',
  },
  _original_width: 125.58,
  _original_height: 75.54,
}

export function X1049032SolenoidActuated(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10490_3_2_SOLENOID_ACTUATED}
      {...props}
      _style={extendStyle(X10490_3_2_SOLENOID_ACTUATED, props)}
    />
  )
}
