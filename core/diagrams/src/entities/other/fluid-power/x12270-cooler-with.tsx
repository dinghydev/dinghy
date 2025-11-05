import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X12270_COOLER_WITH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12270;points=[[0.302,0,0],[0.302,1,0],[1,0.41,0],[1,0.595,0]]',
  },
  _original_width: 87,
  _original_height: 99.6,
}

export function X12270CoolerWith(props: NodeProps) {
  return (
    <Shape
      {...X12270_COOLER_WITH}
      {...props}
      _style={extendStyle(X12270_COOLER_WITH, props)}
    />
  )
}
