import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12220_OIL_MIST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12220;points=[[0,0.365,0],[1,0.365,0],[0.5,1,0]]',
  },
  _original_width: 90.42,
  _original_height: 71.34,
}

export function X12220OilMist(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12220_OIL_MIST}
      {...props}
      _style={extendStyle(X12220_OIL_MIST, props)}
    />
  )
}
