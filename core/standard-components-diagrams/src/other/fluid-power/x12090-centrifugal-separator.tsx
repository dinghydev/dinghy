import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X12090_CENTRIFUGAL_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;verticalAlign=top;fillColor=strokeColor;align=center;outlineConnect=0;shape=mxgraph.fluid_power.x12090;points=[[0,0.5,0],[1,0.5,0]]',
  },
  _original_width: 90.42,
  _original_height: 52.4,
}

export function X12090CentrifugalSeparator(props: DiagramNodeProps) {
  return (
    <Shape
      {...X12090_CENTRIFUGAL_SEPARATOR}
      {...props}
      _style={extendStyle(X12090_CENTRIFUGAL_SEPARATOR, props)}
    />
  )
}
