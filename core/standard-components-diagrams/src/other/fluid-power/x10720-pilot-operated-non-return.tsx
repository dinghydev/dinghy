import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X10720_PILOT_OPERATED_NON_RETURN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x10720;points=[[0.395,0,0],[0.395,1,0],[0.795,1,0]]',
  },
  _original_width: 46.4,
  _original_height: 93.58,
}

export function X10720PilotOperatedNonReturn(props: DiagramNodeProps) {
  return (
    <Shape
      {...X10720_PILOT_OPERATED_NON_RETURN}
      {...props}
      _style={extendStyle(X10720_PILOT_OPERATED_NON_RETURN, props)}
    />
  )
}
